import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/media/logo.png";
function Nav(){
    return(
        <>
             <nav className="relative z-10 flex flex-wrap justify-between items-center bg-gray-100 ">
                <img src={logo} alt="" className="lg:m-22 lg:mt-5 w-50 lg:w-100 sm:w-30 mt-5" />
                <div className="lg:hidden sm:visible mt-5 p-1">
                     <RxHamburgerMenu />
                </div>
            </nav>
        </>
    )
}
export default Nav;