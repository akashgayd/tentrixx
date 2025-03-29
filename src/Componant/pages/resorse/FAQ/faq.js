import faqBanner from '../../../../imeges/resorsesImg/FAQs-banner.png'

const Faq = () => {
    return (
        <div
        className="relative bg-gray-50 bg-cover bg-center w-full lg:min-h-[70vh] flex items-center px-4 py-6"
        style={{ backgroundImage: `url(${faqBanner})` }}
      >
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
        
        {/* Content - Consistent across all screen sizes */}
        <div className="relative z-10 w-full md:w-2/5 ml-auto mr-4 md:mr-10 flex flex-col items-end">
          <h2 className=" text-[7px] md:text-2xl font-semibold leading-tight text-white">
          here a list of frequently asked questions that shold able to adress any concern that you may have

          </h2>
          <h2 className="text-[7px] md:text-2xl font-semibold leading-tight text-right text-white">
         if you queiry is not adress by the FAQs feel free to contact us hr@archtech.com
          </h2>
          
        
        </div>
      </div>
    );
}

export default Faq