# Stripe Accept a payment boilerplate for Vercel 

Demo available [here](https://stripe-vercel-accept-a-payment.vercel.app/)

This is a simple boilerplate for the [Stripe Accept A Payment](https://github.com/stripe-samples/accept-a-payment) Sample. 

To use this sample on Vercel from GitHub: 
* Clone the project into your GitHub profile
* Go on your Vercel console and click "Add New... Project"
* Select your git repository from the list and click "Import"
* Expand the "Build and Output" settingand overrid the Output directory with `client`
* Click on Environment Variable button and add the following environmental variable
  * STRIPE_PUBLISHABLE_KEY: your Stripe publishable key
  * STRIPE_SECRET_KEY: your stripe secret key
* Click Deploy button