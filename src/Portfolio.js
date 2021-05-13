import Project from "./Project";

const Portfolio = () => {

    const projectLinks = [
        {
            image: "/images/script-shopping-list-manager-4.png",
            text: "Task 4", 
            url: "https://codepen.io/DipoDre/pen/QWdGaLv?editors=1011"
        },
        {
            image: "/images/multi-page-website-1.png",
            text: "Task 1", 
            url: "https://dare47-week1-project.netlify.app/"
        },
        {
            image: "/images/function-shopping-list-manager-5.png",
            text: "Task 5", 
            url: "https://codepen.io/DipoDre/pen/MWpazXb?editors=1011"
        },
        {
            image: "/images/responsive-multipage-blog-2a.png",
            text: "Task 2a", 
            url: "https://dare47-week2a-project.netlify.app/"
        },
        {
            image: "/images/responsive-google-landing-2b.png",
            text: "Task 2b", 
            url: "https://dare47-week2b-project.netlify.app/"
        },
        {
            image: "/images/multipage-portfolio-web-3.png",
            text: "Task 3", 
            url: "https://dare47-week3-project.netlify.app/"
        },
        {
            image: "/images/todo-list-web-7.png",
            text: "Task 7", 
            url: "https://dare47-week7-project.netlify.app/"
        }
    ];

    return ( 
        <div className="container-fluid py-4 px-4">

            <h1 className="text-center text-orange-a d-none d-lg-block page-header">Portfolio</h1>
            
            <div className="row mobile mt-5">
                { projectLinks.map((task, index) => (
                    <Project key= {index} image= {task.image} text= {task.text} url= {task.url} />
                )) }
            </div>

        </div>
    );
}

export default Portfolio;