import {cn} from "@/lib/utils.js";
import {ExternalLink} from "lucide-react";

export default function ProjectComponent({key, project, textExpanded, OnReadMoreButtonCLicked}) {
    return (<div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
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
    </div>)
}