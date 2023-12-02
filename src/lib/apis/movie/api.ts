import { Response } from "@/lib/types/api";
import axiosWithConfig from "../axiosWithConfig";

export const getFavoriteMovies = async (user_id: string, session_id: string) => {
  try {
    const response = await axiosWithConfig.get(`/account/${user_id}/favorite/movies?sort_by=created_at.desc&session_id=${session_id}`);
    return response.data as Response;
  } catch (error: any) {
    throw Error("failed to get favorite movies");
  }
};
