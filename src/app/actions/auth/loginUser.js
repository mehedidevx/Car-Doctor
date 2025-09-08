"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionObj } from "@/lib/dbConnect";

export const loginUser = async (payload) => {
    const {email, password} = payload;
    const userCollection = dbConnect(collectionObj.userCollection);
    const user  = await userCollection.findOne({ email });
    if(!user) return null;
    const isPasswordOk = bcrypt.compare(user.password, password);
    if(!isPasswordOk)return null;
    return user;
}