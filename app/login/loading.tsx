import { Loader2 } from "lucide-react";

// app/menu/loading.tsx
export default function LoginLoading() {
  return (
    <div className="flex items-center justify-center bg-black/30 backdrop-blur-sm h-dvh">
      <Loader2 className="animate-spin border-t-amber-600" />
    </div>
  );
}
