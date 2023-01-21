import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Link } from 'react-router-dom';
import News from '../pages/news';
const Navbar = () =>{
       return(
    <header>

       <div class="nav container">
        
        <a href="" class="logo">
        <Link to="/movie">
        Film<span>It</span>
        </Link>
            
        </a>
        <div class="login">
        <Link to="/signin">
            <a href="signin.html" class="iclog">
                <AccountCircleIcon fontSize="medium"/>
                <i class='bx bxs-user-circle'></i>
                <span class="login-title">Logout</span>
                
                
             
            </a>
            </Link>
            
        </div>
        <Link to={'/searchp'}>
        <div class="search-bo">
            <IconButton aria-label="search">
          <SearchIcon fontSize="medium"/>
        </IconButton>
            <span id="search">Search</span>
            <i class='bx bx-search-alt-2'></i>
        </div>
        </Link>
        

            
        

    </div> 
    
    
    </header>
   );
}
export default Navbar;