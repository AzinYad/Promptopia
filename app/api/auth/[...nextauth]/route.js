import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import User from '@models/user';
import { connectToDB } from "@utils/database";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {
        try {
            // serverless -> lambda -> dynamodb
            await connectToDB();
            // check if the user already exists
            const userExists = await User.findOne({
                email: profile.email
            })

            // if not, create a new user
            if (!userExists) {
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" ", "").toLowerCase(),
                    image: profile.picture
                })
            }
            return true;
        } catch (error) {
            console.log(error)
            return false
        }
    }
})

export { handler as Get, handler as Post };