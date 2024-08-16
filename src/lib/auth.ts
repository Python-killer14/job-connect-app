import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import connectDB from "@/utils/connectDB"; 
import userModel from "@/app/models/userModel";
import bcrypt, { compare } from "bcryptjs";
import { customError } from "./customConstructor";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,

    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        const email = credentials?.email;
        const password = credentials?.password || "";

        console.log("Email: ", email, "Password: ", password);
        
  
        if (!email) {
            throw new customError("Please provide email", "email");
          }
  
        if (!password) {
          throw new customError("Please provide password", "password");
        }

        await connectDB();
        const userFound = await userModel.findOne({ email });

        if (!userFound) {
          throw new customError("This email is not registered.", "email");
        }

        const isMatched = await compare(password, userFound.password);


        if (!isMatched) {
          throw new customError("Incorrect password", "password");
        }

        return {
          id: userFound._id,
          firstName: userFound.firstName,
          lastName: userFound.lastName,
          email: userFound.email,
          role: userFound.role,
          image: userFound.profileImg,
        };
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          await connectDB();
          const existingUser = await userModel.findOne({ email: user.email });

          if (existingUser) {
            user.id = existingUser._id.toString();
            user.firstName = existingUser.firstName;
            user.lastName = existingUser.lastName;
            user.role = existingUser.role;
            user.image = existingUser.profileImg;
          } else {
            const newUser = await userModel.create({
              email: user.email,
              firstName: user.name,
              lastName: user.name|| "No lastName",
              profileImg: user.image,
              role: "JobSeeker", // Default role, can be customized
              googleAuth: true,
            });
  
            user.id = newUser._id.toString();
            user.firstName = newUser.firstName;
            user.lastName = newUser.lastName;
            user.role = newUser.role;
            user.image = newUser.profileImg;
          }
        
  
          return true;
        } catch (error) {
          console.error("Error while creating user:", error);
          return false;
        }
      }

      if (account?.provider === "credentials") {
        return true;
      }

      return false;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.firstName = user.firstName as string;
        token.lastName = user.lastName as string;
        token.email = user.email as string;
        token.role = user.role as string;
        token.image = user.image as string;
      }
      return token;
    },
    async session({ session, token }) {
      // if (token?.id) {
        session.user.id = token.id;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.image = token.image;
      // }
      return session;
    },
  },
});


