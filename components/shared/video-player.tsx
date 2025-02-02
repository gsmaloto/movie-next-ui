export default function VideoPlayer({ srcUrl }: { srcUrl: string }) {
  return (
    <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl border border-gray-700">
      <iframe className="w-full h-full" src={srcUrl} allowFullScreen></iframe>
    </div>
  );
}
