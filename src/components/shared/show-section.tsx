import MediaShowCard, { MediaShowCardProps } from "./show-card";

export default function MovieSection({
  title,
  shows,
}: {
  title: string;
  shows: MediaShowCardProps[];
}) {
  console.log("CHECK_SHOWS", shows);
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div
        className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div
          className="flex gap-4"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {shows.map((show) => (
            <div key={show.id} className="flex-none w-1/4 snap-center">
              <MediaShowCard media={show} />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
