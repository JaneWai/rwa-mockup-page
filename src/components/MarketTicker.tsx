import React from 'react'
import { ChevronLeft } from 'lucide-react'

const MarketTicker = () => {
  const marketData = [
    { symbol: '2.8B', change: '-1.38%', color: 'text-red-500' },
    { symbol: 'BENJI', price: '$797.2M', change: '+7.37%', color: 'text-green-500' },
    { symbol: 'OUSG', price: '$710.5M', change: '+0.01%', color: 'text-green-500' },
    { symbol: 'USTB', price: '$694.2M', change: '-2.24%', color: 'text-red-500' },
    { symbol: 'USDY', price: '$684.8M', change: '+0.07%', color: 'text-green-500' },
    { symbol: 'JTRSY', price: '$409.0M', change: '', color: 'text-gray-600' },
    { symbol: 'USYC', price: '$345.4M', change: '+2.9%', color: 'text-green-500' },
  ]

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-2">
      <div className="flex items-center space-x-8 text-sm">
        <ChevronLeft className="w-4 h-4 text-gray-400" />
        {marketData.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span className="font-medium text-gray-900">{item.symbol}</span>
            {item.price && <span className="text-gray-600">{item.price}</span>}
            {item.change && <span className={item.color}>{item.change}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MarketTicker
