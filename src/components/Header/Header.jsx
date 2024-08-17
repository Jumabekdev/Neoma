import logo from "../image/logo.png"
import bottomLine from "../image/Vector 50.png"
import "./Header.css"

function Header() {
  return (
    <div className='header'>
      <div className="logo container">
        <img src={logo} alt="" />
        <div className='registr'>
          <div className='translit'>
          <ul><li>ENG</li></ul>
          <img src={bottomLine} alt="" />
          </div>
          <button className='registr-btn'>Registration</button>
          <button className='sing-in-btn'>Sing in</button>
        </div>
      </div>
      <div className='nav-teg'>
      <div className="header-nav container">
      <a href="#">About Us</a>
      <a href="#">How it works</a>
      <a href="#">Rules</a>
      <a href="#">Prices</a>
      <a href="#">Affiliate program</a>
      <a href="#">Education</a>
      <a href="#">FAQ</a>
      <a href="#">Support</a>
      </div>
      </div>
    </div>
  )
}

export default Header
