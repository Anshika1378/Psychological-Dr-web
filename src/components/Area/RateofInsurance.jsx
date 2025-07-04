import ImageContent from "./ImageContent";

function RateOfInsurance() {
    return (
        <>
            <div className="bg-sky-600 h-full mt-5 p-4">
                <h1 className="text-center text-4xl text-gray-700 font-serif mb-12 mt-5">Rates and Insurance</h1>
                <p className="text-black leading-relaxed  text-center">
                    Session Fee - $200 <br /><br />

                    Psychodiagnostic Evaluation - $225 <br /><br />

                    I accept both private pay and insurance. I am in-network with BCBS and Aetna. <br /><br />

                    For out-of-network plans, I’ve partnered with Mentaya using this tool to help you check your eligibility for reimbursement for <br /><br /> my services.
                </p>
            </div>
            <div className="bg-white h-full">
                <h1 className="text-center text-2xl text-black font-serif  mt-10 mb-10">Unable to accept new clients at this time.</h1>
            </div>
            <ImageContent />
        </>
    )
}
export default RateOfInsurance;