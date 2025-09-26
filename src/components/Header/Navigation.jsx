import { NavLink } from "react-router-dom";


export default function Navigation() {
    return (
        <div dir="rtl" className="flex flex-row justify-evenly p-4 text-white text-lg space-x-4">
            <NavLink to="/">בית</NavLink>
            <NavLink to="/about">אודותינו</NavLink>
            <NavLink to="/projects">פרוייקטים</NavLink>
        </div>
    );
}