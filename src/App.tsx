import React from 'react'
import Header from './components/Header'
import MarketTicker from './components/MarketTicker'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MarketTicker />
      <div className="flex">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  )
}

export default App
