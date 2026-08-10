import { Vendor } from "@/lib/types/vendor";
import { FileText, Upload } from "lucide-react";

type Props = {
  vendor: Vendor;
};

export default function DocumentsCard({
  vendor,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Documents
        </h2>

        <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
          <Upload size={16} />
          Upload
        </button>
      </div>

      <div className="mt-6">
        {vendor.documents?.length ? (
          <ul className="space-y-3">
            {vendor.documents.map((document) => (
              <li
                key={document}
                className="flex items-center justify-between rounded-lg border p-4 hover:bg-gray-50"
              >
                <span className="flex items-center gap-2">
                  <FileText size={18} />
                  {document}
                </span>

                <button className="text-sm font-medium text-blue-600 hover:underline">
                  View
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            No documents available.
          </p>
        )}
      </div>
    </div>
  );
}