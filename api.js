// Node.js (Express) backend route to create payment session
const stripe = require('stripe')(process.env.STRIPE_SECRET);

app.post('/api/book', async (req, res) => {
  const { userId, expertId, date, slot } = req.body;
  // 1. Save booking with status 'pending'
  // 2. Create Stripe Checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: { name: 'Therapy Session' },
        unit_amount: 2000, // $20.00
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: 'https://your-app.com/payment-success?booking={BOOKING_ID}',
    cancel_url: 'https://your-app.com/payment-cancel',
    metadata: { bookingId: booking._id.toString() }
  });
  res.json({ url: session.url });
});