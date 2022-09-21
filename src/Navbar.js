const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <img src="/logo.jpg" className="App-logo" alt="logo" />
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto bg-light">
                <li class="nav-item">
                    <a class="nav-link" href="/home">Home</a>
                </li>
                <span></span>
                <li class="nav-item">
                    <a class="nav-link" href="/anime">Anime</a>
                </li>
                <span></span>
                <li class="nav-item">
                    <a class="nav-link" href="about">About Us</a>
                </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;