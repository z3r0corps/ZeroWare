export default function Downloads() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-green-500">Downloads</span>
        </h1>
        
        <p className="text-xl text-white">
          Download your purchased cheats and software
        </p>
      </div>

      {/* Downloads List */}
      <div className="space-y-4">
        {/* Download Item 1 */}
        <div className="bg-dark-900 border border-dark-700 rounded-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">CS2 Premium v2.1.3</h3>
              <p className="text-gray-400 mb-2">Last updated: Dec 10, 2024</p>
              <p className="text-sm text-gray-500">Size: 15.2 MB</p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors">
                Download
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                Changelog
              </button>
            </div>
          </div>
        </div>

        {/* Download Item 2 */}
        <div className="bg-dark-900 border border-dark-700 rounded-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Valorant Elite v1.8.2</h3>
              <p className="text-gray-400 mb-2">Last updated: Dec 8, 2024</p>
              <p className="text-sm text-gray-500">Size: 22.1 MB</p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors">
                Download
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                Changelog
              </button>
            </div>
          </div>
        </div>

        {/* System Requirements */}
        <div className="bg-dark-900 border border-dark-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">System Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="text-green-500 font-semibold mb-2">Minimum Requirements</h4>
              <ul className="text-gray-400 space-y-1">
                <li>• Windows 10 64-bit</li>
                <li>• 4GB RAM</li>
                <li>• DirectX 11</li>
                <li>• 100MB free space</li>
              </ul>
            </div>
            <div>
              <h4 className="text-green-500 font-semibold mb-2">Recommended</h4>
              <ul className="text-gray-400 space-y-1">
                <li>• Windows 11 64-bit</li>
                <li>• 8GB RAM</li>
                <li>• DirectX 12</li>
                <li>• 500MB free space</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
