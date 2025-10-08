// app/menu/loading.tsx
export default function MenuLoading() {
  return (
    <div className="flex items-center justify-center bg-black/30 backdrop-blur-sm h-dvh">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-amber-600" />
    </div>
  );
}
