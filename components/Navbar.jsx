import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from './'
import { useStateContext } from "../context/StateContext";
import NextImage from 'next/image'
import logo from '../image/eco-logo3.png'

const Navbar = () => {
	const {showCart, setShowCart, totalQuantities} = useStateContext()
  return (
		<div className="navbar-container">
			<Link href="/">
			<p className="logo">
				<span className="LOGO">LISANA STORE</span>
				<NextImage className="logo__home" src={logo} alt='logohome'/>
			</p>
			</Link>

			
			
			
			

      <button type="button" className="cart-icon" onClick={()=>setShowCart(true)}>
        <AiOutlineShopping />
				<span className="cart-item-qty">{totalQuantities}</span>
			</button>


			
			{showCart && <Cart />}
    </div>
  );
};

export default Navbar;
