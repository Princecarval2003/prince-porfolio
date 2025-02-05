import { useLanguage } from "../context/LanguageContext";

function Projects() {
    const { translate } = useLanguage();
    const projects = translate("projects");

    return (
        <>
            <article className="px-[18vw] py-24 min-h-80 content-center bg-[#FFFFFF] text-center dark:bg-[#484148] dark:text-[#F4F4F4]">
                <h1 className="my-10 font-medium text-5xl leading-tight tracking-normal">{projects.h1}</h1>
                <div className="flex flex-row justify-evenly text-left flex-wrap lg:flex-nowrap mt-10">
                    {
                        projects.myProjects.map(project => (
                            <div key={project.id} className="md:w-96 flex flex-col px-3 pt-3 mx-2 mt-3 mb-10 bg-[#DDEEFE] dark:bg-[#2D3235] rounded-xl">
                                <h1 className="text-3xl font-bold tracking-wide mt-5 font-playfair">{project.h1}</h1>
                                <p className="my-5 tracking-wide text-base font-normal">{project.text}</p>
                                <div className="flex flex-row flex-wrap">
                                    {
                                        project.materials.map(material => {
                                            return <p className="py-1 px-2 m-2 bg-[#FFFFFF] dark:bg-[#525252] rounded-2xl font-bold text-base tracking-wide" key={material}>{material}</p>
                                        })
                                    }
                                </div>
                                <div className="flex justify-between my-5 font-semibold text-xl ">
                                    <a href={project.viewLink}>{project.viewText}</a>
                                    <a href={project.appLink}>{project.appText}</a>
                                </div>
                                
                                <img src={project.imgLink} className="mt-auto -mb-6" alt={project.h1} />
                            </div>
                        ))
                    }
                </div>
            </article>
        </>
    );
}

export default Projects;
