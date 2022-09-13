import { Controller,Get,Param,Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService){}
    @Post("signup")
    signup(){
        return 'omkar is great'
    }
    
    @Post('signin')
    signin(){
        return 'i am signed in'
    }
    @Get()
        public getAuths(){
            return this.authService.getAuths();
        }
    @Get(':id')
    public async getAuthById(@Param('id') id:string){
        return this.authService.getAuthById(id)
    }

}
