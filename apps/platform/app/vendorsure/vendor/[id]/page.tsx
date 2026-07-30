import Link from "next/link";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function VendorDetailsPage({ params }: Props) {
  const { id } = await params;

  return (
    <div className="p-8">
      <Link
        href="/vendorsure"
        className="text-blue-600 hover:underline"
      >
        ← Back to Vendor Dashboard
      </Link>

      <h1 className="mt-6 text-3xl font-bold">
        Vendor Details
      </h1>

      <p className="mt-4">Vendor ID: {id}</p>
    </div>
  );
}