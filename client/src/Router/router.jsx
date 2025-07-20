import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/home/Home";
import NewsFeed from "../Pages/News/NewsCarousel";
import NewsDetail from "../Pages/News/NewsDetail";
import Projects from "../Pages/Projects/Projects";
import ProjectDetail from "../Pages/Projects/ProjectDetail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "news",
                element: <NewsFeed />
            },
            {
                path: "news/:id",
                element: <NewsDetail />
            },
            {
                path: "projects",
                element: <Projects />
            },
            {
                path: "projects/:id",
                element: <ProjectDetail />
            }   
        ]
    }
])
export default router