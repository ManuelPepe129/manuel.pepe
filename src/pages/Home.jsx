import {ThemeToggle} from "@/Components/ThemeToggle.jsx";
import {StarBackground} from "@/Components/StarBackground.jsx";
import {Navbar} from "@/Components/Navbar.jsx";
import {HeroSection} from "@/Components/HeroSection.jsx";
import {AboutSection} from "@/Components/AboutSection.jsx";
import {SkillsSection} from "@/Components/SkillsSection.jsx";
import {ProjectsSection} from "@/Components/ProjectsSection.jsx";
import {ContactSection} from "@/Components/ContactSection.jsx";
import {FooterComponent} from "@/Components/Footer.jsx";


export default function Home() {
    return (
        <div className = "min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Theme Toggle */}
            <ThemeToggle/>

            {/* Background Effect */}
            <StarBackground/>

            {/* Navbar */}
            <Navbar/>

            {/* Main Content */}
            <main>
                <HeroSection/>
                {/*<AboutSection/>*/}
                <SkillsSection/>
                <ProjectsSection/>
                {/*<ContactSection/>*/}
            </main>

            {/* Footer */ }
            <FooterComponent/>
        </div>
    );
}