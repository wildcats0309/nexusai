import type { UploadedFile } from "@/lib/types/uploadedFile";

type Props = {
  itemId: string;
  uploadedFile?: UploadedFile;
  setUploadedFiles: React.Dispatch<
    React.SetStateAction<Record<string, UploadedFile>>
  >;
};

export default function UploadActions({
  itemId,
  uploadedFile,
  setUploadedFiles,
}: Props) {
  const handleUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setUploadedFiles((previous) => ({
      ...previous,
      [itemId]: {
  fileName: file.name,
  fileType: file.type,
  fileSize: file.size,
  uploadedAt: new Date().toLocaleDateString(),
  status: "Uploaded",
}
    }));
  };

  return (
    <div className="mt-6 flex justify-end">
      {uploadedFile ? (
        <div className="flex gap-3">
          <button
            type="button"
            className="rounded-lg border px-4 py-2 hover:bg-gray-50"
          >
            View
          </button>

          <label className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Replace

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={handleUpload}
            />
          </label>

          <button
            type="button"
            onClick={() =>
              setUploadedFiles((previous) => ({
                ...previous,
                [itemId]: {
                  ...previous[itemId],
                  status: "Approved",
                },
              }))
            }
            className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Review
          </button>
        </div>
      ) : (
        <label className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Upload Document

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            onChange={handleUpload}
          />
        </label>
      )}
    </div>
  );
}