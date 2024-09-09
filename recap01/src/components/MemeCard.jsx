import React from 'react'

export default function MemeCard(props) {
	const {meme} = props
	return (
		<div className="card bg-base-100 w-60 shadow-xl relative">
		<figure>
			<img
				src={meme?.url}
				alt={meme?.name} />
		</figure>
		<div className="card-body">
			<h2 className="card-title">{meme?.name}</h2>
			
			<div className="card-actions justify-end absolute bottom-2 right-2">
				<button className="btn btn-primary btn-xs btn-outline">Detail</button>
			</div>
		</div>
	</div>
	)
}
