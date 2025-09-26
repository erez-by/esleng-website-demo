import LogoLoop from "./LogoLoop.js";
import data from "../../data.json";

const CompanysLogos = data.mainPage.companyLogos.map((logoPath) => ({
  src: logoPath,
  alt: "Company Logo",
}));

export default function CustomerList() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-8 " dir="rtl">
        הלקוחות שלנו
      </h1>
      <div
        style={{ height: "200px", position: "relative", overflow: "hidden" }}
      >
        <LogoLoop
          logos={CompanysLogos}
          speed={40}
          direction="left"
          logoHeight={60}
          gap={40}
          pauseOnHover
          scaleOnHover
          //fadeOut
          fadeOutColor="black"
          ariaLabel="Technology partners"
          className="my-8"
        />
      </div>
    </>
  );
}
