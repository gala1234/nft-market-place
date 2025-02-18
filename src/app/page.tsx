export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black dark:from-gray-100 dark:to-white">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-16">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            NFT Market
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-lg bg-gray-800 dark:bg-gray-200 text-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors">
              EN/ES
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-800 dark:bg-gray-200 text-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors">
              🌙/☀️
            </button>
          </div>
        </nav>

        <main className="flex flex-col items-center justify-center space-y-8">
          <div className="relative w-full max-w-2xl aspect-square">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-xl opacity-20 animate-pulse"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 border border-gray-700 dark:border-gray-300 rounded-lg backdrop-blur-sm bg-black/20 dark:bg-white/20">
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 animate-gradient">
                NFT MARKETPLACE
              </h1>
              <div className="text-xl md:text-2xl text-gray-400 dark:text-gray-600 text-center mb-8">
                UNDER CONSTRUCTION
              </div>
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                <div className="h-2 bg-blue-500/30 rounded animate-pulse"></div>
                <div className="h-2 bg-purple-500/30 rounded animate-pulse delay-75"></div>
                <div className="h-2 bg-blue-500/30 rounded animate-pulse delay-100"></div>
                <div className="h-2 bg-purple-500/30 rounded animate-pulse delay-150"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
