import React from 'react';
import { LargeCard } from "../components/LargeCard";

export const Services = () => {
  return (
    <section className='services'>
        <h1 className="h1 services__title">Services we offer</h1>
        <LargeCard accent='shopify' color='peach' title='Shopify theme customization' image="shopify-themes.jpg" alt="Shopify Cover Image"/>
        <LargeCard accent='frontend' color='rose' title='Front-end development services' image="frontend-development.jpg" alt="Frontend development Cover Image"/>
        <LargeCard accent='shopify' color='lavender' title='Shopify store set-up and maintainenace' image="shopify-cover.jpg" alt="Shopify Cover Image"/>
        <LargeCard accent='consultation' color='mint-green' title='Advice or consultations' image="consultations.jpg" alt="Consultations Cover Image"/>
    </section>
  )
}
