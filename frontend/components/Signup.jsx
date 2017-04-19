import React from 'react'
import Perks from './Perks'

export default class Signup extends React.Component {
  render() {
    return (
      <div className="container" id="signup-form">
        <div className="row">
          <div className="col-md-6">
            <Perks />
          </div>

          <div className="col-md-6">
            <form className="form-horizontal">
              <fieldset>
                <h3>Apply now</h3>

                <div className="form-group">
                  <div className="col-md-12">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                      <input name="first_name" placeholder="First Name" className="form-control" type="text" />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-md-12">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                      <input name="last_name" placeholder="Last Name" className="form-control" type="text" />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-md-12">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                      <input name="email" placeholder="E-Mail Address" className="form-control" type="text" />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-md-12">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-globe"></i></span>
                      <input name="region" placeholder="California, Texas, Florida, etc." className="form-control" type="text" />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-md-12">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                      <input name="phone" placeholder="(845) 555-1212" className="form-control" type="text" />
                    </div>
                    </div>
                </div>

                <div className="form-group">
                  <div className="col-md-12">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-earphone"></i></span>
                      <input name="phone-type" placeholder="Work, mobile, etc." className="form-control" type="text" />
                    </div>
                    </div>
                </div>

                <div className="form-group">
                  <div className="col-md-12">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                      <input name="source" placeholder="How did you hear about us?" className="form-control" type="text" />
                    </div>
                    </div>
                </div>
              
                <div className="form-group">
                  <div className="col-md-12">
                    <label className="control-label">Are you over 21?</label>
                    <div className="radio">
                      <label>
                        <input type="radio" name="over-21" value="yes" /> Yes
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name="over-21" value="no" /> No
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="form-group">
                  <div className="col-md-12">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-pencil"></i></span>
                      <textarea className="form-control" name="reason" placeholder="Tell us why you want to shop for Instacart!"></textarea>
                    </div>
                  </div>
                </div>
                
                <div className="form-group">
                  <div className="col-md-12">
                    <button type="submit" className="btn btn-success btn-block">Submit Application</button>
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