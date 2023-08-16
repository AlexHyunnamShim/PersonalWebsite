import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./abnormal.png"
								alt="abnormal"
								className="work-image"
							/>
							<div className="work-title">Abnormal Security</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">Sep 2022 - Dec 2022</div>
						</div>

						<div className="work">
							<img
								src="./arctic_wolf.jpg"
								alt="arctic_wolf"
								className="work-image"
							/>
							<div className="work-title">Arctic Wolf Networks</div>
							<div className="work-subtitle">
								Machine Learning Developer
							</div>
							<div className="work-duration">Jan 2022 - Apr 2022</div>
						</div>
						<div className="work">
							<img
								src="./nrc.png"
								alt="nrc"
								className="work-image"
							/>
							<div className="work-title">National Research Council</div>
							<div className="work-subtitle">
								Computer Vision Engineer
							</div>
							<div className="work-duration">Jan 2021 - Apr 2021</div>
						</div>
						<div className="work">
							<img
								src="./opentext.png"
								alt="opentext"
								className="work-image"
							/>
							<div className="work-title">Opentext</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">Sep 2019 - Dec 2019</div>
						</div>
						<div className="work">
							<img
								src="./rediron.png"
								alt="rediron"
								className="work-image"
							/>
							<div className="work-title">RedIron Technologies</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">Jan 2019 - Apr 2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
