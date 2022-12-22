import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutPage from './AboutPage';

function HomePage() {
	return (
		<>
		<div className="HomePage">
			<h1 className="hero-text">Hi, welcome on my page!</h1>
			<p className="h-sub-text">
				I am React/React Native Developer working with the ReactJS. Pushing forward to gain more experience with React Native, Typescript,
				JavaScript, React Testing Library and NodeJs, MongoDB/Postman .
			</p>
			<div className="icons">
				<a href="https://github.com/login101i" className="icon-holder" target="_blank">
					<FontAwesomeIcon icon={faGithub} className="icon gh" />
				</a>
			</div>
			<h5>I have dealt so far with :</h5>
			<div className="fields">
				<div className="frontend">
					<h5>Frontend :</h5>

					<div className="frontend-fields">
						<div>Single page applications with React JS</div>
						<div>Making good architecture decisions</div>
						<div>Creating app with Expo</div>
						<div>Gained experience with React Native Paper and Material UI library</div>
						<div>Routing with React Navigation</div>
						<div>Data Transfer Between Different Screens with React Navigation</div>
						<div>Using native phone capabilities like Camera and Vibration</div>
						<div>AsyncStorage and Animation</div>
						<div>Creating Hooks and Context structures </div>
						<div>Managing global state with Redux (Actions & Reducers concepts)</div>
						<div>Adding Google Maps API</div>
						<div>Styled-Components and native styling</div>
						<div>Connecting to an external API</div>
						<div>Routing with React Router</div>
						<div>key concepts of the NodeJS, routing with NodeJS</div>
						<div>Stripe Payments integration </div>
						<div>Create reusable React Components</div>
						<div>User Inputs, Forms and Events</div>
						<div>Adding Filter, Pagination, Search</div>
						<div>RESTful APIs</div>
						<div>React Testing Library</div>
						<div>Deploying app to Apple App Store and Google Play Store</div>
					</div>
				</div>
				<div className="backend">
					<h5>Backend :</h5>

					<div className="backend-fields">
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
					</div>
				</div>
			</div>
			<AboutPage/>

		</div>
		</>
	);
}

export default HomePage;
