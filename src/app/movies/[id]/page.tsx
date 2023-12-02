import { Genre, MovieDetail, Videos } from "@/lib/types/movies";
import axios from "axios";

async function getData(id: string) {
  const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGFiNzBhNTZkYWQ0OTIwOWEwN2EyMTk1YjQwMGIwZiIsInN1YiI6IjY1Njk4MjAxZDM5OWU2MDBjNDBmYjRhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qkFPicxaue4i1QpZiZWCrV4uEaJCsWQlnmCgzjmP8Vw",
    },
  });
  return result.data as MovieDetail;
}

async function getVideo(id: string) {
  const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGFiNzBhNTZkYWQ0OTIwOWEwN2EyMTk1YjQwMGIwZiIsInN1YiI6IjY1Njk4MjAxZDM5OWU2MDBjNDBmYjRhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qkFPicxaue4i1QpZiZWCrV4uEaJCsWQlnmCgzjmP8Vw",
    },
  });
  return result.data as Videos;
}

async function Detail({ params }: { params: { id: string } }) {
  const datas = await getData(params.id);
  const videos = await getVideo(params.id);
  return (
    <div className="container mx-auto mt-8">
      {datas && (
        <div className=" bg-gray-800 text-white mb-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 p-8 rounded-lg">
            <div className="lg:col-span-1">
              <img src={`https://image.tmdb.org/t/p/w500${datas.poster_path}`} alt={`${datas.title} Poster`} className="w-auto h-auto object-cover mb-4 rounded" />
            </div>
            <div className="lg:col-span-1 pl-8">
              <h1 className="text-3xl font-semibold mb-4">{datas.title}</h1>
              <p className="text-lg mb-4">{datas.overview}</p>
              <div className="flex items-center mb-4">
                <span className="mr-2">Release Date:</span>
                <span className="font-semibold">{datas.release_date}</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="mr-2">Rating:</span>
                <span className="font-semibold">{datas.vote_average}/10</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="mr-2">Genres:</span>
                <div className="flex flex-wrap">
                  {datas.genres.map((genre: Genre) => (
                    <span key={genre.id} className="mr-2 mb-2 px-2 py-1 bg-gray-600 rounded">
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
              {/* Add more details as needed */}
            </div>
          </div>
          {/* Conditionally render the iframe section below the details */}
          {videos && videos.results.length > 0 && (
            <div className="lg:col-span-1 mt-4 pb-8 flex justify-center items-center">
              <iframe title="Trailer" width="90%" height="550" src={`https://www.youtube.com/embed/${videos.results[0].key}`} frameBorder="0" allowFullScreen></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default Detail;
