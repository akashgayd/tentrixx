import faqBanner from '../../../../imeges/resorsesImg/FAQs-banner.png';
import FAQAccordion from './Faqdata';
import Navber from '../../../common/navbar';

const Faq = () => {
  return (
    <>
      <Navber />
      <div
        className="relative bg-gray-50 bg-cover bg-center w-full min-h-[50vh] lg:min-h-[70vh] flex items-center px-4 py-6"
        style={{ backgroundImage: `url(${faqBanner})` }}
      >
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

        {/* Content with better responsive text scaling */}
        <div className="relative z-10 w-full sm:w-3/5 md:w-2/5 ml-auto mr-4 sm:mr-6 md:mr-10 flex flex-col items-end p-2 sm:p-4">
          <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold leading-tight text-white">
            Questions? Queries? Clarifications?
          </h2>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-white font-semibold">
            Here's a list of Frequently Asked Questions that should be able to
            address any concerns that you may have.
          </p>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-white font-semibold">
            If your query is not addressed by these FAQs, feel free to connect
            with us at <span className="underline">hr@artech.com</span>
          </p>
        </div>
      </div>
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl md:text-1xl lg:text-2xl font-semibold text-center mb-6 text-gray-800">
          Frequently Asked Questions
        </h1>
        <div className="w-full max-w-3xl mx-auto border-t-4 border-amber-500"></div>
      </div>
      <FAQAccordion />
    </>
  );
};

export default Faq;