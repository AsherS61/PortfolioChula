import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { forwardRef } from "react";

interface ProjectBoxProps {
    name: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}

const ProjectBox = forwardRef<HTMLDivElement, ProjectBoxProps>(
    ({ name, description, image, link, tags }, ref) => {
        return (
            <div ref={ref} className="mt-20 flex flex-col md:flex-row bg-gray-800 shadow-lg rounded-lg overflow-hidden  justify-items-center">

                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <Image src={image} alt={`${name} Image`} width={500} height={300} className="object-contain border-white border-2 rounded-lg " />
                </div>

                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center text-white">

                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <p className="mt-2 text-gray-300 text-lg">{description}</p>

                    <div className="mt-4 ">
                        {tags.map((tag) => (
                            <span key={tag} className="bg-blue-600 text-white text-sm font-semibold px-2 py-1 rounded-full mr-2">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-400 hover:text-blue-600">
                            <FaGithub size={24} />
                            <span>View on GitHub</span>
                        </a>
                    </div>

                </div>
            </div>
        );
    }
);

export default ProjectBox;
