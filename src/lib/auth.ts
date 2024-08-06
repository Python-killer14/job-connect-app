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

        // const isMatched = await bcrypt.compare(password, user.password);
        const isMatched = password === userFound.password;

        if (!isMatched) {
          throw new customError("Incorrect password", "password");
        }

        const userData = {
          firstName: userFound.firstName,
          lastName: userFound.lastName,
          email: userFound.email,
          role: userFound.role,
          id: userFound._id,
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
      if (token && token?.role) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },

    signIn: async ({ user, account }) => {
      if (account?.provider === "google") {
        try {
          const { email, name, image } = user;
          await connectDB();
          const alreadyUser = await userModel.findOne({ email });

          if (!alreadyUser) {
            let googleUser =  new userModel({ email: email, firstName: name, lastName: name, profileImg: image, title: "developer"  });
            await googleUser.save();
            return true;
          } 
            return true;
          
        } catch (error: any) {
          throw new Error("Error while creating user", error);
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