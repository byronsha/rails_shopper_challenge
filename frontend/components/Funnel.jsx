import React from 'react'
import axios from 'axios'
import Bar from './Bar'

export default class Funnel extends React.Component {
  constructor() {
    super()

    this.state = {
      funnelData: null,
      loading: true,
      startDate: '2014-01-01',
      endDate: '2014-12-31'
    }

    this.fetchStats = this.fetchStats.bind(this)
    this.handleStartDateChange = this.handleStartDateChange.bind(this)
    this.handleEndDateChange = this.handleEndDateChange.bind(this)
  }

  componentDidMount() {
    this.fetchStats()
  }

  fetchStats() {
    let { startDate, endDate } = this.state

    this.setState({ loading: true })

    axios.get(`http://localhost:3000/funnels?start_date=${startDate}&end_date=${endDate}`)
      .then((response) => {
        this.setState({
          funnelData: response.data,
          loading: false
        })
      })
      .catch((error) => {
        this.setState({ loading: false })
        console.log(error)
      })
  }

  handleStartDateChange(e) {
    this.setState({ startDate: e.target.value })
  }

  handleEndDateChange(e) {
    this.setState({ endDate: e.target.value })
  }

  render() {
    let { funnelData, loading } = this.state

    return (
      <div className="container" id="funnel">
        <h2>Recruitment Funnel</h2>
        <div className="row">
          <div className="col-md-2">
            <h4>Start date</h4>
            <input
              type="date"
              className="form-control"
              value={this.state.startDate}
              onChange={this.handleStartDateChange}
            />
          </div>
          <div className="col-md-2">
            <h4>End date</h4>
            <input
              type="date"
              className="form-control"
              value={this.state.endDate}
              onChange={this.handleEndDateChange}
            />
          </div>
          <div className="col-md-2">
            <button
              id="fetch-stats-btn"
              className="btn btn-primary"
              onClick={this.fetchStats}
            >
              Go
            </button>
          </div>
        </div>

        <hr />

        {loading &&
          <div className="loader"></div>
        }

        {funnelData && !loading &&
          <div>
            {Object.keys(funnelData).map(key => {
              return (
                <div key={key}>
                  <h4>{key}</h4>
                  <ul>
                    <Bar name={'Applied'} count={funnelData[key].applied} />
                    <Bar name={'Quiz Started'} count={funnelData[key].quiz_started} />
                    <Bar name={'Quiz Completed'} count={funnelData[key].quiz_completed} />
                    <Bar name={'Onboarding Requested'} count={funnelData[key].onboarding_requested} />
                    <Bar name={'Onboarding Completed'} count={funnelData[key].onboarding_completed} />
                    <Bar name={'Hired'} count={funnelData[key].hired} />
                  </ul>
                </div>
              )
            })}
          </div>
        }
      </div>
    )
  }
}