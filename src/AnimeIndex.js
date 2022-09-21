import AnimeCreate from './AnimeCreate'
import AnimeTable from './AnimeTable';
import { useEffect, useState } from 'react';
const AnimeIndex = () => {
    const [animes, setAnimes] = useState([
        { title: 'One Piece', genre: 'Adventure', status: 'Currently Airing', studio: 'Toei Animation', id: 1 },
        { title: 'Naruto', genre: 'Action', status: 'Completed', studio: 'Pierrot', id: 2 },
        { title: 'Black Clover', genre: 'Action', status: 'Currently Airing', studio: 'Pierrot', id: 3 },
    ]);

    const handleDelete = (id) => {
        const newAnimes = animes.filter(anime => anime.id !== id);
        setAnimes(newAnimes);
    }

    return (
        <div class="m-5">
        <div class="row">
            <div class="col-md-3">
                <AnimeCreate />
            </div>
            <div class="col-md-9">
                <AnimeTable animes={animes} handleDelete={handleDelete} />
            </div>
        </div>
    </div>

    );
}

export default AnimeIndex;