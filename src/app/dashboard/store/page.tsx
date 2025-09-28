export default function Store() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-green-500">Store</span>
        </h1>
        
        <p className="text-xl text-white">
          Premium gaming cheats for popular games
        </p>
      </div>

      {/* Store Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Game Item 1 */}
        <div className="bg-black border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
          <div className="aspect-video bg-gray-800 rounded-md mb-4 flex items-center justify-center">
            <span className="text-gray-400">Game Image</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">CS2</h3>
          <p className="text-gray-400 mb-4">Advanced Counter-Strike 2 cheats with ESP, Aimbot, and more.</p>
          <div className="flex justify-between items-center">
            <span className="text-green-500 text-xl font-bold">$29.99</span>
            <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-green-500/25">
              Purchase
            </button>
          </div>
        </div>

        {/* Game Item 2 */}
        <div className="bg-black border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
          <div className="aspect-video bg-gray-800 rounded-md mb-4 flex items-center justify-center">
            <span className="text-gray-400">Game Image</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Valorant</h3>
          <p className="text-gray-400 mb-4">Professional Valorant cheats with advanced features.</p>
          <div className="flex justify-between items-center">
            <span className="text-green-500 text-xl font-bold">$39.99</span>
            <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-green-500/25">
              Purchase
            </button>
          </div>
        </div>

        {/* Game Item 3 */}
        <div className="bg-black border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
          <div className="aspect-video bg-gray-800 rounded-md mb-4 flex items-center justify-center">
            <span className="text-gray-400">Game Image</span>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Apex Legends</h3>
          <p className="text-gray-400 mb-4">High-quality Apex Legends cheats with premium features.</p>
          <div className="flex justify-between items-center">
            <span className="text-green-500 text-xl font-bold">$34.99</span>
            <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-green-500/25">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
