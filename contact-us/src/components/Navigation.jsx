import nav from './../assets/nav.png'

const Navigation = () => {
  return (
    <div className='conatiner'>
      <nav className='logo'>
        <div>
          <img src={nav} alt="nav-logo"></img>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
