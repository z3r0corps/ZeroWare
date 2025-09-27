export default function MyKeys() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          My <span className="text-green-500">Keys</span>
        </h1>
        
        <p className="text-xl text-white">
          Manage your purchased product keys
        </p>
      </div>

      {/* Keys List */}
      <div className="space-y-4">
        {/* Key Item 1 */}
        <div className="bg-dark-900 border border-dark-700 rounded-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">CS2 Premium</h3>
              <p className="text-gray-400 mb-2">Purchased on Dec 15, 2024</p>
              <p className="text-sm text-gray-500">Key: ZW-CS2-XXXX-XXXX-XXXX</p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors">
                Copy Key
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Key Item 2 */}
        <div className="bg-dark-900 border border-dark-700 rounded-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Valorant Elite</h3>
              <p className="text-gray-400 mb-2">Purchased on Nov 28, 2024</p>
              <p className="text-sm text-gray-500">Key: ZW-VAL-XXXX-XXXX-XXXX</p>
            </div>
            <div className="flex space-x-2">
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors">
                Copy Key
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors">
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        <div className="bg-dark-900 border border-dark-700 rounded-lg p-12 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">No Keys Yet</h3>
          <p className="text-gray-400 mb-4">Purchase your first cheat to see your keys here</p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition-colors">
            Browse Store
          </button>
        </div>
      </div>
    </div>
  )
}
