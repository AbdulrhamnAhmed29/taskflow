import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className=" footer text-white py-8">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Site Info */}
                <div>
                    <h2 className="text-3xl  text-white font-extrabold  italic">Task <span>Flow</span></h2>
                    <p className="mt-2 text-sm text-blue-100 ">
                        The best platform to manage your tasks and boost your productivity.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 ">Quick Links</h3>
                    <ul className=" mt-1 flex flex-col justify-between gap-2 italic text-2xs ">
                        <li><a href="#home" className="">Home</a></li>
                        <li><a href="#features" className="">Features</a></li>
                        <li><a href="#Clinets" className="">Clinets</a></li>
                        <li><a href="#pricing" className="">Pricing</a></li>

                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 ">Contact Us</h3>
                    <ul className="space-y-2 ">
                        <li className="flex items-center gap-2">
                            <FaEnvelope /> abdulrhmanaahmed4@gmail.com
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhone /> 01128787885
                        </li>
                    </ul>

                    {/* Social Media */}
                    <div className="flex gap-4 mt-4 text-xl">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                            <FaFacebook />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                            <FaTwitter />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                            <FaLinkedin />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-8 text-center text-sm border-t border-gray-300 pt-4">
                © {new Date().getFullYear()} TaskFlow. All rights reserved.
            </div>
        </footer>
    );
}
