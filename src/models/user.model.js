import mongoose,{Schema} from "mongoose";
import jwt from  "jsonwebtoken";
import bcrypt from "bcrypt"


const userSchema=new Schema(
    {
        username:{
            type:String,
            required:true,
            lowercase:true,
            trim:true,
            index:true
        },
        email:{
            type:String,
            required:true,
            lowercase:true,
            trim:true,
            
        },

        fullname:{
            type:String,
            required:true,
            lowercase:true,
            trim:true,
            index:true
        },
        avatar:{
            type:String,
            required:true,
        },
        comverImage:{
            type:String
        },
        watchHistory:[
            {
                type:Schema.Types.ObjectId,
                ref:"Video"

            }
        ],
        password:{
            type:String,
            required:[true,"Password is required"]
        },
        refreshToken:{
            type:String
        }
    
    },
    {timestamps:true}

);

userSchema.pre("save",async function(next){
    if (!this.isModified("password")) return next();

    this.password=bcrypt.hash(this.password,10);
    next();
})

export const User=new mongoose.Model("User",userSchema)