import React from 'react';
import Wrap from '../ui/Wrap';

const LargeCard = ({ color }) => {
	return (
		<div className={`large-card`}>
			<Wrap>
				<div className={`large-card__content bg-${color}`}>
					<div className="large-card__col"></div>
					<div className="large-card__col"></div>
				</div>
			</Wrap>
		</div>
	)
}

export default LargeCard
