import axios from "axios";
import { getCookie } from "cookies-next";

interface Queries {
  session_id?: string;
}

let session_id = getCookie("sessionID") ?? "";
const axiosWithConfig = axios.create();

export const setAxiosConfig = (token: string) => {
  session_id = token;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  let queries: Queries = {};

  if (session_id !== "") {
    queries["session_id"] = session_id;
  }

  axiosConfig.baseURL = "https://api.themoviedb.org/3/";
  axiosConfig.params = {
    ...axiosConfig.params,
    ...queries,
  };
  axiosConfig.headers.Authorization =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGFiNzBhNTZkYWQ0OTIwOWEwN2EyMTk1YjQwMGIwZiIsInN1YiI6IjY1Njk4MjAxZDM5OWU2MDBjNDBmYjRhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qkFPicxaue4i1QpZiZWCrV4uEaJCsWQlnmCgzjmP8Vw";
  return axiosConfig;
});

export default axiosWithConfig;
