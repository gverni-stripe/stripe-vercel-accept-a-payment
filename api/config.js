export default async function handler(request, response) {
  return response.json({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  })
}