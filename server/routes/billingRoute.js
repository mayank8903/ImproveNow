const keys = require("../config/keys");
const stripe = require("stripe")(keys.secretKey);
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/checkout", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 1500,
      currency: "usd",
      description: "$10 for 10 posts",
      source: req.body.id,
    });
    req.user.posts += 10;
    const user = await req.user.save();

    res.send(user);
  });
};
