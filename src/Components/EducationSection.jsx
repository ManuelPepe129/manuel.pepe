import {cn} from "@/lib/utils.js";
import {ExternalLink} from "lucide-react";

export const EducationSection = () => {
    const educations = [
        {
            title:"Master's Degree",
            name: "Politecnico di Torino",
            duration: "Sept. 2020 - July 2023",
            location: "Turin, Italy",
            grade: "110 cum laude"
        },
        {
            title:"Bachelor's Degree",
            name: "Università degli Studi di Firenze",
            duration: 'Sept. 2015 - Dec. 2019',
            location: "Florence, Italy",
        },
    ];

    return (
        <section id="education" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center"><span
                    className="text-primary">Education</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent
                    projects</p>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
                    {educations.map((education, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="p-6 space-y-2">
                                <h6 className="text-xs">{education.duration}</h6>
                                <h3 className="text-xl font-semibold mb-2">{education.title}</h3>
                                <p className={"text-muted-foreground text-m mb-1"}>{education.name}</p>
                                <h5 className={"text-sm font-light"}>{education.location}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}