import React from 'react';
import Tittle from '../Components/Tittle';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';

function AboutPage() {
	return (
		<div className="AboutPage">
			<Tittle title={'About Me'} span={'About Me'} />
			<ImageSection />
			<Tittle title={'My Skills'} span={'My Skills'} />
			<div className="skillsContainer">
				<SkillsSection skill={'Javascript'} progress={'65%'} width={'65%'} />
				<SkillsSection skill={'React Js'} progress={'60%'} width={'60%'} />
				<SkillsSection skill={'HTML/CSS'} progress={'80%'} width={'80%'} />
				<SkillsSection skill={'React Native'} progress={'45%'} width={'45'} />
				<SkillsSection skill={'React Testing Library'} progress={'40%'} width={'40%'} />
				<SkillsSection skill={'Type Script'} progress={'20%'} width={'20%'} />
				<SkillsSection skill={'Node Js'} progress={'40%'} width={'40%'} />
				<SkillsSection skill={'Express Js'} progress={'45%'} width={'45%'} />
				<SkillsSection skill={'MongoDB/Postman'} progress={'49%'} width={'49%'} />
				<SkillsSection skill={'Chrome Dev Tools'} progress={'45%'} width={'45%'} />
				<SkillsSection skill={'Next JS'} progress={'22%'} width={'22%'} />
			</div>
		</div>
	);
}

export default AboutPage;
