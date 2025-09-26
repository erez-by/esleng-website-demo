import data from "../../data.json";

export default function MainPageText() {
    return (
        <div dir="rtl" className="text-right m-6 ">
            <h2 className="text-2xl font-bold mb-4 mt-4 text-center">{data.mainPage.MainPageText.phrase}</h2>
            <p className="text-m whitespace-pre-line">{data.mainPage.MainPageText.about}</p>
        </div>
    );
}