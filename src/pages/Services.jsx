import React from 'react';
import { LargeCard } from "../components/LargeCard";
import { Contact } from '../components/Contact';

export const Services = () => {
  return (
    <section className='services'>
        <h1 className="h1 services__title">Services we offer</h1>
        <LargeCard accent='shopify' color='peach' title='Shopify theme customization' image="shopify-themes.jpg" alt="Shopify Cover Image" href="/services/shopify-themes" desc="Our services encompass a wide range of Shopify-related tasks, including meticulous theme customizations to ensure your online stores perfectly align with your brand identities. We excel in seamlessly integrating custom code solutions, providing tailored and unique user experiences for your customers. Whether it's developing custom sections to enhance the functionality of your stores or crafting snippets to optimize performance, we are dedicated to delivering top-notch solutions that elevate the overall design and functionality of your Shopify platforms. With a keen eye for detail and a commitment to staying ahead of the latest industry trends, we are ready to transform your e-commerce presences into visually stunning and user-friendly destinations. Let's collaborate to bring your Shopify visions to life!"/>
        <LargeCard accent='frontend' color='rose' title='Front-end development services' image="frontend-development.jpg" alt="Frontend development Cover Image" href="/services/frontend" desc="We offer a comprehensive suite of services that cater to the dynamic world of web design and user interfaces. Proficient in HTML, CSS, SCSS, and Tailwind, we meticulously craft visually engaging and responsive websites. Our expertise extends to the dynamic realm of JavaScript, jQuery, Gulp, and Webpack, ensuring seamless interactivity and optimal performance. We specialize in React for building robust, component-based user interfaces, and we are adept at integrating Handlebars for efficient templating. Our design proficiency includes working with Figma, Adobe XD, and Photoshop to bring your creative visions to life. Whether you require a custom-coded solution or a WordPress-based website, we are well-versed in the tools and technologies necessary to deliver a polished and user-friendly frontend. Let's collaborate to transform your digital ideas into captivating and immersive online "/>
        <LargeCard accent='shopify' color='lavender' title='Shopify store set-up and maintainenace' image="shopify-cover.jpg" alt="Shopify Cover Image" href="/services/shopify-maintainance" desc="Elevate your Shopify store to new heights with our comprehensive maintenance services. As a dedicated Shopify specialists, we provide ongoing support and optimization to ensure your online storefront operates seamlessly. From routine theme updates and customization tweaks to troubleshooting and resolving technical issues, we are committed to keeping your Shopify store in peak condition. With a keen eye for detail, I conduct regular performance audits to identify areas for improvement, implementing the latest updates and security measures to keep your store at the forefront of e-commerce excellence. Whether it's integrating new features, optimizing for speed, or ensuring compatibility across devices, we are here to provide the expertise needed to maintain and enhance your Shopify store's functionality and user experience. Partner with us for reliable and proactive Shopify store maintenance that keeps your online business thriving."/>
        <LargeCard accent='consultation' color='mint-green' title='Advice or consultations' image="consultations.jpg" alt="Consultations Cover Image" href="/services/consultations" desc="Unlock the full potential of your digital presence with personalized consultations and expert advice tailored to frontend development and Shopify excellence. We offer in-depth guidance to navigate the complexities of frontend technologies, including HTML, CSS, JavaScript, and cutting-edge frameworks like React. Whether you're seeking to enhance your website's user interface, optimize performance, or explore the latest design trends, our consultations provide valuable insights and actionable strategies. Additionally, for Shopify enthusiasts, we offer specialized advice on store optimization, theme customization, and e-commerce best practices. Whether you're a business owner, developer, or designer, our goal is to empower you with the knowledge and strategic direction needed to make informed decisions and achieve your digital objectives. Let's embark on a collaborative journey where your questions are answered, and your vision for frontend excellence or Shopify success becomes a reality. Schedule a consultation today and take the first step toward a more impactful online presence."/>
        <Contact />
    </section>
  )
}
