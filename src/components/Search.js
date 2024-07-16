import Link from "next/link";

export default function MapLink(props) {
  const destination = encodeURIComponent(props.destination);

  return (
    <Link
      href={`https://www.google.com/maps/dir/?api=1&origin=-7.6245336,110.8876815&destination=${destination}`}
      passHref
    >
      <button className="mt-4 w-16 h-8 bg-cyan-700 text-white rounded-md">
        OK
      </button>
    </Link>
  );
}
