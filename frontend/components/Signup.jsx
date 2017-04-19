import React from 'react'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
import Perks from './Perks'

export default class Signup extends React.Component {
  constructor() {
    super()

    this.state = {
      isOver21: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOver21OptionChange = this.handleOver21OptionChange.bind(this)
  }

  handleSubmit(params) {
    axios.post('http://localhost:3000/applicants', { applicant: params })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleOver21OptionChange(e) {
    this.setState({ isOver21: e.target.value })
  }

  render() {
    let firstName, lastName, region, phone, email, phoneType, source, reason

    return (
      <div className="container" id="signup">
        <div className="row">
          <div className="col-md-6" id="perks-container">
            <Perks />
          </div>

          <div className="col-md-6">
            <form
              className="form-horizontal"
              onSubmit={(e) => {
                e.preventDefault()

                this.handleSubmit({
                  first_name: firstName.value,
                  last_name: lastName.value,
                  region: region.value,
                  phone: phone.value,
                  email: email.value,
                  phone_type: phoneType.value,
                  source: source.value,
                  over_21: this.state.isOver21,
                  reason: reason.value,
                  created_at: Date.now(),
                  updated_at: Date.now()
                })}
              }
            >
              <fieldset>
                <h3>Apply now</h3>

                <div className="form-group">
                  <div className="col-md-12">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                      <input
                        ref={ref => { firstName = ref }}
                        name="first_name"
                        placeholder="First Name"
                        className="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-md-12">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                      <input
                        ref={ref => { lastName = ref }}
                        name="last_name"
                        placeholder="Last Name"
                        className="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-md-12">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                      <input
                        ref={ref => { email = ref }}
                        name="email"
                        placeholder="E-Mail Address"
                        className="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-md-12">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-globe"></i></span>
                      <input
                        ref={ref => { region = ref }}
                        name="region"
                        placeholder="California, Texas, Florida, etc."
                        className="form-control"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-md-12">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                      <input
                        ref={ref => { phone = ref }}
                        name="phone"
                        placeholder="(845) 555-1212"
                        className="form-control"
                        type="text"
                      />
                    </div>
                    </div>
                </div>

                <div className="form-group">
                  <div className="col-md-12">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                      <input
                        ref={ref => { phoneType = ref }}
                        name="phone-type"
                        placeholder="Work, mobile, etc."
                        className="form-control"
                        type="text"
                      />
                    </div>
                    </div>
                </div>

                <div className="form-group">
                  <div className="col-md-12">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                      <input
                        ref={ref => { source = ref }}
                        name="source"
                        placeholder="How did you hear about us?"
                        className="form-control"
                        type="text"
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
                        ref={ref => { reason = ref }}
                        className="form-control"
                        name="reason"
                        placeholder="Tell us why you want to shop for Instacart!"
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
          </div>
        </div>
      </div>
    )
  }
}