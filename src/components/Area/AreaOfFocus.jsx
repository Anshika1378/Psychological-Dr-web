import time from "../../assets/media/timemirror.png";
import hand from "../../assets/media/hand.png";
import flag from "../../assets/media/flag.png";
import RateOfInsurance from "./RateofInsurance";

function AreaOfFocus() {
    return (
        <>
            <div className="bg-gray-100 py-16 px-4">
                <h1 className="text-center text-4xl text-gray-700 font-serif mb-12">Area Of Focus</h1>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Column 1 */}
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={time}
                            alt="Healthcare Providers"
                            className="rounded-full shadow-lg w-60 h-60 object-cover mb-4"
                        />
                        <h2 className="font-serif text-xl font-semibold text-gray-800 mb-2">
                            Therapy for Healthcare Providers <br /> and Students
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm text-center">
                            The care you provide for others may be driving you to seek therapy, whether due to burnout, compassion fatigue, imposter syndrome, people-pleasing tendencies, or perfectionism. Whether you're in pre-professional school, undergoing training, or reflecting on a long career in healthcare, we can address the unique stressors of your professional environment along with any challenges you may be facing in other areas of your life.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={hand}
                            alt="Life Transitions"
                            className="rounded-full shadow-lg w-60 h-60 object-cover mb-4"
                        />
                        <h2 className="font-serif text-xl font-semibold text-gray-800 mb-2">
                            Therapy for Trauma and Grief
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Life's challenges, whether a difficult childhood, a traumatic event or series of events, or the loss of someone or something deeply meaningful, can lead to profound experiences of trauma and grief. Therapy offers a supportive space to process these experiences, care for yourself amidst painful thoughts and emotions, and work toward a sense of grounding and meaning.
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col items-center text-center">
                        <img
                            src={flag}
                            alt="Personal Growth"
                            className="rounded-full shadow-lg w-60 h-60 object-cover mb-4"
                        />
                        <h2 className="font-serif text-xl font-semibold text-gray-800 mb-2">
                            Therapy for Second Generation <br /> Individuals In Immigrant Families
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Second-generation individuals in immigrant families, born in the U.S. to at least one parent born abroad, often navigate the complexities of multiple cultures and diverse expectations. This experience can bring challenges such as feeling like a foreigner in your own country and navigating strained family relationships. Therapy offers a supportive space to explore and process this unique aspect of your identity.
                        </p>
                    </div>
                </div>
            </div>
            <RateOfInsurance />
        </>
    );
}

export default AreaOfFocus;
