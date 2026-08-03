import { Vendor } from "@/lib/types/vendor";
import { User, Mail, Phone } from "lucide-react";

type Props = {
  vendor: Vendor;
};

export default function PrimaryContactCard({
  vendor,
}: Props) {
  if (!vendor.primaryContact) {
    return (
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">
          Primary Contact
        </h2>

        <p className="mt-4 text-gray-500">
          No primary contact available.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold">
        Primary Contact
      </h2>

      <div className="mt-6 space-y-6">
        <div className="flex items-start gap-3">
          <User size={20} className="mt-1 text-blue-600" />

          <div>
            <p className="font-semibold">
              {vendor.primaryContact.name}
            </p>

            <p className="text-gray-500">
              {vendor.primaryContact.title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Mail size={18} className="text-gray-500" />

          <div>
            <p className="text-sm text-gray-500">
              Email
            </p>

            <p>{vendor.primaryContact.email}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Phone size={18} className="text-gray-500" />

          <div>
            <p className="text-sm text-gray-500">
              Phone
            </p>

            <p>{vendor.primaryContact.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
}