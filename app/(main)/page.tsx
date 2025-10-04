export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-dvh bg-amber-400 m-2 rounded-2xl">
        {/* Isi Halaman Main */}
        <h1 className="text-3xl">Main Content</h1>
      </div>
      <h1 className="flex items-center justify-center text-3xl font-bold mt-4">
        ABOUT US
      </h1>
      {/* Isi Halaman About  */}
      <div className="flex items-center justify-center h-dvh bg-blue-900 m-2 rounded-2xl">
        <h1 className="text-3xl">About Content</h1>
      </div>
      {/* Isi Halaman Map  */}
      <div className="flex items-center justify-center h-dvh bg-green-900 m-2 rounded-2xl">
        <h1 className="text-3xl">Map Content</h1>
      </div>
    </>
  );
}
