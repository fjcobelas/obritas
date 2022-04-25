import './NavBar.css';
import CartWidget from '../CartWidget';


function NavBar() {
    return (
        <header>
        <div>
            
            <nav className='nav'>
                <a href="#">Home</a>
                <a href="#">Quien Soy</a>
                <a href="#">Obras</a>
                <a href="#">Contacto</a>  
                <CartWidget className='carro'/>             
            </nav>
                             
        </div>
        </header>
    );
}

export default NavBar;