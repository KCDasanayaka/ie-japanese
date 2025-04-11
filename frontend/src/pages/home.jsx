import React from "react";
import hero from '../assets/hero.png';
import Student from '../assets/Student.png';
import Job from '../assets/JobVisa.png';

function Home() {
  return (
    <div className="w-full overflow-x-hidden"> {/* Prevent overflow globally */}

        <section id= "" className="mt-5 mb-5 ml-5 mr-5 lg:mt-10 lg:mb-10 lg:ml-10 lg:mr-10">


        <div className="w-full bg-red-50 py-10 2xl:py-16 xl:py-8 lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-br-2xl lg:rounded-tr-2xl overflow-hidden">
          <div className="mx-auto max-w-7xl px-2 sm:px-2 lg:px-4">

            <div className="grid grid-cols-1 gap-0 items-center lg:grid-cols-12">
              {/* LEFT COLUMN */}
              <div className="xl:col-span-5 lg:col-span-6"> 
              <div className="flex flex-col lg:flex-row items-center text-xl font-bold text-red-brand justify-center lg:justify-start text-center">
                <span className="bg-red-brand py-1 px-6 rounded-3xl text-xl font-bold text-white mr-3">
                    #1
                </span>
                Japan Career & Language Center
            </div>



                
                <h1 className="py-8 text-center text-gray-900 font-bold font-manrope text-6xl lg:text-left leading-[70px]">
                    Your Gateway to <span className="text-red-brand ">Japan</span> — Study, Work, and Grow
                </h1>
                
                <p className="text-gray-500 text-lg text-center lg:text-left">
                    IEJapanese Language Center guides you through Japan student visas, job placements, direct visa processing, language training, and interview preparation. Begin your journey to a brighter future in Japan, today.
                </p>

                <div className="relative p-1.5 my-10 flex items-center gap-y-4 h-auto md:h-16 flex-col md:flex-row justify-between rounded-full md:shadow-[0px_15px_30px_-4px_rgba(16,24,40,0.03)] border border-transparent md:bg-white transition-all duration-500 hover:border-red-600 focus-within:border-indigo-600">
                    <input type="text" name="email" placeholder="Enter email to get started"
                    className="text-base rounded-full text-gray-900 flex-1 py-4 px-6 shadow-[0px_15px_30px_-4px_rgba(16,24,40,0.03)] md:shadow-none bg-white md:bg-transparent placeholder:text-gray-400 focus:outline-none w-full md:w-fit" />
                    <button className="bg-red-brand rounded-full py-3 px-7 text-base font-semibold text-white border border-transparent hover:bg-white hover:border-red hover:text-red-brand  transition-all duration-500 w-full md:w-fit">
                    Get Started
                    </button>
                </div>

              </div>

              {/* RIGHT COLUMN */}
              <div className="xl:col-span-7 lg:col-span-6">
                <div className="w-full h-full xl:ml-12 overflow-hidden">
                  <img
                    src={hero}
                    alt="Dashboard image"
                    className="rounded-l-3xl object-cover w-full h-auto max-w-full"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
        </section>

        <section id="about" className="py-20 bg-white py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-14 text-center">
                    <span
                        className="py-2 px-10 bg-red-brand rounded-full text-lg font-medium text-white text-center">About Us</span>
                    <h2 className="text-4xl mt-2 text-center font-bold text-gray-900 py-5 leading-snug uppercase">
                        Empowering Sri Lankans<br/>for a Brighter Future in Japan
                    </h2>
                    <p className="max-w-4xl mx-auto text-center text-gray-500 text-lg font-normal leading-8">
                        At IEJapanese Language Center, we specialize in helping Sri Lankans reach their dreams of studying and working in Japan. With expert language training, visa guidance, and job placement support, we offer a complete pathway to success in Japan.
                    </p>

                </div>

                {/* Mission & Vision */}
                <div
                    className="flex justify-center items-flex-start gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-20 lg:w-3/4 w-full mx-auto">
                    <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-full">
                        <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
                            <svg className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5"
                                    stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-3 capitalize">
                            Our Vision
                        </h4>
                        <p className="text-lg font-normal text-gray-500">
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
                        <h4 className="text-xl font-bold text-gray-900 mb-3 capitalize">
                           Our Mission
                        </h4>
                        <p className="text-lg font-normal text-gray-500">
                            To provide high-quality Japanese language education, seamless visa support, and career guidance that empowers Sri Lankans to 
                            thrive in Japan’s educational and work environments.
                        </p>

                    </div>
                </div>
            </div>
        </section>

        <section id="what-we-do" class="py-24 relative bg-gray-50">
            <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div class="w-full flex-col justify-start items-center lg:gap-11 gap-8 inline-flex">
                    <div class="w-full flex-col justify-start items-center gap-2.5 flex">
                        <span class="py-2 px-10 bg-red-brand rounded-full text-lg font-medium text-white text-center">Our Services</span>
                        <h2 class="text-4xl mt-2 text-center font-bold text-gray-900 py-5 leading-snug uppercase">Comprehensive Japan Pathway Solutions</h2>
                        <p class="max-w-4xl mx-auto text-center text-gray-500 text-lg font-normal leading-8">We provide end-to-end support for Sri Lankans pursuing education and career opportunities in Japan, from language training to visa processing and beyond.</p>
                    </div>
                    
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-start items-start gap-8">
                        {/* <!-- Japanese Language Training --> */}
                        <div class="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex bg-white">
                            <div class="flex-col justify-start items-center gap-3.5 inline-flex">
                                <div class="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#B93437" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"></path>
                                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                        <line x1="12" y1="19" x2="12" y2="23"></line>
                                        <line x1="8" y1="23" x2="16" y2="23"></line>
                                    </svg>
                                </div>
                                <h4 class="text-center text-gray-900 text-lg font-semibold leading-8">Japanese Language Training</h4>
                                <p class="text-center text-gray-500 text-sm font-normal leading-snug">Comprehensive courses from beginner to advanced levels (N5-N1) with native Japanese instructors and JLPT preparation.</p>
                            </div>
                        </div>
                        
                        {/* <!-- Student Visa Processing --> */}
                        <div class="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex bg-white">
                            <div class="flex-col justify-start items-center gap-3.5 inline-flex">
                                <div class="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#B93437" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                    </svg>
                                </div>
                                <h4 class="text-center text-gray-900 text-lg font-semibold leading-8">Student Visa Processing</h4>
                                <p class="text-center text-gray-500 text-sm font-normal leading-loose">Direct processing for student visas with our partner language schools and vocational colleges in Japan.</p>
                            </div>
                        </div>
                        
                        {/* <!-- Work Visa Assistance --> */}
                        <div class="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex bg-white">
                            <div class="flex-col justify-start items-center gap-3.5 inline-flex">
                                <div class="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#B93437" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <h4 class="text-center text-gray-900 text-lg font-semibold leading-8">Work Visa Assistance</h4>
                                <p class="text-center text-gray-500 text-sm font-normal leading-snug">Comprehensive support for job placements and work visa processing in various industries across Japan.</p>
                            </div>
                        </div>
                        
                        {/* <!-- Interview Preparation --> */}
                        <div class="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex bg-white">
                            <div class="flex-col justify-start items-center gap-3.5 inline-flex">
                                <div class="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#B93437" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                </div>
                                <h4 class="text-center text-gray-900 text-lg font-semibold leading-8">Interview Preparation</h4>
                                <p class="text-center text-gray-500 text-sm font-normal leading-snug">Specialized training for Japanese-style interviews including cultural etiquette and communication techniques.</p>
                            </div>
                        </div>
                        
                        {/* <!-- Cultural Orientation --> */}
                        <div class="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex bg-white">
                            <div class="flex-col justify-start items-center gap-3.5 inline-flex">
                                <div class="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#B93437" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </div>
                                <h4 class="text-center text-gray-900 text-lg font-semibold leading-8">Cultural Orientation</h4>
                                <p class="text-center text-gray-500 text-sm font-normal leading-snug">Workshops on Japanese business culture, social norms, and daily life to ensure smooth transition and direct visa processing.</p>
                            </div>
                        </div>
                        
                        {/* <!-- Accommodation Support --> */}
                        <div class="w-full px-6 py-8 rounded-2xl border border-gray-200 hover:border-indigo-600 transition-all duration-700 ease-in-out justify-center items-center gap-2.5 flex bg-white">
                            <div class="flex-col justify-start items-center gap-3.5 inline-flex">
                                <div class="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#B93437" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                    </svg>
                                </div>
                                <h4 class="text-center text-gray-900 text-lg font-semibold leading-8">Accommodation Support</h4>
                                <p class="text-center text-gray-500 text-sm font-normal leading-snug">Assistance with finding safe and affordable housing options in Japan through our partner network.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </section>

        {/* Student Visa Section */}
        <section id="Student-Visa" class="py-10">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="xl:p-24 gap-32 p-12 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex justify-between flex-col-reverse lg:flex-row">
                    {/* Image - Hidden on mobile, visible from lg breakpoint */}
                    <div class="hidden lg:block w-full lg:w-3/5 relative">
                        <img src={Student} alt="Japanese student studying" class="xl:absolute xl:bottom-0 rounded-t-3xl -mb-12 mx-auto lg:-mb-12 xl:-mb-24 lg:mx-0 object-cover"/>
                    </div>
                    
                    {/* Content */}
                    <div class="w-full lg:w-2/3">
                        <h2 class="text-4xl md:text-4xl text-white font-semibold mb-7 text-center leading-snug lg:text-left ">
                            Begin Your Japanese Education Journey
                        </h2>
                        
                        
                        <ul class="space-y-4 mb-12 text-indigo-50">
                            <li class="flex items-start">
                                <svg class="h-6 w-6 flex-shrink-0 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>Guaranteed admission to accredited Japanese language schools</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-6 w-6 flex-shrink-0 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>Document preparation and visa application support</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-6 w-6 flex-shrink-0 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>Pre-departure orientation and accommodation assistance</span>
                            </li>
                        </ul>
                        
                        <div class="flex items-center flex-col gap-7 md:flex-row lg:justify-start justify-center">
                            <a href="#" class="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-8 transition-all duration-500 hover:bg-indigo-50 hover:shadow-md">
                            Apply Now
                                <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5" stroke="#4F46E5" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Job Visa Section */}
        <section id="Job-Visa" class="py-10">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="xl:p-24 gap-32 p-12 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 flex justify-between flex-col-reverse lg:flex-row">
                    {/* Content */}
                    <div class="w-full lg:w-2/3">
                        <h2 class="text-4xl md:text-4xl text-white font-semibold mb-7 text-center leading-snug lg:text-left ">
                            Japan Work Visa Assistance for Sri Lankans
                        </h2>
                        
                        <ul class="space-y-4 mb-12 text-indigo-50">
                            <li class="flex items-start">
                                <svg class="h-6 w-6 flex-shrink-0 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>Guaranteed job placements with accredited Japanese employers</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-6 w-6 flex-shrink-0 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>Complete work visa documentation and application support</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-6 w-6 flex-shrink-0 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>Industry-specific Japanese language training included</span>
                            </li>
                            <li class="flex items-start">
                                <svg class="h-6 w-6 flex-shrink-0 text-white mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                                </svg>
                                <span>Pre-departure cultural and workplace orientation</span>
                            </li>
                        </ul>
                        
                        <div class="flex items-center flex-col gap-7 md:flex-row lg:justify-start justify-center">
                            <a href="#" class="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-indigo-600 font-semibold py-4 px-8 transition-all duration-500 hover:bg-indigo-50 hover:shadow-md">
                                Apply for Job Visa
                                <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5" stroke="#4F46E5" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Image - Hidden on mobile, visible from lg breakpoint */}
                    <div class="hidden lg:block w-full lg:w-2/5 relative">
                        <img src={Job} alt="Sri Lankan professionals working in Japan" class="xl:absolute xl:bottom-0 rounded-t-3xl -mb-12 mx-auto lg:-mb-12 xl:-mb-24 lg:mx-0 object-cover"/>
                    </div>
                </div>
            </div>
        </section>
                                            
                                            

    </div>
  );
}

export default Home;
