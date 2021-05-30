import React from 'react'

function AnimeCard({anime}) {
	return (
		<article className="anime-card">
			<a 
				href={anime.url} 
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img 
						src={anime.image_url} 
						alt="Anime Image" />
				</figure>
				<h3>{ anime.title }</h3>
                <h4>Score - { anime.score }</h4>
                <h5>Start Date - { new Date(anime.start_date).toDateString() }</h5>
                <h6>Episodes - { anime.episodes }</h6>
			</a>
		</article>
	)
}

export default AnimeCard