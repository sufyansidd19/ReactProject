const Navbar=()=>{
    return (
        <nav className="container">
        <div className='logo'>
          <img className='imgg' src="images/SHOES.avif" alt="" />
        </div>
        <ul>
          <li href="#">Home</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button>Login</button>
      </nav>
    )
}
export default Navbar;