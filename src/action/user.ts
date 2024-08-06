'use server';
import { signIn } from "@/lib/auth";

const authenticate = async (formData: any) => {
  try {
    await signIn("credentials", 
      {
        ...formData,
      redirect: false,
      callbackUrl: "/",
    }
  );
  } catch (err: any) {    
    if (err.type === "AuthError") {
      return {
        error: {message: err.message, name: err.name}
      }
    }
    return { error: { message: 'Failed to sign in' , error: err.message, name: err.name}}
  }
};

export { authenticate };