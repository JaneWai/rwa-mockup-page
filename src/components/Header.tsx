import React from 'react'
import { Search, Globe } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Globe className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">rwa</span>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">.xyz</span>
          </div>
          <div className="text-sm text-gray-600">
            Every tokenized real-world asset, in one place.
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
              CTRL + K
            </div>
          </div>
          
          <button className="text-gray-700 hover:text-gray-900 px-4 py-2">
            Sign in
          </button>
          
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900">
            Contact
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
