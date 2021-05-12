const keys = require("../config/keys");
module.exports = (survey) => {
  return `
      <html>
        <body>
          <div style="text-align: center;">
            <h3>We would love to hear from us about our services</h3>
            <p>Please answer the following question:</p>
            <p>${survey.body}</p>
            <div>
              <a href="${keys.redirect}/api/surveys/thanks">Yes</a>
            </div>
            <div>
              <a href="${keys.redirect}/api/surveys/thanks">No</a>
            </div>
          </div>
        </body>
      </html>
    `;
};
