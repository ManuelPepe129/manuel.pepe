import {ArrowRight, ExternalLink, Github} from "lucide-react";
import {useState} from "react";
import {cn} from "@/lib/utils.js";


export const ProjectsSection = () => {
    const projects = [
        {
            title: "Martha is Dead",
            description: "Martha is Dead is a psychological horror game developed by LKA and published by Wired Productions for Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X/S.",
            image: "/projects/martha-is-dead.jpg",
            tags: ["Unreal Engine", "C++"],
            url: "https://youtu.be/FEu00vo4Iic"
        },
        {
            title: "Memorie di Mariette",
            description: "Virtual Reality Escape Room born from a collaboration between Politecnico di Torino, Robin Studio, and the Egyptian Museum within the context of the exhibition \"Aida - Figlia di Due Mondi.”",
            image: "/projects/aida_museo_egizio.jpg",
            tags: ["Unity", "VR"],
            url: "https://archivio-poliflash.polito.it/in_ateneo/la_realta_virtuale_del_politecnico_al_museo_egizio_per_la_mostra_sull_aida"
        },
    ];

    const [textExpanded, setTextExpanded] = useState(false);

    const OnReadMoreButtonCLicked = () => {
        console.log("clicked")
        setTextExpanded(!textExpanded);
    }

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center">Featured <span
                    className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent
                    projects</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) =>
                                        <span
                                            className="px-2 py-1 text-sm font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className={cn("text-muted-foreground text-sm mb-2  overflow-hidden", textExpanded ? "h-30" : "h-20")}>{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <button className="p-2 text-primary z-50 cursor-pointer " onClick={OnReadMoreButtonCLicked}>{ textExpanded ? "Read less" : "Read more..."}</button>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.url}
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            target="_blank"
                                        >
                                            <ExternalLink size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                       href="https://github.com/ManuelPepe129"
                       target="_blank">
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
}