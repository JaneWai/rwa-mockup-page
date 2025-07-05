import React from 'react'
import StatsCards from './StatsCards'
import ChartSection from './ChartSection'

const MainContent = () => {
  return (
    <main className="flex-1 p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Global Market Overview</h1>
        <p className="text-gray-600">
          Welcome to RWA.xyz. Explore tokenized real-world assets and the investors, issuers, and service providers participating on public blockchains. 💰
        </p>
      </div>
      
      <StatsCards />
      <ChartSection />
    </main>
  )
}

export default MainContent
