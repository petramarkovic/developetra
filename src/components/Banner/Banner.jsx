import React from 'react'

export const Banner = () => {
  return (
	<section className='banner'>
		<div className="banner__col bg-noise">
			<div className="banner__content">
				<h1 className="h1">Stripping your <span>business </span><span>NAKD</span></h1>
				<p className="text banner__text">Crafting sleek, minimalist web experiences that reveal the true essence of every project. Specializing in frontend development to distill websites to their essential, stylish form.</p>
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

