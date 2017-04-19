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
      <div className="container" id="funnel">
        <div className="row">
          <div className="col-md-2">
            <h4>Start date</h4>
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-2">
            <h4>End date</h4>
            <input type="date" className="form-control" />
          </div>
        </div>

        <h3>Quiz Started: {quizStarted}</h3>
        <h3>Applied: {applied}</h3>
        <h3>Quiz Completed: {quizCompleted}</h3>
        <h3>Onboarding Requested: {onboardingRequested}</h3>
        <h3>Onboarding Completed: {onboardingCompleted}</h3>
        <h3>Hired: {hired}</h3>
      </div>
    )
  }
}