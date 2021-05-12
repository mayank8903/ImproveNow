import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../actions";

class Billing extends Component {
  render() {
    return (
      <div>
        <StripeCheckout
          name="ImproveNow"
          amount={1000}
          description="$10 for 10 posts"
          token={(token) => this.props.handleToken(token)}
          stripeKey={process.env.REACT_APP_PUBLISHABLE_KEY}
        >
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{
              backgroundColor: "aliceblue",
              color: "black",
            }}
          >
            Purchase Plan
          </Button>
        </StripeCheckout>
      </div>
    );
  }
}

export default connect(null, actions)(Billing);
