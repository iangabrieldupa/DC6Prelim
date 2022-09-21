const AnimesTable = ({animes, handleDelete}) => {

    return (
        <div className="anime-list">
            <h2>List of animes</h2>
            <table className="table table-striped border border-light mt-5">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Status</th>
                        <th>Studio</th>
                    </tr>
                </thead>
                <tbody>
                    {animes.map((anime) =>
                        <tr key={anime.id}>
                            <td>{anime.title}</td>
                            <td>{anime.genre}</td>
                            <td>{anime.status}</td>
                            <td>{anime.studio}</td>
                            <td><a className="btn" onClick={() => handleDelete(anime.id)} ><i class="fa fa-times-circle" aria-hidden="true"></i></a></td>
                        </tr>
                        )}
                </tbody>
            </table>
        </div>
    );
}

export default AnimesTable;