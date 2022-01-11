const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const fs = require("fs");

export default async function handler(req, res) {
	function getJsonData() {
		let rawdata = fs.readFileSync("../../testprod.json");
		return JSON.parse(rawdata);
	}
	let data = getJsonData
  if (req.method === 'POST') {
	  console.log(req.body, "req123");
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: data,
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}