import config from "../config/config";

import { Client, ID, Databases,Storage ,Query } from "appwrite";

export class DatabaseService{
    Client = new Client();
    Databases;
    bucket;

    constructor (){
        this.Client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.Databases = new Databases(this.Client);
        this.bucket = new Storage(this.Client);
    }
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.Databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                // ID.unique(),   if i do this its ok .other wise i use Slug value 
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }

            )
        
        } catch (error) {
            console.log("Appwrite service::CreatePost::error",error);
        }
    }
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.Databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );

        } catch (error) {
            console.log("Appwrite service::updatePost::error",error);
        }
    }
    async deletePost({slug}){
        try {
             await this.Databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
             )

             return true;

            
        } catch (error) {
            console.log("Appwrite Service :: deletePost::error",error);
            return false;
        }
    }
    async getPost(slug){
        try {
          return  await this.Databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
          )
            
        } catch (error) {
        console.log("Appwrite Server :: getPost :: error ",error);
            return false;

        }
    }
    async getPosts(Queries = [Query.equal("Status","active")]){
        try {
            return await this.Databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                Queries,
               

                
            )
        } catch (error) {
            console.log("Appwrite Server :: getPosts :: error ",error);
            return false;
        }
    }

    // file upload services
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwarite Service :: uploadFile::error",error);
            return false;

        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
    
}


const service = new DatabaseService()
export default service