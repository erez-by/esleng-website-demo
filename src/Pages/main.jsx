
import MainPageText from "../components/Home/MainText.jsx";
import CustomerList from "../components/Home/CustumerList.jsx";
import CarouselSlider from "../components/Home/ProjectSlider.jsx";
export default function MainPage() {

    

    return (
        <>
            <video
                className="w-full h-auto"
                src="esl-clip.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls={true}
            />
            <MainPageText />
            <CarouselSlider/>
            <CustomerList/>
        </>
    );
}
