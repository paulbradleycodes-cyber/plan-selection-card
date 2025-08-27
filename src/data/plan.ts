export type Plan = {
  name: string;
  price: string;
  period: string;
  features: string[];
  description: string;
  additionalInfo: string;
};

const plan: Plan = {
  name: "Pro Plan",
  price: "$29",
  period: "/month",
  features: [
    "Unlimited projects",
    "Advanced analytics",
    "Priority support",
    "Custom integrations",
    "Team collaboration",
    "API access",
    "Advanced security",
    "24/7 monitoring"
  ],
  description: "Perfect for teams looking to scale their operations and gain deeper insights into their data.",
  additionalInfo: "Cancel anytime • No setup fees"
};

export default plan;
