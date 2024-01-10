import React from 'react'

export const Banner = () => {
  return (
	<section className='banner'>
		<div className="banner__col bg-noise">
			<div className="banner__content">
				<h1 className="h1">Stripping your <span>Shopify</span> stores <span>NAKD</span></h1>
				<p className="text banner__text">Engage in a unique process that involves simplifying, refining, and enhancing Shopify stores to their essential, stylish, or naked form. This approach suggests a focus on clarity, minimalism, and uncovering the true essence of each store.</p>
			</div>
		</div>
		<div className="banner__col">
			<span className='banner__span'>&#123;% if %&#125;</span>
			<span className='banner__span'>&lt;&gt;</span>
			<span className='banner__span'>new Object()</span>
			<span className='banner__span'>background: #fff;</span>
			<span className='banner__span'>useState(true)</span>
		</div>
		<span className='banner__text-scroll'>Scroll to discover</span>
	</section>
  )
}

