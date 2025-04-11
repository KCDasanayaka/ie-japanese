import React from "react";


const About = () => {
    return (
        <section id="about" className="py-20 bg-white py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-14 text-center">
                    <span
                        className="py-2 px-10 bg-red-brand rounded-full text-lg font-medium text-white text-center">About Us</span>
                    <h2 className="text-4xl mt-2 text-center font-bold text-gray-900 py-5 leading-snug uppercase">
                        Empowering Sri Lankans<br/>for a Brighter Future in Japan
                    </h2>
                    <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
                        At IEJapanese Language Center, we specialize in helping Sri Lankans reach their dreams of studying and working in Japan. With expert language training, visa guidance, and job placement support, we offer a complete pathway to success in Japan.
                    </p>

                </div>

                {/* Mission & Vision */}
                <div
                    className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-20 lg:w-3/4 w-full mx-auto">
                    <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-full">
                        <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
                            <svg className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5"
                                    stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                        <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                            Our Vision
                        </h4>
                        <p className="text-sm font-normal text-gray-500">
                            To be Sri Lanka’s most trusted gateway for individuals seeking personal, academic, and professional success in Japan.
                        </p>

                    </div>
                    <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-full">
                        <div className="bg-pink-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
                            <svg className="stroke-pink-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z"
                                    stroke="" strokeWidth="2"></path>
                                <path
                                    d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z"
                                    stroke="" strokeWidth="2"></path>
                                <path
                                    d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z"
                                    stroke="" strokeWidth="2"></path>
                                <path
                                    d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z"
                                    stroke="" strokeWidth="2"></path>
                            </svg>
                         </div>
                        <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                           Our Mission
                        </h4>
                        <p className="text-sm font-normal text-gray-500">
                            To provide high-quality Japanese language education, seamless visa support, and career guidance that empowers Sri Lankans to 
                            thrive in Japan’s educational and work environments.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
