type BgImageOverlayProps = {
  srcUrl: string;
  alt: string;
};

export default function BgImageOverlay(props: BgImageOverlayProps) {
  const { srcUrl, alt } = props;
  return (
    <div className="fixed inset-0 z-0 opacity-40">
      <img
        src={srcUrl}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
    </div>
  );
}
