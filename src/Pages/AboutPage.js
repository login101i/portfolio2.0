import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'55%'} width={'55%'} />
                <SkillsSection skill={'React Js'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Node Js'} progress={'40%'} width={'40%'} />
                {/* <SkillsSection skill={'Lua'} progress={'40%'} width={'40%'} /> */}
                {/* <SkillsSection skill={'Java'} progress={'80%'} width={'80%'} /> */}
                <SkillsSection skill={'ExpressJs'} progress={'45%'} width={'45%'} />
                <SkillsSection skill={'HTML/CSS'} progress={'76%'} width={'76%'} />
                {/* <SkillsSection skill={'Typescript'} progress={'3%'} width={'3%'} /> */}
                <SkillsSection skill={'MongoDB/Postman'} progress={'59%'} width={'59%'} />

                <SkillsSection skill={'PHP/Wordpress'} progress={'5%'} width={'5%'} />


            </div>

            {/* <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={gamedev} title={'Game Development'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />

                
            </div> */}

        </div>
    )
}

export default AboutPage;
