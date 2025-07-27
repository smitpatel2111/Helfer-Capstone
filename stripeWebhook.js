// Stripe webhook handler (Node.js)
app.post('/api/stripe-webhook', express.raw({type: 'application/json'}), (req, res) => {
  const event = stripe.webhooks.constructEvent(req.body, req.headers['stripe-signature'], STRIPE_WEBHOOK_SECRET);
  if(event.type === 'checkout.session.completed') {
    const bookingId = event.data.object.metadata.bookingId;
    // Update booking status to 'paid' and send confirmation email/SMS
  }
  res.sendStatus(200);
});