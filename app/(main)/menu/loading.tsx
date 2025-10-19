export default function MenuLoading() {
  return (
    <main className="flex flex-col h-dvh pb-24">
      <div className="flex-1 overflow-y-auto scrollbar-none">
        {/* Header Skeleton */}
        <header className="text-center py-6">
          <div className="h-9 bg-gray-200 rounded-lg w-64 mx-auto animate-pulse"></div>
        </header>

        <div className="px-4 space-y-10">
          {/* Menu Andalan Skeleton */}
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-40 mx-auto mb-4"></div>
            <div className="border-2 border-gray-200 rounded-xl overflow-hidden">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
              </div>
            </div>
          </div>

          {/* Menu Favorite Skeleton */}
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-40 mx-auto mb-4"></div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="border-2 border-gray-200 rounded-xl p-2">
                    <div className="h-24 bg-gray-200 rounded-md mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Lainnya Skeleton */}
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-40 mx-auto mb-4"></div>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-6 bg-gray-200 rounded w-2/3 mx-auto"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Bottom Skeleton */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 py-3 px-4">
        <div className="flex justify-around">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center animate-pulse">
              <div className="w-12 h-12 bg-gray-200 rounded-full mb-1"></div>
              <div className="h-3 bg-gray-200 rounded w-16"></div>
            </div>
          ))}
        </div>
      </nav>
    </main>
  );
}