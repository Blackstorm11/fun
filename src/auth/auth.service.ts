import { HttpException, Injectable, Param } from "@nestjs/common";
import { StringSchemaDefinition } from "mongoose";
import { resolve } from "path";
import { AuthData } from "./auth.data";
import { AUTHOR } from "./auth.fatch";

@Injectable()
export class AuthService {
    private auths = AUTHOR;
    postauth: any;

    public getAuths(){
        return this.auths ;
    }
    public postAuth(auth: AuthData){
        return this.auths.push(auth);
    }
    public getAuthById(id: string):Promise<any>{
        const authId =String(id);
        return new Promise((resolve)=> {
        const auth = this.auths.find((auth) => auth.id === authId);
        if (!auth){
            throw new HttpException("not found",404);
            
        }
        return resolve(auth);
    });
    }
    public deleteAuthById(id:string):Promise<any>{
        const authId=String(id);
        return new Promise((resolve)=>{
            const index=this.auths.findIndex((auth)=>auth.id=== authId)
            if (index===-1){
                throw new HttpException("not found",404);
            }
            this.auths.splice(index,1)
            return resolve(this.auths);
        });
    }
    public putAuthById(id:NamedCurve,propertyName:string,propertyvalue:string):Promise<any>{
        const authId =String(id);
        return new Promise((resolve)=>{
            const index=this.auths.findIndex((auth)=> auth.id=== authId)
        if(index===-1){
            throw new HttpException("not found" ,404)    
        }
        this.auths[index][propertyName]=propertyvalue;
        return resolve(this.auths[index]);
        
        });
    }    
}