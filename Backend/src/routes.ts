//Import routes from express
import { Router } from "express"
import { Register, Login, AuthenticatedUser, CheckGetMethod, Refresh, LogOut} from "./controller/auth.controller";
import { Forgot } from "./controller/forgot.controller";

//Write all the router 
export  const routes = (router: Router) =>{
    router.post('/api/register', Register);
    router.post('/api/login', Login);
    router.get('/api/user', AuthenticatedUser);
    router.get('/api/checkgetmethod', CheckGetMethod);
    router.post('/api/refresh', Refresh);
    router.post('/api/logout', LogOut);
    router.post('/api/forgot', Forgot);
}