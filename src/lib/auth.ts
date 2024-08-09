import NextAuth, { AuthError, CredentialsSignin, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import connectDB from "@/utils/connectDB"; 
import userModel from "@/app/models/userModel";
import bcrypt from "bcryptjs";


class customError extends AuthError {
  constructor(message: string, name: string) {
      super()
      this.message = message
      this.name = name
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET, 
    }),
    
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

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

        const isMatched = password === userFound.password;

        if (!isMatched) {
          throw new customError("Incorrect password", "password");
        }

        const userData = {
          firstName: userFound.firstName as string,
          lastName: userFound.lastName as string,
          email: userFound.email as string,
          role: userFound.role as string,
          image: userFound.profileImg as string,
          id: userFound._id as string,
        };

        return userData;
      },
    }),
  ],

  pages: {
    signIn: "/signin",
  },

  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.email = token.email as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.image = token.image as string;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.email = user.email as string;
        token.firstName = user.firstName as string;
        token.lastName = user.lastName as string;
        token.role = user.role as string;
        token.image = user.image as string;
      } else if (!token.id) {
        await connectDB();
        const existingUser = await userModel.findOne({ email: token.email });
        
        if (existingUser) {
          token.id = existingUser._id.toString();
          token.firstName = existingUser.firstName;
          token.lastName = existingUser.lastName;
          token.role = existingUser.role;
          token.image = existingUser.profileImg;
        }
      }
      return token;
    },

    async signIn({ user, account }) {
      if (account?.provider === "google") {
        try {
          const { email, name, image } = user;
          await connectDB();
          const alreadyUser = await userModel.findOne({ email });

          if (!alreadyUser) {
            const googleUser = new userModel({
              email,
              firstName: name,
              lastName: name,
              profileImg: image,
              googleAuth: true,
              role: "JobSeeker",
            });
            await googleUser.save();
            user.id = googleUser._id.toString();
            user.role = googleUser.role;
          } else {
            user.id = alreadyUser._id.toString();
            user.role = alreadyUser.role;
            user.firstName = alreadyUser.firstName;
            user.lastName = alreadyUser.lastName;
          }

          return true;
        } catch (error: any) {
          throw new customError(error, "email");
        }
      }

      if (account?.provider === "credentials") {
        return true;
      } else {
        return false;
      }
    },
  },
});



