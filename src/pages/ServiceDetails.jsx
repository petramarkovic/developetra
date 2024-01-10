import React from 'react';
import { useLocation } from "react-router-dom";
import { Service } from '../components/Service/Service';

export const ServiceDetails = () => {
	const { state } = useLocation();

	return (
		<>
			<Service {...state}/>
		</>
	)
}
