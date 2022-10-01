import React from "react";
import "./projects.css";
import f2 from "./f2-program.png";
import weather from "./weather-app.png";
import cyoag from "./vikingr-adventure.png";
import github from "./github-logo-white.png";

function Projects() {
	return (
		<React.Fragment>
			<section id="projects-page">
				<div id="header">
					<h1 id="projects-header">Projects</h1>
				</div>
				<div id="projects">
					<a href="https://github.com/CamyH/F2-League-Leaderboard" target="new">
						<img
							src={f2}
							id="project-1"
							className="projects img-fluid"
							alt="f2 program"
						/>
					</a>
					<a href="https://github.com/CamyH/WeatherApp" target="new">
						<img
							src={weather}
							id="project-2"
							className="projects img-fluid"
							alt="weather app"
						/>
					</a>
					<a
						href="https://github.com/CamyH/A-Vikingr-Adventure-CYOAG"
						target="new">
						<img
							src={cyoag}
							id="project-3"
							className="projects img-fluid"
							alt="adventure game"
						/>
					</a>
				</div>
				<div id="github-logo-container">
					<a href="https://github.com/CamyH" target="new">
						<img src={github} className="logo img fluid" alt="github icon" />
					</a>
				</div>
			</section>
		</React.Fragment>
	);
}

export default Projects;
