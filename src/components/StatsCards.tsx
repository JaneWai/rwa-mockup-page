import React from 'react'
import { TrendingUp } from 'lucide-react'

const StatsCards = () => {
  const stats = [
    {
      title: 'Total RWA Onchain',
      value: '$24.79B',
      change: '+6.11%',
      period: 'from 30d ago',
      positive: true
    },
    {
      title: 'Total Asset Holders',
      value: '272,091',
      change: '+138.01%',
      period: 'from 30d ago',
      positive: true
    },
    {
      title: 'Total Asset Issuers',
      value: '249',
      change: '',
      period: '',
      positive: null
    },
    {
      title: 'Total Stablecoin Value',
      value: '$241.37B',
      change: '+1.97%',
      period: 'from 30d ago',
      positive: true
    },
    {
      title: 'Total Stablecoin Holders',
      value: '169.83M',
      change: '+2.44%',
      period: 'from 30d ago',
      positive: true
    }
  ]

  return (
    <div className="grid grid-cols-5 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-sm font-medium text-gray-600 mb-2">{stat.title}</h3>
          <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
          {stat.change && (
            <div className="flex items-center space-x-1">
              <TrendingUp className={`w-3 h-3 ${stat.positive ? 'text-green-500' : 'text-red-500'}`} />
              <span className={`text-sm ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500">{stat.period}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default StatsCards
