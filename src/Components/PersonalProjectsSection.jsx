import {ArrowRight} from "lucide-react";
import {useState} from "react";
import ProjectComponent from "@/Components/ProjectComponent.jsx";


export const PersonalProjectsSection = () => {
    const projects = [
        {
            title: "Bob the Wrecker",
            description: "Project developed during the Global Game Jame 2024.",
            image: "/projects/martha-is-dead.jpg",
            tags: ["Unity", "C#"],
            url: "https://youtu.be/FEu00vo4Iic"
        },
        {
            title: "3D CPU Renderer",
            description: 'Project developed following the Pikuma course "3D Computer Graphics Programming"',
            image: "/projects/aida_museo_egizio.jpg",
            tags: ["Computer Graphics", "C/C++"],
            url: "https://archivio-poliflash.polito.it/in_ateneo/la_realta_virtuale_del_politecnico_al_museo_egizio_per_la_mostra_sull_aida"
        },
    ];

    const [textExpanded, setTextExpanded] = useState(false);

    const OnReadMoreButtonCLicked = () => {
        setTextExpanded(!textExpanded);
    }

    return (
        <section id="personal-projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Featured <span
                    className="text-primary">Personal Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent
                    projects</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <ProjectComponent project={project} key={key} textExpanded={textExpanded} OnReadMoreButtonCLicked={OnReadMoreButtonCLicked} />
                    ))}
                </div>
            </div>
        </section>
    );
}