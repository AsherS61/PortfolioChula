import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function ProfileBox() {
    return (
        <div className="bg-gray-800 shadow-lg rounded-2xl p-6 text-center w-[90%] mx-auto">
            <div className="flex flex-col">
                <div className="flex justify-start relative items-center">
                    <Image 
                        src="/yourImage.jpg" 
                        alt="Profile Picture" 
                        width={100} 
                        height={100} 
                        className="rounded" 
                    />
                    <div className="ml-4 ">
                        <h2 className="text-xl font-semibold text-white font-bold">My name is Ashira Boonfongmanee</h2>
                        <p className="text-gray-400 mt-2">
                        <h4 className="text-lg font-serif mt-4">I am a Computer Engineering student currently pursuing a degree with a focus on backend development and software engineering.</h4>
                        <h4 className="text-lg font-serif mt-4">Passionate about solving complex problems through code, I have developed a strong foundation in programming languages like Python and C++.</h4>
                        </p>
                    </div>
                </div>
                
                <div className="mt-4 flex justify-center space-x-4">
                    <a href="/project" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Projects</a>
                    <a href="/contact" className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-900">Contact</a>
                </div>

                <div className="pt-6 flex justify-center">
                    <a 
                        href="https://github.com/AsherS61" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-white"
                    >
                        <FaGithub size={50} />
                    </a>
                </div>
            </div>
        </div>
    );
}
