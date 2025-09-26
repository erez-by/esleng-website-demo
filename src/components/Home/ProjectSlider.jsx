import {Splide , SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import data from "../../projectsData.json" 



export default function CarouselSlider(){

    const projects = data.projects;

    return(
        <div className='flex justify-center items-center flex-col bg-gradient-to-r from-eslBlue to-eslOrange'>
        <h2 className='mb-2 text-2xl font-bold text-center text-eslBlue'dir='rtl'>פרוייקטים נבחרים</h2>
        <Splide options={{
            type: 'loop',
            perPage: 3,
            padding: 0,
            gap: 0,
            arrows: false,
            pagination: false,
            drag: 'free',
            snap: true,
            autoplay: true,
            interval: 10000,
            pauseOnHover: true,
            breakpoints:{
                640:{
                    perPage: 1,
                    gap:0,
                    padding: 0,
                    width: '80%'
                },

            }

        }}
        >
            {projects.map((project, index) => (
                <SplideSlide key={index} className="items-center justify-center flex flex-col p-2" >
                    <img src={project.src} alt={project.alt} className='rounded-md shadow-sm'/>
                    <p dir='rtl' className='flex position-end'>{project.header}</p>
                </SplideSlide>
            ))}
        </Splide>
        </div>
    )
}