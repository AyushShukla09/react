import brand_logo from '../images/brand_logo.png'


export default function Navigation() {
  return (
    <nav>
      <div className="logo">
        <img src={brand_logo} alt="brand-logo" />
      </div>
      <div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
      </div>
      <button>Login</button>
    </nav>
  );
}
