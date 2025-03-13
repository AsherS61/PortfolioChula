interface Project {
    name: string;
    ref: React.RefObject<HTMLDivElement | null>;
}

interface ProjectSideBarProps {
    projects: Project[];
}

export default function ProjectSideBar({ projects }: ProjectSideBarProps) {
    return (
        <div className="fixed left-0 top-0 h-full w-60 bg-gray-900 text-white p-4">
            <h2 className="text-lg font-bold mb-4">Projects</h2>
            {projects.map((project) => (
                <button
                    key={project.name}
                    onClick={() => project.ref?.current?.scrollIntoView({ block:"center",behavior: "smooth" })}
                    className="block p-2 hover:bg-gray-700 w-full text-left"
                >
                    {project.name}
                </button>
            ))}
        </div>
    );
}
