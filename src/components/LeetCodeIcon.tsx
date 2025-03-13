import { SiLeetcode } from "react-icons/si";

export default function LeetCodeIcon({ link }: { link: string }) {
    return (
        <div className="pt-6 flex justify-center">
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-yellow-500 transition"
            >
                <SiLeetcode size={50} />
            </a>
        </div>
    );
}
