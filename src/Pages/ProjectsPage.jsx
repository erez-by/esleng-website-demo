import ProjectPic from "../components/project.jsx"; 

export default function ProjectsPage() {
    return (
        <div className="grid grid-cols-2 auto-rows-[50vw] md:grid-cols-4 md:auto-rows-[25vw] gap-4 p-4">
            <ProjectPic src={"/logos/circle-check-big.svg"} className="col-span-2"/>
            <ProjectPic src={"/logos/circle-check-big.svg"} />
            <ProjectPic src={"/logos/circle-check-big.svg"} className="row-span-2"/>
            <ProjectPic src={"/logos/circle-check-big.svg"} />
            <ProjectPic src={"/logos/circle-check-big.svg"} />
            
            
            
        </div>
    );
}