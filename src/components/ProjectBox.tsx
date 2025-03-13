import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface ProjectBoxProps {
    name: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}

export default function ProjectBox({ name, description, image, link, tags }: ProjectBoxProps) {
    return (
        <div className="mt-20 flex flex-col md:flex-row bg-gray-800 shadow-lg rounded-lg overflow-hidden max-w-2xl mx-auto ">
            <div className="w-full md:w-1/2 flex justify-center items-center ">
                <Image 
                    src={image} 
                    alt={`${name} Image`} 
                    width={500} 
                    height={300} 
                    className="object-contain border-white border-2 rounded-lg border-r-0 "
                />
            </div>

            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center text-white">
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p className="mt-2 text-gray-300">{description}</p>
                
                <div className="mt-3 flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span 
                                key={index} 
                                className="px-3 py-1 text-sm bg-blue-600 rounded-full text-white"
                            >
                                {tag}
                            </span>
                        ))}
                </div>

                <div className="mt-4">
                    <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-400 hover:text-blue-600"
                    >
                        <FaGithub size={24} />
                        <span>View on GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
