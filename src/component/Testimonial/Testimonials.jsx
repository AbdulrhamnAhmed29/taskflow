
function Testimonials() {
    const testimonials = [
        {
            image: "/image/option(1).png",
            name: "Ahmed Ali",
            role: "Software Engineer",
            feedback:
                "This app has completely changed how I organize my tasks. Super easy to use and very efficient!",
        },
        {
            image: "/image/option(2).png",
            name: "Sara Mohamed",
            role: "Project Manager",
            feedback:
                "I love the reminder feature! It keeps me on track and helps me meet all my deadlines.",
        },
        {
            image: "/image/option(3).png",
            name: "Omar Hassan",
            role: "Designer",
            feedback:
                "Clean design and powerful features. Highly recommend it for anyone who wants better productivity.",
        },
    ];

    return (
        <section className="py-16 bg-gray-50 text-center pt-24 " id="Clinets">
            <h2 className="text-5xl font-bold mb-10 title " >
                What Our <span>Clients Say</span>
            </h2>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
                    >
                        <div className="flex flex-row justify-center items-center w-full mb-3">
                            <img src={item.image} alt="" className="rounded-full w-20" />
                        </div>
                        <h3 className="title text-2xl font-semibold">{item.name}</h3>
                        <p className="text-gray-700 italic mb-6">"{item.feedback}"</p>
                        <p className="text-sm text-gray-500">{item.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonials;
