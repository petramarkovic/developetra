import React from 'react';
import Wrap from '../components/ui/Wrap';
import { Accordion } from '../components/Accordion';

export const Projects = () => {
  return (
    <section className="projects">
        <h1 className="h1 projects__title">Discover some of our recent projects</h1>
        <Wrap>
            <div className="projects__content">
                <Accordion title="Happy Hour Cocktail Catering" service="Frontend Development" num="1" link="https://www.koktelketering.com/" desc="Design & development of a cocktail catering website. Created with React." img="koktel-ketering.jpeg" alt="Cocktail Catering Happy Hour Web"/>
                <Accordion title="Benjamin Babadi" service="Shopify Theme Customization" num="2" link="https://benjaminbabadi.com/" desc="Customization of Shopfy Dawn theme, custom CSS and javascript for each template, creation of custom sections and modifications of existing ones." img="benjamin-babadi.jpg" alt="Benjamin Bababdi Webshop"/>
                <Accordion title="Landing Page" service="Frontend Development" num="4" link="https://petramarkovic.github.io/landing-page/dist/index.html" desc="Example of a landing page created with HTML, SCSS and javascript." img="landing.jpg" alt="Landing page Web"/>
                <Accordion title="Emu Joy" service="Shopify Maintenance & customization" num="5" link="https://emujoy.com/" desc="Maintainance and customizations of existing webshop." img="emu-joy.jpg" alt="Emu Joy Webshop"/>
                <Accordion title="Touch Skin Care" service="Shopify Maintenance & customization" num="6" link="https://www.mytouchskincare.com/" desc="Maintainance and customizations of existing webshop." img="touch-skin-care.jpg" alt="Touch Skin Care Web"/>
                <Accordion title="News App" service="Frontend Development" num="7" link="https://github.com/petramarkovic/news" desc="Example of a React News app. Created with React framework and typescript using News API." img="news-app.png" alt="News App"/>
            </div>
        </Wrap>
    </section>
  )
}
