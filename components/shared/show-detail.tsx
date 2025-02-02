type ShowDetailProps = {
  label: string;
  value: string | number;
};

export default function ShowDetail({ label, value }: ShowDetailProps) {
  return (
    <p>
      <span className="font-semibold text-gray-400">{label}:</span> {value}
    </p>
  );
}
