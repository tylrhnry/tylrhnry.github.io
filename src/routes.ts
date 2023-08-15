import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import {FC} from "react";

interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: "home-route",
        title: "Home",
        path: "/home",
        enabled: true,
        component: Home
    },
    {
        key: "experience-route",
        title: "Experience",
        path: "/experience",
        enabled: true,
        component: Experience
    },
    {
        key: "education-route",
        title: "Education",
        path: "/education",
        enabled: true,
        component: Education
    },
    {
        key: "contact-route",
        title: "Contact",
        path: "/contact",
        enabled: true,
        component: Contact
    },
]



