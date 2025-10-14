import { Loader2 } from "lucide-react";

export default function AdminLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <Loader2 className="animate-spin text-amber-600 w-10 h-10" />
    </div>
  );
}
