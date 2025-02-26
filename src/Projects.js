import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./CSS/style.css";

const projectList = [
    {
        title: "BeautyBots",
        description:
            "A health and beauty e-commerce site, with full range of guest/auth user functionalities",
        // image: "https://www.eisenberg.com/upload/images/eisenberg/11/952_BANNER-CATEGORIE-BESOIN-1170X500PX-LG_ENG.jpeg",
        github: "https://github.com/BeautyBots/BeautyBots-ECommerce-Website?tab=readme-ov-file",
    },
    // {
    //     title: "Spineify",
    //     description:
    //         "Ergonomic posture tracking desktop application with data visualization and game component",
    //     // image: "/SpineifySS.png",
    //     github: "https://github.com/Spineify/Spineify-capstone",
    // },
    // {
    //   title: "Project Clean",
    //   description:
    //     "Website for small cleaning business",
    //   // image: "/SpineifySS.png",
    //   github: "https://github.com/Ace-cleaning/project-clean"
    // }
];

const Projects = () => {
    return (
        <section id="portfolio">
            <h2>Portfolio</h2>
            <div className="Projects">
                {projectList.map((project) => (
                    <Card className="Projects-card" key={project.title}>
                        {/* <Card.Img variant="top" src={project.image} /> */}
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text>{project.description}</Card.Text>
                            <Button
                                variant="dark"
                                href={project.github}
                                target="_blank"
                            >
                                GitHub Repo
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
                <Card className="Projects-card">
                    <Card.Body>
                        <Card.Title>Spineify</Card.Title>
                        <Card.Text>
                            Ergonomic posture tracking desktop application with
                            data visualization and game component{" "}
                        </Card.Text>
                        <Button
                            variant="dark"
                            href="https://github.com/Spineify/Spineify-capstone"
                            target="_blank"
                        >
                            GitHub Repo
                        </Button>
                        <Button
                            className="website-btn"
                            variant="dark"
                            href="https://www.youtube.com/watch?v=e4uc2St0ea0&feature=youtu.be"
                            target="_blank"
                        >
                            Demo
                        </Button>
                    </Card.Body>
                </Card>
                <Card className="Projects-card">
                    <Card.Body>
                        <Card.Title>Project Clean</Card.Title>
                        <Card.Text>
                            Website for cleaning and office maintainence
                            business{" "}
                        </Card.Text>
                        <Button
                            variant="dark"
                            href="https://github.com/Ace-cleaning/project-clean"
                            target="_blank"
                        >
                            GitHub Repo
                        </Button>
                        <Button
                            className="website-btn"
                            variant="dark"
                            href="https://project-clean.vercel.app/"
                            target="_blank"
                        >
                            Website
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        </section>
    );
};

export default Projects;
