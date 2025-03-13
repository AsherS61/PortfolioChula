import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Github from "./Github";
import LeetCodeIcon from "./LeetCodeIcon";

export default function ProfileBox() {
    return (
        <div className="bg-gray-800 shadow-lg rounded-2xl p-6 text-center w-[80%] mx-auto">
            <div className="flex flex-col">
                <div className="flex mx-auto justify-center relative items-center w-[90%]">
                    <Image 
                        src="/img/portrait2.jpg" 
                        alt="Profile Picture" 
                        width={1700} 
                        height={2000} 
                        className="rounded-2xl bg-white w-[20%] h-[50%]" 
                    />
                    <div className="ml-4 w-[80%]">
                        <h2 className="text-3xl font-semibold text-white font-bold font-serif">My name is Ashira Boonfongmanee</h2>
                        <div className="text-gray-400 mt-2">
                            <h4 className="text-xl font-serif mt-4">I am a Computer Engineering student currently pursuing a degree with a focus on backend development and software engineering.
                            Passionate about solving complex problems through code, I have developed a strong foundation in programming languages like Python and C++.</h4>
                        </div>
                    </div>
                </div>
                
                <div className="mt-20 flex justify-center space-x-4">
                    <a href="/project" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Projects</a>
                    <a href="/contact" className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">Contact</a>
                </div>

                <div className="flex flex-row justify-center space-x-4">
                    <Github link='https://github.com/AsherS61'></Github>
                    <LeetCodeIcon link="https://leetcode.com/u/Ash3r/" />
                </div>
                
            </div>
        </div>
    );
}
