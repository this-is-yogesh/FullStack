import { Schema, Model } from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
      index: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: { type: String },
    watchHistory: [{ type: Schema.Types.ObjectId, ref: "Videos" }],
    avatar: { type: String, required: true },
    coverImage: { type: String, required: true },
  },
  { timestamps: true }
);


userSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();
//if password is not modified then we do not have to do any changes
    this.password = await bcrypt.hash(this.password, 10)
    next() // as middleware so writing next in the end 
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullName: this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = Model("User", userSchema);

