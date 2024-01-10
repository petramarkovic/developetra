import React from 'react'

export const Service = ({ title, desc }) => {
  return (
		<section className='service'>
			<h1 className="h1 service__title">{title}</h1>
			<div className="service__content">
				<p className="service__desc">{desc}</p>
			</div>
		</section>
	)
}

