const projects = [
    {
        id: 1,
        title:"Martha is Dead",
        description:"Martha is Dead is a psychological horror game developed by LKA and published by Wired Productions. Released on multiple platforms including PS4/5, Xbox, and PC.",
        imgUrl: "",
        tags: ["Game Development", "Unreal Engine"],
        url: ""
    },

];

export default function ProjectTable() {
    return (
        <section id={"projects"}>
            <div className="container mx-auto">
                <h2></h2>
            </div>
        </section>
    );
}

function ProjectData({projectName, projectDescription}) {
    return (<>
            <div>
                <a>
                    <img/>
                </a>
            </div>
            <div>
                <a>
                    <h3>{projectName}</h3>
                </a>
                <p>{projectDescription}</p>
            </div>
        </>
    );
}