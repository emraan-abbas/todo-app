import {useEffect, useState} from 'react';
import Card from './card';

function Dashboard({cards}) {


	return (
		<div className='container my-3'>
			{cards.map(card => (
				<Card key={card.id} data={card} />
			))}
		</div>
	);
}

export default Dashboard;