import { useState } from "react";
import { MdLocalPhone } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { TiLocation } from "react-icons/ti";
import Image from "next/image";

export const Milestone1 = () => {

    const [hideSkill, setHideSkill] = useState(false);

    let btn_classes = `bg-slate-400 p-3 rounded-lg text-white my-3 bg-gradient-to-r from-blue_col via-purple_col to-pink_col`
    let skill_list_classes = `text-sm desktop:text-base font-bold mt-5`
    let resumeSubHeading = `text-base tablet:text-xl desktop:text-2xl w-full border border-primary-color rounded-3xl p-2 px-4 mt-3 mb-3 text-white`;
    let education_styling = `text-base desktop:text-lg font-bold mt-5`;

    return (
        <>
            {/* Name  */}
            <div id="content" className="resumediv mb-10 mt-8 flex justify-center rounded-lg border-2 mx-auto w-4/5 max-w-full md:max-w-4xl lg:max-w-5xl background_col">
                <div className="left bg-black text-white p-7 rounded-l-lg">

                    {/* Profile Picture  */}
                    <div className="flex justify-center items-center rounded-full bg-slate-100 mb-12 border-2 border-slate-100 w-20 h-20 tablet:w-28 tablet:h-28 desktop:w-48 desktop:h-48 mx-auto">
                        <Image
                            className=" mx-auto w-full h-full rounded-full object-cover"
                            src="/resumepic.jpg"
                            alt="profile"
                            width={500}
                            height={300}
                            priority
                        />
                    </div>


                    {/* About Section  */}
                    <h2 className={`${resumeSubHeading} bg-black`}>About Me</h2>
                    <p className='text-sm desktop:text-base my-6'>
                        Aspiring front-end developer with a solid foundation in HTML, CSS, JavaScript, jQuery, and Bootstrap. Currently enhancing skills in React and Tailwind CSS. Eager to contribute to a dynamic team and grow in the field of software engineering.
                    </p>
                    {/* Contact Section  */}
                    <h2 className={`${resumeSubHeading} bg-black`}>Contact</h2>

                    <div className="flex flex-col items-start w-full">
                        <div className="flex items-center w-full">
                            <div style={{ borderRadius: "50%" }} className="w-10 h-10 bg-purple_col flex justify-center items-center p-2 my-2">
                                <MdLocalPhone />
                            </div>
                            <p className="text-sm desktop:text-base ml-2 flex-1 break-words">
                                +123 456 789 10
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start w-full">
                        <div className="flex items-center w-full">
                            <div className="w-10 h-10 bg-purple_col flex justify-center items-center p-2 my-2 rounded-full">
                                <SiGmail />
                            </div>
                            <p className="text-sm desktop:text-base mb-4 mt-2 ml-2 min-w-0 break-words">
                                khuloodmaqbool3@gmail.com
                            </p>
                        </div>
                    </div>


                    <div className="flex flex-col items-start w-full">
                        <div className="flex items-center w-full">
                            <div className="w-10 h-10 bg-purple_col flex justify-center items-center p-2 my-2 rounded-full">
                                <TiLocation className="text-white" />
                            </div>
                            <p className="text-sm desktop:text-base mb-4 mt-2 ml-2 min-w-0 break-words">Nazimabad, Karachi</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-start w-full">
                        <div className="flex items-center w-full">
                            <div className="w-10 h-10 bg-purple_col flex justify-center items-center p-2 my-2 rounded-full">
                                <FaLinkedinIn />
                            </div>
                            <p className="text-sm desktop:text-base mb-4 mt-2 ml-2 min-w-0 break-words">
                                <a href="https://www.linkedin.com/in/khulood-maqbool-b45aa3255/" target="_blank" rel="noopener noreferrer">LinkedIn Profile Link</a>
                            </p>
                        </div>
                    </div>
                    {/* Languages Section  */}
                    <h2 className={`${resumeSubHeading} bg-black mt-6`}>Language</h2>
                    <p className='text-sm desktop:text-base my-3'>English</p>
                    <p className='text-sm desktop:text-base my-3'>Urdu</p>
                </div>

                <div className="right p-5">
                    <h2 className="bg-primary-color text-white text-center text-LG  tablet:text-4xl laptop:text-6xl desktop:text-6xl  py-4 rounded-3xl">Khulood Maqbool</h2>
                    <h2 style={{ fontFamily: "Dancing Script" }} className='font-bold text-center text-lg mb-6 mt-2 tablet:text-3xl laptop:text-5xl'>Front End Developer</h2>
                   
                    {/* Education Section  */}
                    <h2 className={`${resumeSubHeading} bg-primary-color`}>Education</h2>
                    <ul>
                        <li className={`${education_styling}`}>Diploma in Software Engineering</li>
                        <p className='text-sm desktop:text-base'>Aptech Learning Institute | Ongoing</p>
                        <li className={`${education_styling}`}>Courses</li>
                        <p className='text-sm desktop:text-base'>Generative AI Course | Ongoing, Governor House</p>
                        <li className={`${education_styling}`}>Intermediate</li>
                        <p className='text-sm desktop:text-base'>Govt Degree Girls College, Karachi</p>
                        <li className={`${education_styling}`}>Matriculation (Science Group)</li>
                        <p className='text-sm desktop:text-base'>Brilliant Career Grammar School, Karachi</p>
                    </ul>
                    {/* Skills Section  */}
                    <h2 className={`${resumeSubHeading} bg-primary-color`}>Skills</h2>
                    {hideSkill ? (
                        <button className={`${btn_classes}`} onClick={() => setHideSkill(false)}>Show Skills</button>
                    ) : (
                        <>
                            <ul>
                                <li className={`${skill_list_classes}`}>HTML</li>
                                <li className={`${skill_list_classes}`}>CSS</li>
                                <li className={`${skill_list_classes}`}>Bootstrap</li>
                                <li className={`${skill_list_classes}`}>TypeScript</li>
                                <li className={`${skill_list_classes}`}>React</li>
                                <li className={`${skill_list_classes}`}>JavaScript</li>
                                <li className={`${skill_list_classes}`}>Tailwind CSS</li>
                            </ul>
                            <button className="bg-slate-400 p-3 rounded-lg text-white my-3 bg-gradient-to-r from-blue_col via-purple_col to-pink_col" onClick={() => setHideSkill(true)}>Hide Skills</button>
                        </>
                    )}
                    
                    {/* Experience Section  */}
                    <h2 className={`${resumeSubHeading} bg-primary-color`}>Experience</h2>
                    <div className="flex flex-col">
                        <div className='flex-1 break-words text-sm desktop:text-base'>
                            I have developed several demo projects, including the Funzone website, a Todo List app, a Tasbeeh counter, and a personal portfolio. These projects showcase my skills in React, HTML, CSS, JavaScript, TypeScript, Bootstrap, and Tailwind CSS, as well as my understanding of UI/UX design. My hands-on experience highlights my ability to create effective and visually appealing front-end solutions.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
