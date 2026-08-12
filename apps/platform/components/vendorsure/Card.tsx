import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  action?: ReactNode;
};

export default function Card({
  title,
  children,
  action,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          {title}
        </h2>

        {action}
      </div>

      {children}
    </div>
  );
}