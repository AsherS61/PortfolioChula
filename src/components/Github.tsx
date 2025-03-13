import { FaGithub } from "react-icons/fa";

export default function GithubIcon( {link} : {link:string}) {
    return (
        <div className="pt-6 flex justify-center">
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition"
            >
                <FaGithub size={50} />
            </a>
        </div>
    )
}