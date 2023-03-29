//Import routes from express
import { Router } from "express"
import { Register } from "./controller/auth.controller";

//Write all the router 
export  const routes = (router: Router) =>{
    router.post('/api/register', Register);
}