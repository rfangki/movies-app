import { getFavoriteMovies } from "@/lib/apis/movie";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";

async function page() {
  const cookieStore = cookies();
  const userID = cookieStore.get("userID");
  const sessionID = cookieStore.get("sessionID");
  const datas = await getFavoriteMovies(userID?.value ?? "", sessionID?.value ?? "");
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold mb-6">Movies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-8">
        {datas.results.map((item) => (
          <Link href={`/movies/${item.id}`} key={item.id} className="group relative">
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title} className="w-full h-74 object-cover rounded-lg transition duration-300 transform group-hover:scale-105" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;
