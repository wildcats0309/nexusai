import { Vendor } from "@/lib/types/vendor";
import { User, Mail, Phone } from "lucide-react";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

type Props = {
  vendor: Vendor;
};

export default function PrimaryContactCard({
  vendor,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Primary Contact</CardTitle>
      </CardHeader>

      <CardContent>
        {!vendor.primaryContact ? (
          <p className="text-muted-foreground">
            No primary contact available.
          </p>
        ) : (
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <User size={20} className="mt-1 text-blue-600" />

              <div>
                <p className="font-semibold">
                  {vendor.primaryContact.name}
                </p>

                <p className="text-muted-foreground">
                  {vendor.primaryContact.title}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-muted-foreground" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Email
                </p>

                <p>{vendor.primaryContact.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-muted-foreground" />

              <div>
                <p className="text-sm text-muted-foreground">
                  Phone
                </p>

                <p>{vendor.primaryContact.phone}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}