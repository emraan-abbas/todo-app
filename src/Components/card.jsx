import React from 'react';

function Card() {

  return (
		<div className='container my-3'>
			<div className='row'>
				<div className='col-sm-6 mb-3 mb-sm-0'>
					<div className='card'>
						<div className='card-body'>
							<h5 className='card-title'>Special title treatment</h5>
							<p className='card-text'>
								With supporting text below as a natural lead-in to additional content.
							</p>
							<button type='button' className='btn btn-primary mx-3'>
								Add
							</button>
							<button type='button' className='btn btn-primary mx-3'>
								Edit
							</button>
							<button type='button' className='btn btn-danger mx-3'>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Card;