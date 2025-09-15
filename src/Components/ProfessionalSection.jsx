import {cn} from "@/lib/utils.js";
import {ExternalLink} from "lucide-react";

export const ProfessionalSection = () => {
    const working_experience = [
        {
            title:"3D Developer",
            company: "Alten Italy",
            duration: "Aug. 2024 - Current"
        },
        {
            title: "Tech Artist",
            company: "ZURU Tech",
            duration: 'May 2023 - July 2024',
        },
        {
            title: "Tech Artist Intern",
            company: "ZURU Tech",
            duration: 'Oct. 2022 - Jan. 2023',
        },
        {
            title: "Game Developer",
            company: "LKA srl",
            duration: 'Jan. 2020 - Sept. 2020',
        },
        {
            title: "Game Developer Intern",
            company: "LKA srl",
            duration: 'May 2019 - Sept. 2020',
        },
    ];

    return (
        <section id="professional_experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center"><span
                    className="text-primary">Professional Experience</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent
                    projects</p>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
                    {working_experience.map((experience, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="p-6 space-y-2">
                                <h6 className="text-xs">{experience.duration}</h6>
                                <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                                <p className={"text-muted-foreground text-m mb-1"}>{experience.company}</p>
                                <h5 className={"text-sm font-light"}>{experience.location}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}