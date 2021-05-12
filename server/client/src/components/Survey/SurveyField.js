// Render single label and input component

import React from "react";
import { TextField, Container } from "@material-ui/core";

function SurveyField({ input, label, meta: { error, touched } }) {
  return (
    <div>
      <Container maxsize="md">
        <TextField
          {...input}
          label={label}
          variant="outlined"
          fullWidth
          style={{ marginTop: "2rem" }}
        />
        <div style={{ marginTop: "1.5rem", color: "red" }}>
          {touched && error}
        </div>
      </Container>
    </div>
  );
}

export default SurveyField;
