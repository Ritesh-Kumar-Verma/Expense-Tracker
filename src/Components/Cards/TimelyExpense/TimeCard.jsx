import React from 'react'
import './TimeCard.css'

const TimeCard = () => {
  return (
    <div className='Time-period'>
        <div className='grid-title'>Period</div>
        <div className="grid-title">Value</div>

        <div className="daily value">Daily</div>
        <div className="daily-value value">1000</div>
        <div className="monthly value">Monthly</div>
        <div className="monthly-value value">200000</div>
        <div className="yearly value">Yearly</div>
        <div className="yearly-value value">1000000</div>
    </div>
  )
}

export default TimeCard