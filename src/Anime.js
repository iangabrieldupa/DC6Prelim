import { useState } from "react";

const Anime = () => {

    const [animes, setAnimes] = useState([
        { title: 'One Piece', genre: 'Adventure', status: 'Currently Airing', studio: 'Toei Animation', id: 1 },
        { title: 'Naruto', genre: 'Action', status: 'Completed', studio: 'Pierrot', id: 2 },
        { title: 'Black Clover', genre: 'Action', status: 'Currently Airing', studio: 'Pierrot', id: 3 },
    ]);

    return ( 
        <div className="animeTab">
            {animes.map((anime) => (
                <div className="anime-preview" key={anime.id}> 
                    <h2>{ anime.title }</h2>
                </div>
            ))}
        </div>
     );
}
 
export default Anime;