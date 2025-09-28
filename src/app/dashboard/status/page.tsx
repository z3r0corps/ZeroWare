export default function Status() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-green-500">Status</span>
        </h1>
        
        <p className="text-xl text-white">
          System status and service availability
        </p>
      </div>


      {/* Game Cheat Status */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Game Cheat Status</h2>
        <div className="bg-black border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
          <div className="space-y-4">
            {/* CS2 */}
            <div className="flex justify-between items-center py-3 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-white font-semibold">CS2</span>
              </div>
              <span className="text-green-500 font-semibold">Active</span>
            </div>

            {/* Valorant */}
            <div className="flex justify-between items-center py-3 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-white font-semibold">Valorant</span>
              </div>
              <span className="text-green-500 font-semibold">Active</span>
            </div>

            {/* Apex Legends */}
            <div className="flex justify-between items-center py-3 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-white font-semibold">Apex Legends</span>
              </div>
              <span className="text-green-500 font-semibold">Active</span>
            </div>

            {/* Fortnite */}
            <div className="flex justify-between items-center py-3 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-white font-semibold">Fortnite Advanced</span>
              </div>
              <span className="text-red-500 font-semibold">Inactive</span>
            </div>

            {/* Rainbow Six Siege */}
            <div className="flex justify-between items-center py-3 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-white font-semibold">Rainbow Six Siege</span>
              </div>
              <span className="text-green-500 font-semibold">Active</span>
            </div>

            {/* PUBG */}
            <div className="flex justify-between items-center py-3 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-white font-semibold">PUBG Mobile</span>
              </div>
              <span className="text-red-500 font-semibold">Inactive</span>
            </div>

            {/* Warzone */}
            <div className="flex justify-between items-center py-3 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-white font-semibold">Call of Duty: Warzone</span>
              </div>
              <span className="text-green-500 font-semibold">Active</span>
            </div>

            {/* Rust */}
            <div className="flex justify-between items-center py-3 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-white font-semibold">Rust Enhanced</span>
              </div>
              <span className="text-green-500 font-semibold">Active</span>
            </div>

            {/* Minecraft */}
            <div className="flex justify-between items-center py-3 border-b border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-white font-semibold">Minecraft Java</span>
              </div>
              <span className="text-red-500 font-semibold">Inactive</span>
            </div>

            {/* League of Legends */}
            <div className="flex justify-between items-center py-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-white font-semibold">League of Legends</span>
              </div>
              <span className="text-green-500 font-semibold">Active</span>
            </div>
          </div>
        </div>
      </div>


      {/* Recent Updates */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-white mb-4">Recent Updates</h2>
        <div className="bg-black border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
          <div className="space-y-4">
            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-white font-semibold">CS2 v2.1.3</h3>
              <p className="text-gray-400 text-sm">December 10, 2024</p>
              <p className="text-gray-300 mt-2">Fixed compatibility issues with latest game update and improved performance.</p>
            </div>
            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-white font-semibold">Valorant v1.8.2</h3>
              <p className="text-gray-400 text-sm">December 8, 2024</p>
              <p className="text-gray-300 mt-2">Enhanced detection avoidance and added new features.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold">System Maintenance</h3>
              <p className="text-gray-400 text-sm">December 5, 2024</p>
              <p className="text-gray-300 mt-2">Scheduled maintenance completed successfully. All services restored.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
