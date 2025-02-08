import Navbar from "@/components/shared/navbar";
import ShowCard from "@/components/shared/show-card";
import TvShowCard from "@/components/shared/tv-show-card";
import { Badge } from "@/components/ui/badge";
import { RequestOption } from "@/types/request-option";
import { SearchMulti } from "@/types/search-multi";
import MediaPagination from "@/components/shared/media-pagination";
const getSearchShows = async (query: string, page: number) => {
  try {
    const url = `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(
      query
    )}&include_adult=false&language=en-US&page=${page || 1}`;
    const options: RequestOption = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
      },
      cache: "no-store",
    };

    const res = await fetch(url, options as RequestInit);
    if (!res.ok) throw new Error("Failed to fetch search results");
    const data = await res.json();
    const filteredResults = data.results.filter(
      (result: any) =>
        result.media_type === "movie" || result.media_type === "tv"
    );
    return { ...data, results: filteredResults };
  } catch (error) {
    console.error("Error fetching search results:", error);
    return null;
  }
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { query: string; page: number };
}) {
  const { query, page } = searchParams;
  const pageNumber = page ? parseInt(page) : 1;
  console.log("query", query);
  const searchShows: SearchMulti | null = await getSearchShows(
    query,
    pageNumber
  );

  console.log("searchShows", searchShows);

  console.log("searchShows", searchShows);

  if (
    !searchShows ||
    !searchShows.results ||
    searchShows.results.length === 0
  ) {
    return (
      <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Navbar />
        <div className="grid place-items-center h-[calc(100vh-100px)]">
          <div className="text-center">
            <h1 className="text-2xl font-bold">No results found</h1>
            <p className="text-gray-400 mt-2">
              Try searching for another movie or show.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pb-12">
      <Navbar />

      <div className="container px-6 py-12 mx-auto max-w-6xl">
        <h1 className="text-3xl mb-4">
          Search Results for <span className="font-bold">"{query}"</span>
        </h1>
        <MediaPagination
          currentPage={searchShows.page}
          totalPages={searchShows.total_pages}
          query={query}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchShows.results.map((show) => (
            <div key={show.id}>
              <Badge>{show.media_type.toUpperCase()}</Badge>
              {show.media_type === "movie" ? (
                <ShowCard key={show.id} movie={show} />
              ) : (
                <TvShowCard key={show.id} tvShow={show} />
              )}
            </div>
          ))}
        </div>
      </div>

      <MediaPagination
        currentPage={searchShows.page}
        totalPages={searchShows.total_pages}
        query={query}
      />
    </main>
  );
}
