import { Button, TextField } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import _ from "lodash";
import * as actions from "../../actions";

function SurveyReview({ onCancel, formValues, submitSurvey }) {
  const reviewFields = _.map(formFields, (field) => {
    return (
      <div key={field.name}>
        <TextField
          label={field.label}
          fullWidth
          style={{ marginTop: "2rem", borderBottom: "none" }}
          defaultValue={formValues[field.name]}
          InputProps={{
            readOnly: true,
          }}
        ></TextField>
      </div>
    );
  });
  return (
    <div>
      <h3>Review your input</h3>

      {reviewFields}

      <Button
        variant="outlined"
        color="secondary"
        onClick={onCancel}
        style={{ marginTop: "2rem", float: "left" }}
      >
        Go Back
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={onCancel}
        style={{
          marginTop: "2rem",
          backgroundColor: "black",
          color: "white",
          float: "right",
        }}
        onClick={() => submitSurvey(formValues)}
      >
        Submit
      </Button>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    formValues: state.form.surveyForm.values,
  };
}

export default connect(mapStateToProps, actions)(SurveyReview);
