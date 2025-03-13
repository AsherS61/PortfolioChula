import ProjectSideBar from "@/components/ProjectSideBar";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        {children}
    </div>
  );
}
