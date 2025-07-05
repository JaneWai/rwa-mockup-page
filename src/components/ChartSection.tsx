import React from 'react'
import { Download } from 'lucide-react'

const ChartSection = () => {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 bg-white p-6 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Total RWA Value</h3>
          <div className="flex items-center space-x-4">
            <button className="text-blue-600 text-sm hover:text-blue-700">
              Include Stablecoins
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700">
              <Download className="w-4 h-4" />
              <span className="text-sm">Download</span>
            </button>
          </div>
        </div>
        
        <div className="relative h-80">
          {/* Chart placeholder with watermark */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-gray-300 text-6xl font-bold opacity-20 transform -rotate-12">
              rwa.xyz
            </div>
          </div>
          
          {/* Simulated chart area */}
          <div className="relative h-full">
            <div className="absolute bottom-0 left-0 w-full h-4/5 bg-gradient-to-t from-blue-100 to-blue-50 rounded-t-lg opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-full h-3/5 bg-gradient-to-t from-red-100 to-red-50 rounded-t-lg opacity-40"></div>
            
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 -ml-12">
              <span>$30.0B</span>
              <span>$20.0B</span>
              <span>$10.0B</span>
              <span>$0.00K</span>
            </div>
            
            {/* X-axis labels */}
            <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-500 -mb-6">
              <span>1/1/19</span>
              <span>1/1/20</span>
              <span>1/1/21</span>
              <span>1/1/22</span>
              <span>1/1/23</span>
              <span>1/1/24</span>
              <span>1/1/25</span>
            </div>
          </div>
          
          {/* Legend */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-4 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span>Private Credit</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded"></div>
              <span>Institutional Alternative Funds</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded"></div>
              <span>Corporate Bonds</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span>US Treasury Debt</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded"></div>
              <span>Stocks</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded"></div>
              <span>Commodities</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-400 rounded"></div>
              <span>non-US Government Debt</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Total RWA Value</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Commodities</span>
            <span className="text-sm font-medium">$1.6B</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">US Trea...</span>
            <span className="text-sm font-medium">$7.4B</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Private C...</span>
            <span className="text-sm font-medium">$14.5B</span>
          </div>
        </div>
        
        {/* Pie chart placeholder */}
        <div className="mt-6 flex justify-center">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"></div>
            <div className="absolute inset-2 rounded-full bg-white"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gray-300 text-xs font-bold opacity-50">
                rwa
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <div className="text-xs text-gray-500">as of 07/04/2025</div>
        </div>
      </div>
    </div>
  )
}

export default ChartSection
