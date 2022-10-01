import React from "react";
import { Link } from "react-router-dom";
import "./landing-page.css";
import Wave from "./Wave";

function LandingPage() {
	return (
		<React.Fragment>
			<Wave />
			<section id="wrapper">
				<h1 id="name-h1">Cameron Hunt</h1>
				<h2 id="what-am-i-h2">Student / Developer</h2>
				<div id="buttons">
					<Link to={"/about-me"}>
						<button id="about-me-button" className="btn btn-primary btn-lg">
							ABOUT ME
						</button>
					</Link>
					<Link to={"/projects"}>
						<button id="project-button" className="btn btn-primary btn-lg">
							PROJECTS
						</button>
					</Link>
					<div>
						<a
							href="CameronHuntCV2022.pdf"
							id="cv-button"
							className="btn btn-primary btn-lg"
							download
							target="_self">
							DOWNLOAD CV
						</a>
					</div>
				</div>
			</section>
			<div className="landing-page-circle-1"></div>
			<div className="landing-page-circle-2"></div>
			<div className="landing-page-circle-3"></div>
		</React.Fragment>
	);
}

export default LandingPage;
