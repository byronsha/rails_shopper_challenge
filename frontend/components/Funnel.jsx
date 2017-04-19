import React from 'react'
import axios from 'axios'

export default class Funnel extends React.Component {
  constructor() {
    super()

    this.state = {
      quizStarted: null,
      applied: null,
      quizCompleted: null,
      onboardingRequested: null,
      onboardingCompleted: null,
      hired: null
    }
  }

  componentDidMount() {
    this.fetchStats(null, null)
  }

  fetchStats(startDate, endDate) {
    axios.get(`http://localhost:3000/funnels?start_date=${startDate}&${endDate}`)
      .then((response) => {
        let data = response.data
        console.log(data)

        this.setState({
          quizStarted: data.quiz_started,
          applied: data.applied,
          quizCompleted: data.quiz_completed,
          onboardingRequested: data.onboarding_requested,
          onboardingCompleted: data.onboarding_completed,
          hired: data.hired
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  render() {
    let { quizStarted, applied, quizCompleted,
          onboardingRequested, onboardingCompleted, hired } = this.state

    return (
      <div className="container">
        <div>Quiz Started: {quizStarted}</div>
        <div>Applied: {applied}</div>
        <div>Quiz Completed: {quizCompleted}</div>
        <div>Onboarding Requested: {onboardingRequested}</div>
        <div>Onboarding Completed: {onboardingCompleted}</div>
        <div>Hired: {hired}</div>
      </div>
    )
  }
}