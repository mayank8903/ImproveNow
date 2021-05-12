import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import validateEmails from "./validateEmails";

import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return formFields.map((field) => {
      return (
        <Field
          key={field.name}
          component={SurveyField}
          type="text"
          label={field.label}
          name={field.name}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}

          <Link to="/surveys">
            <Button
              type="Submit"
              variant="outlined"
              color="secondary"
              style={{ marginTop: "2rem", float: "left" }}
            >
              Cancel
            </Button>
          </Link>
          <Button
            type="Submit"
            variant="outlined"
            color="secondary"
            style={{ marginTop: "2rem", float: "right" }}
          >
            Next
          </Button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.emails = validateEmails(values.emails || " ");

  if (!values.title) {
    errors.title = "Please provide a title";
  }

  if (!values.subject) {
    errors.subject = "Please provide a subject line";
  }

  if (!values.body) {
    errors.body = "Please provide an email body";
  }

  if (!values.emails) {
    errors.emails = "Please provide emails of recipients";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
