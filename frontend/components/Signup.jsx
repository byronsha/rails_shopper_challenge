import React from 'react'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
import Perks from './Perks'

export default class Signup extends React.Component {
  constructor() {
    super()

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      phoneType: '',
      region: '',
      source: '',
      reason: '',
      isOver21: null,
      showConfirmation: false,
      previousId: null
    }
  }

  componentDidMount() {
    this.initPreviousData()
  }

  handleSubmit() {
    let params = this.getRequestParams()

    axios.post('http://localhost:3000/applicants', { applicant: params })
      .then(response => {
        localStorage.setItem('instacart_shopper_application', JSON.stringify(response.data))
        this.setState({ showConfirmation: true })
      })
      .catch(error => {
        console.log(error)
      })
  }

  getRequestParams() {
    return {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      region: this.state.region,
      phone: this.state.phone,
      email: this.state.email,
      phone_type: this.state.phoneType,
      source: this.state.source,
      over_21: this.state.isOver21 === 'yes' ? true : false,
      reason: this.state.reason,
      workflow_state: 'applied',
      updated_at: Date.now(),
      created_at: Date.now()
    }
  }

  initPreviousData() {
    let previousData = JSON.parse(localStorage.getItem('instacart_shopper_application')).applicant

    if (previousData) {
      this.setState({
        firstName: previousData.first_name,
        lastName: previousData.last_name,
        email: previousData.email,
        phone: previousData.phone,
        phoneType: previousData.phone_type,
        region: previousData.region,
        source: previousData.source,
        reason: previousData.reason,
        isOver21: previousData.over_21 ? 'yes' : 'no',
        showConfirmation: false,
        previousId: previousData.id
      })
    }
  }

  handleFirstNameChange = (e) => {
    this.setState({ firstName: e.target.value })
  }

  handleLastNameChange = (e) => {
    this.setState({ lastName: e.target.value })
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value })
  }

  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value })
  }

  handlePhoneTypeChange = (e) => {
    this.setState({ phoneType: e.target.value })
  }

  handleRegionChange = (e) => {
    this.setState({ region: e.target.value })
  }

  handleSourceChange = (e) => {
    this.setState({ source: e.target.value })
  }

  handleReasonChange = (e) => {
    this.setState({ reason: e.target.value })
  }

  handleOver21OptionChange = (e) => {
    this.setState({ isOver21: e.target.value })
  }

  handleBackClick = (e) => {
    this.setState({ showConfirmation: false })
  }

  render() {
    return (
      <div className="container" id="signup">
        <div className="row">
          <div className="col-md-6" id="perks-container">
            <Perks />
          </div>

          <div className="col-md-6">

            {this.state.showConfirmation &&
              <div className="confirmation">
                <p>You successfully submitted your application!</p>
                <p><a onClick={this.handleBackClick}>Back</a></p>
              </div>
            }
            
            {!this.state.showConfirmation &&
              <form
                className="form-horizontal"
                onSubmit={(e) => {
                  e.preventDefault()
                  this.handleSubmit()
              }}>
                <fieldset>
                  <h3>Apply now</h3>

                  <div className="form-group">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input
                          name="first_name"
                          placeholder="First Name"
                          className="form-control"
                          type="text"
                          value={this.state.firstName}
                          onChange={this.handleFirstNameChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                        <input
                          name="last_name"
                          placeholder="Last Name"
                          className="form-control"
                          type="text"
                          value={this.state.lastName}
                          onChange={this.handleLastNameChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                        <input
                          name="email"
                          placeholder="E-Mail Address"
                          className="form-control"
                          type="text"
                          value={this.state.email}
                          onChange={this.handleEmailChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-globe"></i></span>
                        <input
                          name="region"
                          placeholder="California, Texas, Florida, etc."
                          className="form-control"
                          type="text"
                          value={this.state.region}
                          onChange={this.handleRegionChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                        <input
                          name="phone"
                          placeholder="(845) 555-1212"
                          className="form-control"
                          type="text"
                          value={this.state.phone}
                          onChange={this.handlePhoneChange}
                        />
                      </div>
                      </div>
                  </div>

                  <div className="form-group">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                        <input
                          name="phone-type"
                          placeholder="Work, mobile, etc."
                          className="form-control"
                          type="text"
                          value={this.state.phoneType}
                          onChange={this.handlePhoneTypeChange}
                        />
                      </div>
                      </div>
                  </div>

                  <div className="form-group">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                        <input
                          name="source"
                          placeholder="How did you hear about us?"
                          className="form-control"
                          type="text"
                          value={this.state.source}
                          onChange={this.handleSourceChange}
                        />
                      </div>
                      </div>
                  </div>
                
                  <div className="form-group">
                    <div className="col-md-12">
                      <label className="control-label">Are you over 21?</label>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            name="over-21"
                            value="yes"
                            onChange={this.handleOver21OptionChange}
                            checked={this.state.isOver21 === 'yes'}
                          /> Yes
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input
                            type="radio"
                            name="over-21"
                            value="no"
                            onChange={this.handleOver21OptionChange}
                            checked={this.state.isOver21 === 'no'}
                          /> No
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <div className="col-md-12">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                        <textarea
                          className="form-control"
                          name="reason"
                          placeholder="Tell us why you want to shop for Instacart!"
                          value={this.state.reason}
                          onChange={this.handleReasonChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="btn btn-success btn-block"
                      >
                        Submit Application
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            }
          </div>
        </div>
      </div>
    )
  }
}