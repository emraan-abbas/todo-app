import Card from './card';

function Dashboard({cards, deleteFn}) {
	return (
		<div className='container my-3'>
			{cards.map(card => (
				<Card key={card.id} data={card} deleteFn={deleteFn} />
			))}
		</div>
	);
}

export default Dashboard;