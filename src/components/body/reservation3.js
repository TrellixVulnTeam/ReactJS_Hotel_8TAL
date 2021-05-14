import React, { Component } from 'react';

class Reservation3 extends Component {
    render() {
        return (
            <div>
                <div className="col-lg-12 col-md-4 col-sm-12 col-xs-12">
        <div className="sidebar check-out-2">
          <div className="col-lg-8 widget widget_check_availability widget-1">
            <h4 className="widget-title">Check Out</h4>
            <form className="check_availability">
              <h6 className="check_availability_title">your stay dates</h6>
              <div className="check_availability-field">
                <label>Name on Card</label>
                <input className="form-control wrap-box" type="text" placeholder="EX: NGUYEN DINH KHA" />
                <br />
                <label>Credit card number</label>
                <input className="form-control wrap-box" type="text" placeholder="EX: 4304  2052 10741" />
                <br />
                <label>CVV (Card Verification Value)</label>
                <input className="form-control wrap-box" type="text" placeholder="EX: 04/25" />
              </div>
              <div className="btn-reservation">
                <a className="btn-back btn" href="reservation2.php">PREVIOUS</a>
                <a className="btn-room btn" href="reservation4.php">CONTINUE</a>
              </div>
            </form>
          </div>
        </div></div>
            </div>
        );
    }
}

export default Reservation3;