const stripe = require("stripe")('sk_test_51Jc3YTL7WEpn3e735wDqxroa8BhorCieLVEDRUBVpUBxMYjCuCU4IPWi4m1ugzKE0e0RbFLqJMJWkUeYoLogqScl00EZ21JmKc');

const calculateOrderAmount = (totalAmount) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return totalAmount;
};
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { items,totalAmount, delivery } = req.body;
    console.log(delivery)


    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount*100,
      currency: "sek",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    // Handle any other HTTP method
  }
}

