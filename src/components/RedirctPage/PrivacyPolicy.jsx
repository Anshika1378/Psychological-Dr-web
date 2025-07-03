import { BsDot } from "react-icons/bs";
import Nav from "../Home/Nav";

function PrivacyPolicy() {
    return (
        <>
            <Nav />
            <div className="bg-gray-100 py-12 px-4 mb-5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-5">
                    {/* Column 1 */}
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-center text-4xl text-gray-700 font-serif mb-12">Privacy Policy</h1>
                        <h2 className="font-serif text-xl font-semibold text-gray-800 mb-2">
                            Contact us
                        </h2>
                        <p className="text-black leading-relaxed text-sm text-center">
                            If you have any questions or concerns about this privacy policy,
                            <br />
                            please contact me at <a href="mailto:jennifer@drjenniferhahm.com" className="underline text-black">jennifer@drjenniferhahm.com</a>.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col text-left px-4">
                        <h2 className="font-serif text-xl font-semibold text-gray-800 mb-2 text-center md:text-left">
                            For Website Visitors
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            This website is hosted by Squarespace. Squarespace collects personal data when
                            you visit this website, including:
                        </p>

                        <ul className="mt-2 text-sm text-gray-600 leading-relaxed pl-4">
                            <li className="flex items-start"><BsDot /> Information about your browser, network and device</li>
                            <li className="flex items-start"><BsDot /> Web pages you visited prior to coming to this website</li>
                            <li className="flex items-start"><BsDot /> Your IP address</li>
                        </ul>

                        <p className="text-gray-600 leading-relaxed text-sm mt-4">
                            Squarespace needs the data to run this website, and to protect and improve its platform and services. Squarespace analyzes the data in a de-personalized form.
                        </p>

                        <h3 className="font-semibold mt-4 text-gray-800">Cookies</h3>
                        <p className="text-sm text-gray-600">
                            This website uses cookies and similar technologies. For information about viewing the cookies dropped on your device, visit Squarespace's cookie documentation.
                        </p>

                        <h3 className="font-semibold mt-4 text-gray-800">Fonts</h3>
                        <p className="text-sm text-gray-600">
                            This website uses fonts from Google Fonts and Adobe Fonts. To properly display this site to you, font servers may receive:
                        </p>

                        <ul className="mt-2 text-sm text-gray-600 pl-4">
                            <li className="flex items-start"><BsDot /> Information about your browser, network, or device</li>
                            <li className="flex items-start"><BsDot /> Your IP address</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PrivacyPolicy;
