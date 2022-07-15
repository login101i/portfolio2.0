import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomePage() {
	return (
		<div className="HomePage">
			<header className="hero">
				<h1 className="hero-text">
					Hi, I am React Native Developer
					<h3> (at least I would like to be by the end of the year )</h3>
				</h1>
				<p className="h-sub-text">
					I am React Native Developer working with the ReactJS. Pushing forward
					to gain more experience with React Native, NodeJs, MongoDB/Postman
					JavaScript and React Testing Library.
				</p>

				<p className="red">Let's make a deal!</p>
				
				<div className="icons">
					<a
						href="https://github.com/login101i"
						className="icon-holder"
						target="_blank"
					>
						<FontAwesomeIcon icon={faGithub} className="icon gh" />
					</a>
				</div>
				<div className="packages">
				
					<h5>What I learned so far :</h5>
				</div>

				<div className="packages">
					<div className="frontend">
						<h5>Frontend :</h5>

						<div className="frontend-packages">
							<div>Making good architecture decisions</div>
							<div>Creating app with Expo</div>
							<div>React Native Paper</div>
							<div>Material UI library</div>

							<div>Routing with React Navigation</div>

							<div>
								Data Transfer Between Different Screens with React Navigation
							</div>
							<div>
								Using native phone capabilities like Camera and Vibration
							</div>
							<div> AsyncStorage and Animation</div>

							<div>Creating Hooks and Context structures </div>

							<div>
								Managing global state with Redux (Actions & Reducers concepts)
							</div>

							<div>Adding Google Maps API</div>
							<div>Styled-Components and native styling</div>
							<div>Connecting to an external API</div>
							<div>Routing with React Router</div>

							<div>key concepts of the NodeJS, routing with NodeJS</div>

							<div>Stripe Payments integration </div>

							<div>Single page applications with React JS</div>
							<div>Create reusable React Components</div>

							<div>User Inputs, Forms and Events</div>
							<div>Adding Filter, Pagination, Search</div>

							<div>RESTful APIs</div>
							<div>React Testing Library</div>
							<div>Deploying app to Apple App Store and Google Play Store</div>

							{/* <p>antd</p>
							<p>@ant-design/icons</p>
							<p>redux-thunk</p>
							<p>react-helmet</p>
							<p>react-redux</p>
							<p>emailjs-com</p>
							<p>rc-slider</p>
							<p>react-alert</p>
							<p>react-alert-template-basic</p>
							<p>react-bootstrap</p>
							<p>react-datepicker</p>
							<p>react-toastify</p>
							<p>react-js-pagination</p>
							<p>react-js-popup</p>
							<p>@ant-design/icons</p>
							<p>node-sass</p>
							<p>@fortawesome/fontawesome-svg-core</p>
							<p>@fortawesome/free-brands-svg-icons</p>
							<p>@fortawesome/free-solid-svg-icons</p>
							<p>react-star-ratings</p>
							<p>react-modal-image</p>
							<p>react-image-file-resizer</p>
							<p>next-page-transitions</p>
							<p>emailjs-com</p> */}
						</div>
					</div>
					<div className="backend">
						<h5>Backend :</h5>

						<div className="backend-packages">
							<div>Express Framework</div>

							<div>Object Data Modeling Library for MongoDB, Mongoose JS</div>

							<div>User Roles & Permissions</div>
							<div>User Routes</div>

							<div>Authentication Authorization With JWT & Cookies</div>
							<div>Emailing Password Reset Tokens</div>
							<div>Password & Token Hashing</div>
							<div>Backend Error Handling</div>

							<div>Api documentation with Postman or Swagger</div>
							<div>Handle Checkout & Payments</div>
							<div>Firebase Auth Check (Server side)</div>
							<div>Multiple Image Uploads with Client Side Resize</div>
							<div>Postman Client</div>

							<div>Advanced Features of MongooseJS</div>
							<div>Routing & Controller Methods</div>
							<div>Mongoose ODM</div>
							<div>Logic behind the MongoDB data storage</div>
							<div>CRUD operations</div>
							<div>Advanced Query (Pagination, filter, etc)</div>
							<div>Models & Relationships</div>
							<div>Set up authentication and user accounts using Firebase</div>
							<div>Custom Error Handling</div>

							{/* <p>express</p>
							<p>dotenv</p>
							<p>mongoose</p>
							<p>morgan</p>
							<p>concurrently</p>
							<p>nodemon</p>
							<p>bcryptjs</p>
							<p>body-parser</p>
							<p>cloudinary</p>
							<p>cooki-parser</p>
							<p>express-fileupload</p>
							<p>jsonwebtoken</p>
							<p>nodemailer</p>
							<p>stripe</p>
							<p>validator</p>
							<p>firebase-admin</p>
							<p>slugify</p> */}
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default HomePage;
