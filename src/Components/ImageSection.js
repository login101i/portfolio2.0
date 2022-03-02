import React from "react";
import avatar from "../img/avatar.png";

function ImageSection() {
	return (
		<div className="ImageSection">
			{/* <div className="img">
					<img src={avatar} alt="myPhoto" />
				</div> */}
			<div className="about-info">
				<h4>
					I am<span> login101i</span>
				</h4>
				{/* <p>
					To be honest the more I write the smaller image is so I try typing as
					long as possible to make it event invisible on this page. But comming
					back to the clue of this page.
				</p> */}
				<p className="about-text">
					Below a little information about me. Below you will find progress bars
					with my skills. Check them out :)
				</p>
				<div className="about-details">
					<div className="left-section">
						<p>Full Name</p>
						<p>Age</p>
						<p>Nationality</p>
						<p>Languages</p>
						<p>Address</p>
					</div>
					<div className="right-section">
						<p>: Maciej Kruszyniak</p>
						<p>: 31</p>
						<p>: Polish</p>
						<p>: Polish, English, Spanish</p>
						<p>: Inowrocław Poland</p>
					</div>
				</div>
				<button className="btn">
					{" "}
					<a href="https://docdro.id/JmicIm5" target="_blank">
						Download CV
					</a>{" "}
				</button>
			</div>
		</div>
	);
}

export default ImageSection;
