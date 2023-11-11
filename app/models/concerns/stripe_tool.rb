module StripeTool
  def self.create_customer(email: :email)
    Stripe::Customer.create(
      email: email
    )
  end

  def self.create_charge(customer_id: :customer_id, amount: :amount, description: :description)
    Stripe::Charge.create(
      customer: customer_id,
      amount: amount,
      description: description,
      currency: 'usd'
    )
  end

  def self.create_membership(email: :email, stripe_token: :stripe_token, plan: :plan)
    Stripe::Customer.create(
      email: email,
      source: stripe_token,
      plan: plan
    )
  end
end
