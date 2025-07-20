import {ArrowDown} from "lucide-react";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container mx-auto text-center z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-36">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Manuel</span>
                            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Pepe</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                            <span className="text-primary font-semibold">Software and Multimedia Engineer</span> with
                            hands-on experience in
                            real-time systems, including video game development and
                            optimization. Focused on video game development and rendering
                            technologies, an area in which I constantly look to expand my
                            skills through study and experimentation. I am motivated,
                            focused, and enthusiastic to contribute to graphic programming
                            projects in dynamic and collaborative settings.
                        </p>
                        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                            <a href="#projects" className="cosmic-button">
                                View My Work
                            </a>
                        </div>
                    </div>
                    <div className="verflow-hidden opacity-0 animate-fade-in-delay-4">
                        <img
                            src="/manuel_pepe.jpg"
                            alt="Manuel Pepe"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                </div>
                <div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                    <ArrowDown className="h-5 w-5 text-primary"/>
                </div>
            </div>
        </section>);
}