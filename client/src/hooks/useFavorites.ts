import { useState, useEffect } from "react";
import { ICreateFavoriteRequest, IFavorite } from "@/lib/types";
import { createClient } from "@/lib/supabase/client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export function useFavorites() {
  const [favorites, setFavorites] = useState<IFavorite[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  const { user, isLoading, isAuthenticated } = useKindeBrowserClient();
  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    if (!isLoading && isAuthenticated && user?.id) {
      loadFavorites();
    } else if (!isLoading && !isAuthenticated) {
      setFavorites([]);
      setLoading(false);
    }
  }, [user?.id, isAuthenticated, isLoading]);

  const loadFavorites = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("favorites")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setFavorites(data || []);
    } catch (error) {
      console.error("Error loading favorites:", error);
    } finally {
      setLoading(false);
    }
  };

  const addFavorite = async (favorite: ICreateFavoriteRequest) => {
    try {
      const { data, error } = await supabase
        .from("favorites")
        .insert({
          job_id: favorite.job_id,
          job_title: favorite.job_title,
          job_description: favorite.job_description,
          company_name: favorite.company_name,
          company_country: favorite.company_country,
          position_schedule: favorite.position_schedule,
          user_id: user?.id,
        })
        .select()
        .single();

      if (error) throw error;

      setFavorites((prev) => [data, ...prev]);
      return data;
    } catch (error) {
      console.error("Error adding favorite:", error);
      throw error;
    }
  };

  const removeFavorite = async (jobId: string) => {
    try {
      const { error } = await supabase
        .from("favorites")
        .delete()
        .eq("job_id", jobId);

      if (error) throw error;

      setFavorites((prev) => prev.filter((fav) => fav.job_id !== jobId));
    } catch (error) {
      console.error("Error removing favorite:", error);
      throw error;
    }
  };

  const isFavorite = (jobId: string) => {
    return favorites.some((fav) => fav.job_id === jobId);
  };

  const toggleFavorite = async (job: ICreateFavoriteRequest) => {
    if (isFavorite(job.job_id)) {
      await removeFavorite(job.job_id);
    } else {
      await addFavorite(job);
    }
  };

  return {
    favorites,
    loading,
    addFavorite,
    removeFavorite,
    isFavorite,
    toggleFavorite,
    refetch: loadFavorites,
  };
}
