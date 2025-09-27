'use client'

import { useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { Download, Headphones, ShoppingBag } from 'lucide-react'

export default function Dashboard() {
  const { user } = useUser()

  return (
    <div className="max-w-6xl mx-auto">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Welcome back,{' '}
          <span className="text-green-500">{user?.firstName || 'Gamer'}</span>!
        </h1>
      </div>


      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/dashboard/store" className="bg-black border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors cursor-pointer group">
            <div className="text-center">
              <ShoppingBag className="w-12 h-12 text-green-500 mx-auto mb-4 group-hover:text-green-400" />
              <h3 className="text-xl font-semibold text-white mb-2">Store</h3>
              <p className="text-gray-400">Browse and purchase new cheats</p>
            </div>
          </Link>
          
          <Link href="/dashboard/downloads" className="bg-black border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors cursor-pointer group">
            <div className="text-center">
              <Download className="w-12 h-12 text-green-500 mx-auto mb-4 group-hover:text-green-400" />
              <h3 className="text-xl font-semibold text-white mb-2">Downloads</h3>
              <p className="text-gray-400">Download your purchased cheats</p>
            </div>
          </Link>
          
          <Link href="/dashboard/support" className="bg-black border border-gray-800 rounded-lg p-6 hover:border-green-500 transition-colors cursor-pointer group">
            <div className="text-center">
              <Headphones className="w-12 h-12 text-green-500 mx-auto mb-4 group-hover:text-green-400" />
              <h3 className="text-xl font-semibold text-white mb-2">Support</h3>
              <p className="text-gray-400">Get help and support</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
        <div className="bg-black border border-gray-800 rounded-lg p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-gray-800">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-white">CS2 Cheat activated</span>
              </div>
              <span className="text-gray-400 text-sm">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-gray-800">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-white">Valorant Cheat purchased</span>
              </div>
              <span className="text-gray-400 text-sm">1 day ago</span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-white">Account created</span>
              </div>
              <span className="text-gray-400 text-sm">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
