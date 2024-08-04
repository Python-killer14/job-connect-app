import NextAuth, { Session } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import { JWT } from "next-auth/jwt"
import connectDB from "@/utils/connectDB"
import userModel from "@/app/models/userModel"

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    Google,
    Credentials({
      name: "credentials",
      credentials: {
        email: {
          label: "Email", type: "email", placeholder: "jsmith"
        },
        password: {label: "Password", type: "password"}
      },
      authorize: async (credentials) => {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Missing email or password")
          }
      
          await connectDB()
          let userFound = await userModel.findOne({email: credentials.email})
      
          if (!userFound) {
            throw new Error("User not found, please sign up.")
          }
      
          // Here verify the password
          // If password verification fails, throw an error
      
          return {
            id: userFound._id.toString(),
            firstName: userFound.firstName,
            lastName: userFound.lastName,
            email: userFound.email,
            image: userFound.profileImg
          }
        } catch (err: any) {
          console.error("Catched error -----")
          console.error(" Authorization error:", err.message)
          throw err
          // return {error: err.message}
        }
      }

    })
  ],
  callbacks: {
    // : Promise<JWT | null>
    async jwt({token, user, session}) {
      if (user) {
        return {
          ...token,
          id: user.id ?? '',
          firstName: user.firstName ?? "",
          lastName: user.lastName ?? '',
          email: user.email ?? '',
          image: user.image ?? '',
        }
      }
    
      return null
    },

    // Define the session
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.firstName = token.firstName;
      session.user.lastName = token.lastName;
      session.user.image = token.image;
      return session;
    },
  },

  pages: {
    signIn: "/signin",
  }
})