import data from "../data.json";
import {  useState } from "react";
import {motion, AnimatePresence} from "framer-motion"


const Images= data.mainPage.companyLogos
    

export default function AboutPage(){

    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 6000); // Change image every 3 seconds


    return(
    <div className="flex flex-col md:flex-row-reverse items-center md:justify-center  w-full h-screen overflow-hidden p-2 space-y-4 md:space-y-0 md:space-x-6   bg-eslBlue bg-opacity-90">
      {/* Text Area */}
      <div dir="rtl" className="bg-eslOrange shadow-lg rounded-xl p-6 md:w-1/2 w-full h-1/2  md:h-4/5 overflow-y-auto  md:ml-4  ">
        <h2  className="text-2xl font-bold mb-4">{data.aboutPage.header}</h2>
        <p className="text-gray-700 leading-relaxed">
          אשל הנדסה הוקמה בשנת 2006 ומנוהלת על ידי שני שותפים בעלי ניסיון רב בענף הבניה : אבשלום בן יעקב וערן גרבר .
          אשל הנדסה הינה חברת ניהול פרויקטים בבניה ותשתיות הפועלת מאז שנת 2006- ונמצאת כיום מבין החברות המובילות בארץ בתחום הניהול והפיקוח.
            החברה מתמחה בליווי הנדסי מקצועי של פרויקטים ומאז הקמתה לקחה חלק בתכנונם והקמתם של פרויקטים רבים ומגוונים בכל התחומים.
            החברה מתמחה בתחומי המגורים, המסחר, התעשייה, מבני הציבור, המשרדים ופיתוח ותשתיות. 
            את אשל הנדסה מנהלים שני השותפים - אבשלום בן יעקב וערן גרבר, מהנדסים אזרחיים במקצועם עם למעלה מחמישים שנות ניסיון מצטבר בהקמת 
            פרויקטים מכל תחומי הבנייה לרבות ניהול ופיקוח, ביצוע ויזמות.  הניסיון רב השנים של השותפים מאפשרים לחברה התמחות והיכרות רחבה ומעמיקה  
            עם ענף הבניה בארץ, נתון זה הביא את אשל הנדסה להיות חברה מובילה בתחומה.  הידע והניסיון של החברה מגובים במערכת אבטחת איכות ובקרה בעלת תקן אבטחת איכות ISO .
            באשל הנדסה יודעים להתאים את אופן הקמת הפרויקט לצורכי הלקוח ויודעים לשים לב לדגשים החשובים ללקוח, אם זה תקציב לחוץ, לוח זמנים מסוים או איכות ביצוע ייחודית.
            כל זה נעשה באמצעות צוות מקצועי ואיכותי הנבחר בקפידה רבה.  בחברה שנים עשר עובדים, שנבחרו בקפידה והם שותפים מלאים להצלחה של אשל הנדסה.  החברה מנוהלת 
            במתכונת של צוותי עבודה קטנים, בראש כל צוות עומד אחד השותפים במשרד, אשר מעורב באופן אישי בכל הפרטים של הפרויקטים בתחום אחריותם. 
        </p>
      </div>

      {/* Image Area */}
      <div className="md:w-1/2 h-1/2 md:h-4/5 w-full flex justify-center">
      <AnimatePresence mode="wait">
        <motion.img
          src={Images[currentImageIndex]}
          alt="slideShow images"
          className="rounded-xl shadow-lg object-cover w-full h-100  "
          key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        />
        </AnimatePresence>
      </div>
    </div>
  );
}