import setca from "../image/Group 1000005952.png"
import Group01 from "../image/Group 2087326316.png"
import "./Meain.css"

function Looking() {
  return (
    <div className='looking container'>
        <img className='setca' src={setca} alt="" />
      <div className="looking-text">
        <h1>We`re Looking For <span>Traders</span></h1>
        <h5>Supercharge your trades
        with NEOMAAA Funds</h5>
        <p>Trade confidently and safe on our AAA+ funded accounts. Pump your success up with up to $400,000 in buying power.</p>
        <button>Free Trian</button>
      </div>
      <div className="looking-img">
        <img src={Group01} alt="" />
      </div>
    </div>
  )
}

export default Looking
