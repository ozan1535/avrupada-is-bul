import { createClient } from "./server";

export interface KindeUser {
  id: string;
  email?: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
}

export async function syncUserProfile(kindeUser: KindeUser) {
  const supabase = await createClient();

  try {
    const { data, error } = await supabase
      .from("profiles")
      .upsert(
        {
          kinde_user_id: kindeUser.id,
          email: kindeUser.email,
          name:
            (kindeUser?.given_name || "") +
            " " +
            (kindeUser?.family_name || ""),
          picture: kindeUser.picture,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "kinde_user_id",
        }
      )
      .select();

    if (error) {
      //   console.error("Error syncing user profile:", error);
      return { success: false, error };
    }

    //  console.log("User profile synced successfully:", data);
    return { success: true, data };
  } catch (error) {
    // console.error("Unexpected error syncing user:", error);
    return { success: false, error };
  }
}

export async function getUserProfile(kindeUserId: string) {
  const supabase = await createClient();

  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("kinde_user_id", kindeUserId)
      .single();

    if (error && error.code !== "PGRST116") {
      // PGRST116 = no rows returned
      console.error("Error fetching user profile:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Unexpected error fetching user:", error);
    return { success: false, error };
  }
}
