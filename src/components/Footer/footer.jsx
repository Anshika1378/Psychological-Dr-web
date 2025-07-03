import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="bg-gray-100 h-full">
                <div className="footer">
                    <h1 className="text-center text-4xl text-gray-700 font-serif mb-12">Jennifer Hahm, Ph.D., Licensed Psychologist</h1>
                <div className="text-black leading-relaxed  text-center">
                    <a
                        href="mailto:jennifer@drjenniferhahm.com"
                        className="text-black underline "
                    >
                        jennifer@drjenniferhahm.com
                    </a> <br /> <br />
                    <span className="text-gray-600">
                        Phone: (248) 939-8150 Fax: (248) 939-8190 <br /> <br />

                        28175 Haggerty Rd, Novi, MI 48377 <br /> <br />
                    </span>
                    <div className="text-center my-6 space-x-4">
                        <Link
                            to="/home"
                            className="text-black underline transition"
                        >
                            Home
                        </Link>
                        <Link
                            to="/privacy-policy"
                            className="text-black underline hover:text-blue-800 transition"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to="/good-faith-estimate"
                            className="text-black underline hover:text-blue-800 transition"
                        >
                            Good Faith Estimate
                        </Link>
                    </div>

                    Client Portal <br /> <br />

                    © 2025 Jennifer Hahm Ph.D. Psychological Services, PLLC. All rights reserved.

                </div>

                </div>
            </div>
        </>
    )
}
export default Footer;