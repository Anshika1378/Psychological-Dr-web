
import BackgroundVideo from "./Background-video";

function Psychological() {
    return (
        <>
        <div className="relative mb-5  w-full top-0 overflow-hidden  h-[calc(90vh-100px)] m-0 p-0 px-4 sm:px-6 lg:px-16 lg:right-7 sm:right-7  py-6">         
            <BackgroundVideo />
            {/*  Overlay Content */}
            <div className="absolute top-0  w-full h-full  bg-opacity-50 flex items-center justify-center z-10 bg-opacity-40 ">
                <div className="text-center text-white p-6 ">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Psychological Care for</h1>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Change, Insight, and Well-Being</h2>
                    <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
                        Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation.
                    </p>
                    <button className="bg-teal-500 text-white font-semibold px-8 py-2 rounded-full hover:bg-teal-600 transition">
                        SCHEDULE A CONSULTATION
                    </button>
                </div>
            </div>       
        </div>
        </>
    );
};

export default Psychological;
