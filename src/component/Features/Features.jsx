import { FaCheckCircle, FaTasks, FaBell } from "react-icons/fa";

function Features() {
    const features = [
        {
            icon: <FaCheckCircle className="text-blue-800 text-4xl mb-4 " />,
            title: "Easy Task Management",
            description: "Organize your tasks efficiently and boost productivity.",
        },
        {
            icon: <FaTasks className="text-green-500 text-4xl mb-4" />,
            title: "Track Progress",
            description: "Stay updated with real-time progress tracking.",
        },
        {
            icon: <FaBell className="text-yellow-500 text-4xl mb-4" />,
            title: "Smart Reminders",
            description: "Never miss a deadline with customizable reminders.",
        },
    ];

    return (
<section className="py-16 text-center max-w-6xl mx-auto" id="features">
  <h2 className="text-5xl font-bold mb-16 pt-10 title   faeture">
    Awesome <span>Features</span>
  </h2>
  <div className="grid gap-8 md:grid-cols-3 px-6 cursor-pointer mb-5">
    {features.map((feature, index) => (
      <div
        key={index}
        className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
      >
        <div className="flex justify-center">{feature.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
        <p className="text-gray-600">{feature.description}</p>
      </div>
    ))}
  </div>
</section>

    );
}

export default Features;
