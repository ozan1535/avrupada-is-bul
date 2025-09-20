import { createBrowserClient } from "@supabase/ssr";

export const createClient = () => {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY!,
  );
};

/* 
import { createBrowserClient } from "@supabase/ssr";
import jwt from "jsonwebtoken";

export const createClientWithKindeAuth = (kindeToken?: string) => {
  let authHeaders = {};

  // If we have a Kinde token, sign it like your server does
  if (kindeToken && process.env.NEXT_PUBLIC_KINDE_CLIENT_SECRET) {
    try {
      const signedToken = jwt.sign(
        { sub: kindeToken }, // or however Kinde structures the token
        process.env.NEXT_PUBLIC_KINDE_CLIENT_SECRET
      );
      console.log(signedToken, "signedtoken");
      authHeaders = {
        Authorization: `Bearer ${signedToken}`,
      };
    } catch (error) {
      console.error("Error signing Kinde token:", error);
    }
  }

  const client = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY!,
    {
      global: {
        headers: authHeaders,
      },
    }
  );

  return client;
};
 */
/* 
import { createBrowserClient } from "@supabase/ssr";
import jwt from "jsonwebtoken";

export const createClientWithKindeAuth = (
  kindeIdToken?: any,
  userId?: string
) => {
  let authHeaders = {};

  // If we have a Kinde ID token, sign it like your server does
  if (kindeIdToken && process.env.NEXT_PUBLIC_KINDE_CLIENT_SECRET) {
    try {
      // Use the actual ID token object, not just user ID
      const signedToken = jwt.sign(
        kindeIdToken, // Pass the full ID token
        process.env.NEXT_PUBLIC_KINDE_CLIENT_SECRET
      );

      authHeaders = {
        Authorization: `Bearer ${signedToken}`,
      };

      console.log("Created signed token with user ID:", userId);
    } catch (error) {
      console.error("Error signing Kinde token:", error);
    }
  }

  const client = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY!,
    {
      global: {
        headers: authHeaders,
      },
    }
  );

  return client;
}; */
