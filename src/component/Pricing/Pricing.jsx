function Pricing() {
    const plans = [
        {
            name: "Free",
            price: "$0",
            features: ["Basic Task Management", "Single User", "Limited Support"],
            button: "Get Started",
            popular: false,
        },
        {
            name: "Pro",
            price: "$9/mo",
            features: ["Advanced Task Management", "Collaboration Tools", "Priority Support"],
            button: "Upgrade",
            popular: true,
        },
        {
            name: "Teams",
            price: "$29/mo",
            features: ["All Pro Features", "Unlimited Users", "Dedicated Support"],
            button: "Contact Sales",
            popular: false,
        },
    ];

    return (
        <section className="py-16 bg-gray-50 text-center pt-24 title" id="pricing">
            <h2 className="text-5xl font-bold mb-10 title">Pricing <span>Plans</span></h2>
            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6 ">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`p-8 rounded-2xl shadow-md hover:shadow-xl transition bg-white ${plan.popular ? "pro" : ""
                            }`}
                    >
                        <h3 className="text-2xl font-semibold mb-4 title">{plan.name}</h3>
                        <p className="text-4xl font-bold mb-6">{plan.price}</p>
                        <ul className="space-y-3 mb-6 text-gray-600">
                            {plan.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                        <button
                            className={`px-6 py-3 rounded-lg font-medium transition ${plan.popular
                                    ? "popular"
                                    : "bg-gray-200 hover:bg-gray-300"
                                }`}
                        >
                            {plan.button}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Pricing;
