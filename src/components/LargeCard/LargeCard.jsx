import React from 'react';
import Wrap from '../ui/Wrap';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';

export const LargeCard = ({ color, title, accent, image, alt }) => {
	return (
		<section className={`large-card`}>
			<Wrap>
				<div className={`large-card__content bg-${color}`}>
					<div className="large-card__col bg-noise">
						<span className="tag">{ accent }</span>
						<h2 className="h3 large-card__title">{ title }</h2>
						<Link className='btn' to="">Explore</Link>
					</div>
					<div className="large-card__col">
						<img src={image} alt={alt} className='large-card__img' />
					</div>
				</div>
			</Wrap>
		</section>
	)
}

