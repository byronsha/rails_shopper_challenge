import React from 'react'

export default function Bar({ name, count }) {
  let COLORS = {
    'Applied': 'green',
    'Quiz Started': 'teal',
    'Quiz Completed': 'orange',
    'Onboarding Requested': 'red',
    'Onboarding Completed': 'purple',
    'Hired': 'blue'
  }

  return (
    <li>
      {name}: <b>{count}</b>
      <div className="bar" style={{width: count/10, background: COLORS[name]}}></div>
    </li>
  )
}