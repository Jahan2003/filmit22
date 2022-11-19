
const Navbar = () =>{
       return(
    <header>
       <div class="nav container">
        <a href="index.html" class="logo">
            Film<span>It</span>
        </a>
        <div class="login">
            <a href="signin.html" class="iclog">
                <i class='bx bxs-user-circle'></i>
                <span class="login-title">Logout</span>
            </a>
            
        </div>
        <div class="search-box">
            <input type="search" name="" id="search-input" placeholder="search-movie"></input>
            <i class='bx bx-search-alt-2'></i>
        </div>
        <div class="navbar">
            <a href="#home" class="nav-link nav-active">
                <i class='bx bx-home' ></i>
                <span class="nav-link-title">Home</span>
            </a>
            <a href="#popular" class="nav-link">
                <i class='bx bxs-hot'></i>
                <span class="nav-link-title">Trending</span>
            </a>
            <a href="#home" class="nav-link">
                <i class='bx bx-movie-play'></i>
                <span class="nav-link-title">Movies</span>
            </a>
            <a href="#srs" class="nav-link">
                <i class='bx bx-tv'></i>
                <span class="nav-link-title">Series</span>
            </a>
            <a href="#home" class="nav-link">
                <i class='bx bx-heart' ></i>
                <span class="nav-link-title">Favourite</span>
            </a>
        </div>

    </div> 
    
    
    </header>
   );
}
export default Navbar;