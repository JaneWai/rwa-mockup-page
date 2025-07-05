import React from 'react'
import { BarChart3, FileText, TrendingUp, Coins, Building, CreditCard, PieChart, Users, Network, Layers, Building2, Search, BarChart, MessageSquare } from 'lucide-react'

const Sidebar = () => {
  const menuItems = [
    { icon: BarChart3, label: 'Market Overview', active: true },
    { icon: FileText, label: 'News' },
    { icon: TrendingUp, label: 'Invest', badge: 'NEW' },
  ]

  const assetClasses = [
    { icon: Coins, label: 'Stablecoins' },
    { icon: Building, label: 'U.S. Treasuries' },
    { icon: PieChart, label: 'Global Bonds' },
    { icon: CreditCard, label: 'Private Credit' },
    { icon: BarChart, label: 'Commodities' },
    { icon: Building2, label: 'Institutional Funds' },
    { icon: TrendingUp, label: 'Stocks' },
  ]

  const participants = [
    { icon: Network, label: 'Networks' },
    { icon: Layers, label: 'Platforms', badge: 'NEW' },
    { icon: Building2, label: 'Company Directory' },
  ]

  const tools = [
    { icon: Search, label: 'Research Blog' },
    { icon: MessageSquare, label: 'Media & Citations' },
  ]

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Latest</h3>
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm ${
                    item.active
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Asset Classes</h3>
          <ul className="space-y-1">
            {assetClasses.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Participants</h3>
          <ul className="space-y-1">
            {participants.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Tools</h3>
          <ul className="space-y-1">
            {tools.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
