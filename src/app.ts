// here importing meta data to use typeorm for more info go to typeorm doc 
import "reflect-metadata"

// same like javascript es6 module 
import express,{Request,Response} from 'express';
const app = express();

import {DataSource} from 'typeorm'

import { User } from "./entities/User";

app.use(express.json());
const port = 3000;

app.get('/', async function(req:Request,res:Response){

    const userrepo = AppDataSource.getRepository(User);
   
//    find 
    // const allrecord = await userrepo.find();
    // res.json(allrecord);

    // insert

    let user : User = new User();
    user.email = "sagarregmi@gmail.com";
    user.firstName = "sagar";
    user.lastName="regmi";
    user.number = "98043333333";
   const createddata= await userrepo.save(user);

   res.json(createddata);


//    delete  
// await userrepo.delete(2);


// update 
// await userrepo.update(1,firstName:"saga",lastName:"reg",email:"saga@regmi22",number:"8888888899999")
})

// giving connection to the postgress database 

const AppDataSource = new DataSource({
         
    type: "postgres",
    host:"localhost",
    port:5432,
    username:"postgres",
    password:"germany4321#",
    database:"postgres",
    entities:["src/entities/*{.ts,.js}"],
    synchronize:true,
    logging:true
});
// loggin true to see the logs file from the typeorm
// entities vitra jau tyaa vitra jun sukai folder .ts and .js file pauxau tyo use gara .js for the production build
// here we are providing .then to show that what will be after initialization of db is  successfull
AppDataSource.initialize().then(()=>{ 
    
    
    console.log("database connected successfully")
}).catch((error)=>{console.log(error)});



app.listen(port,()=>{
    console.log(`started server at port ${port}.`)
});