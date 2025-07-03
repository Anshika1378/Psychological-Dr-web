import Dr from "../../assets/media/DR.png";
import AreaOfFocus from "../Area/AreaOfFocus";

function About() {
    return (
        <>
            <div className="bg-white py-12 px-6 sm:px-6 lg:px-20 mt-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
                    {/* Image Section */}
                    <div className="order-1 md:order-2 flex justify-center md:justify-end">
                        <img
                            src={Dr}
                            alt="Dr. Jennifer Hahm"
                            className="rounded-lg shadow-lg w-full max-w-md h-auto object-cover"
                        />
                    </div>
                    {/* Text Section */}
                    <div className="order-2 md:order-1">
                        <h1 className="font-serif font-semibold text-3xl text-gray-700 mb-20">
                            About Dr. Jennifer Hahm
                        </h1>
                        <p className="text-gray-600 leading-relaxed text-justify">
                            Finding time and opportunities to care for ourselves can be incredibly challenging in today's busy and demanding world. I believe therapy offers a dedicated space for self-care, providing the support and tools needed to improve this essential practice. Therapy can help individuals identify and clarify their goals, values, and the various elements that contribute to their well-being, recognizing that these aspects vary from person to person.
                            <br /><br />
                            I am dedicated to supporting this journey by offering active listening, psychological knowledge, empathy, compassion, and insights into behavioral patterns and tendencies. I hold a master’s degree in Clinical Psychology from the Michigan School of Psychology (2012) and a Ph.D. in Counseling Psychology from Western Michigan University (2018). My experience spans therapy and psychological assessment in psychiatric inpatient units, academic medical centers, universities, and outpatient practice settings.
                            <br /><br />
                            My therapeutic approach is primarily psychodynamic and humanistic, enriched by influences from positive psychology, existentialism, family systems theory, acceptance and commitment concepts, and mindfulness practices.
                        </p>
                    </div>


                </div>
                <br /><br /><br /><br />
                <hr />
            </div>
            <div className="bg-white h-12">
                {/* space */}
            </div>
            <div className="bg-gray-100  items-center justify-center">
                <h1 className="text-3xl text-gray-700 text-center font-serif font-extralight mt-5 ">
                    Therapy can be a space where you invest in 
                    <br />
                    yourself—one of the highest forms of self-care.
                </h1>
                <p className="text-gray-500  text-center mt-5">
                    You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss, self <br />
                    -esteem issues, or challenges with family, parenting, or parental relationships. Whatever the source of your stress, you <br />
                     don't have to face it alone. Therapy offers you the time and space to work toward wellness and <br />
                     peace.
                </p>
                <br /><br /><br /><br />
                <hr />
            </div>
            <AreaOfFocus />
        </>

    );
}

export default About;
