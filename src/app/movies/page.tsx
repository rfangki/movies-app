import { Response } from "@/lib/types/api";
import axios from "axios";
import Link from "next/link";

const getData = async (pageNumber: number) => {
  const result = await axios.get(`https://api.themoviedb.org/3/discover/movie?page=${pageNumber}`, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGFiNzBhNTZkYWQ0OTIwOWEwN2EyMTk1YjQwMGIwZiIsInN1YiI6IjY1Njk4MjAxZDM5OWU2MDBjNDBmYjRhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qkFPicxaue4i1QpZiZWCrV4uEaJCsWQlnmCgzjmP8Vw",
    },
  });
  return result.data as Response;
};

async function Movies() {
  const datas = await getData(1);
  //   const [page, setPage] = useState(1);

  //   useEffect(() => {
  //     getData(page);
  //   }, [page]);

  //   const handlePrevPage = () => {
  //     if (page > 1) {
  //       setPage(page - 1);
  //     }
  //   };

  //   const handleNextPage = () => {
  //     setPage(page + 1);
  //   };

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
      <div className="mt-4 flex justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Prev</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
      </div>
    </div>
  );
}

export default Movies;
