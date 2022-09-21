const AnimeCreate = () => {
    return (

        <form>
                <div className="card">
                    <div className="card-header">
                        <h2>Anime Entry</h2>
                    </div>
                    <div className="card-body">
                        <div className="mt-4">
                            <label>Title</label>
                            <input className="form-control" placeholder="Title" type="text" required />
                        </div>
                        <div className="mt-4">
                            <label>Genre</label>
                            <input className="form-control" placeholder="Genre" type="text" required />
                        </div>
                        <div className="mt-4">
                            <label>Status</label>
                            <input className="form-control" placeholder="Status" type="text" required />
                        </div>
                        <div className="mt-4">
                            <label>Studio</label>
                            <input className="form-control" placeholder="Studio" type="text" required />
                        </div>
                        <div className="mt-4">
                            <button id="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
    );
}

export default AnimeCreate;