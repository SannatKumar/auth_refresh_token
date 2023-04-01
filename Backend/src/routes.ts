//Import routes from express
import { Router } from "express"
import { Register, Login, AuthenticatedUser, CheckGetMethod} from "./controller/auth.controller";

//Write all the router 
export  const routes = (router: Router) =>{
    router.post('/api/register', Register);
    router.post('/api/login', Login);
    router.get('/api/user', AuthenticatedUser);
    router.get('/api/checkgetmethod', CheckGetMethod);
}