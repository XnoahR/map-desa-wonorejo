import Link from "next/link";

export default function MapLink(props) {
  const destination = encodeURIComponent(props.destination);

  return (
    <Link
      href={`https://www.google.com/maps/dir/?api=1&destination=${destination}`}
      passHref
    >
      <button className="mt-4 w-16 h-8 bg-cyan-700 text-white rounded-md mx-auto border border-red-500">
        OK
      </button>
    </Link>
  );
}
