import Nav from "../Home/Nav";

function GoodFaith() {
    return (
        <>
            <Nav />
            <div className="container items-center justify-center bg-gray-100 mb-20 p-4">
                <h1 className="text-gray-800 font-serif text-5xl text-center items-center">Good Faith Estimate</h1>
                <p className="text-gray-400 font-serif  text-center items-center mt-5">
                    Effective January 1, 2022, a ruling went into effect called the “No Surprises Act,”<br />
                    which requires mental health practitioners to provide a “Good Faith Estimate”<br />
                    (GFE) about out-of-network care to any patient who is uninsured or who is insured<br />
                    but does not plan to use their insurance benefits to pay for health care items and/<br />
                    or services.<br /><br />
                    The Good Faith Estimate works to show the cost of items and services that are <br />
                    reasonably expected for your mental health care needs for an item or service. The <br />
                    estimate is based on information known at the time the estimate was created. The <br />
                    Good Faith Estimate does not include any unknown or unexpected costs that may arise <br />
                    during treatment. <br /><br />
                    You are entitled to receive this “Good Faith Estimate” of what the charges could be <br />
                     for psychotherapy services provided to you. While it is not possible for a <br />
                     psychotherapist to know, in advance, how many psychotherapy sessions may be <br />
                      necessary or appropriate for a given person upon the initiation of psychotherapy, <br /> 
                      an estimate of the cost of services will be provided. Your total cost of services <br />
                      will depend upon the number of psychotherapy sessions you attend, your individual <br />
                      circumstances, and the type and amount of services that are provided to you. This <br />
                       estimate is not a contract and does not obligate you to obtain any services. <br />
                </p>
            </div>
        </>
    )
}
export default GoodFaith;