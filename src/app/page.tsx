import { Response } from "@/lib/types/api";
import axios from "axios";
import Link from "next/link";

async function getData() {
  const result = await axios.get("https://api.themoviedb.org/3/movie/now_playing", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGFiNzBhNTZkYWQ0OTIwOWEwN2EyMTk1YjQwMGIwZiIsInN1YiI6IjY1Njk4MjAxZDM5OWU2MDBjNDBmYjRhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qkFPicxaue4i1QpZiZWCrV4uEaJCsWQlnmCgzjmP8Vw",
    },
  });
  return result.data as Response;
}

async function getPopular() {
  const result = await axios.get("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGFiNzBhNTZkYWQ0OTIwOWEwN2EyMTk1YjQwMGIwZiIsInN1YiI6IjY1Njk4MjAxZDM5OWU2MDBjNDBmYjRhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qkFPicxaue4i1QpZiZWCrV4uEaJCsWQlnmCgzjmP8Vw",
    },
  });
  return result.data as Response;
}

async function upComing() {
  const result = await axios.get("https://api.themoviedb.org/3/movie/upcoming", {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGFiNzBhNTZkYWQ0OTIwOWEwN2EyMTk1YjQwMGIwZiIsInN1YiI6IjY1Njk4MjAxZDM5OWU2MDBjNDBmYjRhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qkFPicxaue4i1QpZiZWCrV4uEaJCsWQlnmCgzjmP8Vw",
    },
  });
  return result.data as Response;
}

async function Home() {
  const datas = await getData();
  const populars = await getPopular();
  const upcomings = await upComing();

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold mb-6">Now Playing</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-8">
        {datas.results.slice(0, 10).map((item) => (
          <Link href={`/movies/${item.id}`} key={item.id} className="group relative">
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} className="w-full h-74 object-cover rounded-lg transition duration-300 transform group-hover:scale-105" />
          </Link>
        ))}
      </div>
      <h1 className="text-3xl font-semibold mb-6 mt-6">Now Popular</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-8">
        {populars.results.slice(0, 5).map((item) => (
          <Link href={`/movies/${item.id}`} key={item.id} className="group relative">
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} className="w-full h-74 object-cover rounded-lg transition duration-300 transform group-hover:scale-105" />
          </Link>
        ))}
      </div>
      <h1 className="text-3xl font-semibold mb-6 mt-6">Upcoming</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
        {upcomings.results.slice(0, 6).map((item) => (
          <Link href={`/movies/${item.id}`} key={item.id} className="group relative">
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} className="w-full h-74 object-cover rounded-lg transition duration-300 transform group-hover:scale-105" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
