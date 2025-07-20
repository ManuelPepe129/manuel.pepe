import {useState} from "react";
import {cn} from "@/lib/utils.js";

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const skills = [
        {name: "C++", level: 85, category: "programming"},
        {name: "Three.js", level: 65, category: "programming"},
        {name: "OpenGL", level: 70, category: "programming"},
        {name: "Python", level: 50, category: "programming"},
        {name: "Unreal Engine", level: 80, category: "tools"},
        {name: "Unity", level: 75, category: "tools"},
        {name: "Blender", level: 45, category: "tools"},

    ];

    const categories = ["all", "programming", "tools"];

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || activeCategory === skill.category
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-seconddary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My
                    <span className="text-primary">Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ?
                                    "bg-primary text-primary-foreground" :
                                    "bg-secondary/70 text-foreground hover:bg-secondary")}
                            onClick={() => setActiveCategory(category)}>
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div
                        key={key}
                        className="bg-card p-6 rounded-lg shadow-xs card-hover"
                    >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                 style={{width: skill.level + "%"}}/>
                        </div>
                        <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">
                                    {skill.level}%
                                </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}