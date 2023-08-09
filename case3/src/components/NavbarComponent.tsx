// import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

let link: string = 'https://www.pinclipart.com/picdir/big/197-1972734_corn-dog-with-mustard-shirt-mustard-clipart.png'

function NavbarComponent() {

return <>

   <Navbar bg="light" data-bs-theme="light" className="mt-1">
      <div className="nav-content">
         <h2 className="nav-logo"><img className="logo me-2" src={link} alt={link}/><div className='text-logo'>Delight</div></h2>
      </div>
   </Navbar>
   </>
}

export default NavbarComponent