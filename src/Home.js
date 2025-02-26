import React from "react";
import "./CSS/style.css";
// import { WelcomeTypewriter } from "./WelcomeTypewriter.tsx";

function Home() {
    return (
        <section id="home">
            <div className="Home">
                {/* <WelcomeTypewriter /> */}
                <div className="Welcome-head">W E L C O M E</div>
                <div className="Welcome-text">
                    My name is Jenny and I'm a full-stack developer based in New
                    York City.
                </div>
            </div>
        </section>
    );
}

export default Home;
