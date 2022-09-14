import { Body, Controller,Delete,Get,Param,Post,Query,Put } from "@nestjs/common";
import { query } from "express";
import { AuthData } from "./auth.data";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService){}
    @Get()
        public getAuths(){
            return this.authService.getAuths();
        }
    @Get(':id')
    public async getAuthById(@Param('id') id:string){
        return this.authService.getAuthById(id)
    }
    @Post()
    public postAuth(@Body() auth:AuthData) {
        return this.authService.postAuth(auth);
    } 
    @Delete(':id')
    public async deleteAuthById(@Param('id') id:string){
        return this.authService.deleteAuthById(id);
    } 
    @Put(':id')
    public async putAuthById(@Param('id') id:string,@Query() query){
        const property_name=query.property_name;
        const property_value=query.property_value;
        return this.authService.putAuthById(id,property_value,property_value);
    } 
    
}
