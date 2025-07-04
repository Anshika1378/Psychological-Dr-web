import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import logo from "../../assets/media/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
    const [isMoblileMenu, setisMoblieMenu] = useState(false);

    return (
        <>
            <nav className="relative z-10 flex flex-wrap justify-between items-center bg-gray-100 px-4 py-3">
                <img src={logo} alt="" className="lg:m-22 lg:mt-5 w-50 lg:w-100 sm:w-30 mt-5" />

                {/* Toggle Button for Mobile */}
                <button
                    onClick={() => setisMoblieMenu(!isMoblileMenu)}
                    className="lg:hidden p-2 rounded-md hover:bg-gray-200"
                >
                    {isMoblileMenu ? <RxCross2 size={25} /> : <RxHamburgerMenu size={25} />}
                </button>

                {/* Navigation Links */}
                <div className={`${!isMoblileMenu ? "hidden" : ""} w-full lg:w-auto lg:block`}>
                    <ul className="lg:hidden flex flex-col lg:flex-row bg-gray-50 lg:bg-transparent  lg:border-none rounded-lg mt-4 lg:mt-0 text-lg">
                        <li className="py-2 px-4 hover:underline">
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="py-2 px-4 hover:underline">
                          <Link to="/privacy-policy">  Privacy Policy</Link>
                        </li>
                        <li className="py-2 px-4 hover:underline">
                           <Link to="/good-faith-estimate"> Good Faith Estimate</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Nav;
