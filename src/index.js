import dotenv from 'dotenv'
import connectDb from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path:'./.env'
})



connectDb()
.then(()=>{
    app.listen(process.env.PORT),()=>{
        console.log(`app is running on ${process.env.PORT}`);
    };
})
.catch((error)=>{
    console.log("src/index.js mongodb  connection error",error)

})
;