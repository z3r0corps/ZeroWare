export default function Support() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-green-500">Support</span>
        </h1>
        
        <p className="text-xl text-white">
          Get help and support for your ZeroWare experience
        </p>
      </div>

      {/* Support Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-black border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 cursor-pointer">
          <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
          <p className="text-gray-400 mb-4">Get instant help from our support team</p>
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-green-500/25">
            Start Chat
          </button>
        </div>
        
        <div className="bg-black border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 cursor-pointer">
          <h3 className="text-xl font-semibold text-white mb-2">Ticket System</h3>
          <p className="text-gray-400 mb-4">Submit a support ticket for complex issues</p>
          <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-green-500/25">
            Create Ticket
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-black border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
            <h3 className="text-white font-semibold mb-2">How do I download my purchased cheats?</h3>
            <p className="text-gray-400">Go to the Downloads page in your dashboard to access all your purchased software and keys.</p>
          </div>
          
          <div className="bg-black border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
            <h3 className="text-white font-semibold mb-2">Are your cheats undetectable?</h3>
            <p className="text-gray-400">We use advanced techniques to ensure our cheats remain undetected, but no cheat is 100% guaranteed.</p>
          </div>
          
          <div className="bg-black border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
            <h3 className="text-white font-semibold mb-2">What if I get banned?</h3>
            <p className="text-gray-400">While we strive for maximum safety, bans can happen. We recommend using cheats responsibly and following our guidelines.</p>
          </div>
          
          <div className="bg-black border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
            <h3 className="text-white font-semibold mb-2">Do you offer refunds?</h3>
            <p className="text-gray-400">Refunds are handled on a case-by-case basis. Contact support for assistance with refund requests.</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-black border border-green-500/20 rounded-lg p-6 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
        <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-green-500 font-semibold mb-2">Discord</h3>
            <p className="text-gray-400">Join our Discord server for community support</p>
            <button className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-green-500/25 mt-2">
              Join Discord
            </button>
          </div>
          <div>
            <h3 className="text-green-500 font-semibold mb-2">Email</h3>
            <p className="text-gray-400">support@zeroware.com</p>
            <p className="text-sm text-gray-500">Response time: 24-48 hours</p>
          </div>
        </div>
      </div>
    </div>
  )
}
