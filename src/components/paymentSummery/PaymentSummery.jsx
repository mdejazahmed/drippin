import "./paymentSummery.scss"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import PercentIcon from '@mui/icons-material/Percent';

const PaymentSummery = () => {
  return (
    <div className="paymentSummery">
    <h1>Payment Summary</h1>
    <div className="billContainer">
    {/* bill item */}
      <div className="billItem">
      <p>
      <ShoppingBagOutlinedIcon className="billIcon"/>
      Bag value
      </p>
        <span>$600.00</span>
      </div>
    {/* bill item */}
      <div className="billItem">
      <p>
      <LocalAtmOutlinedIcon className="billIcon"/>
      Taxes + GST 18%
      </p>
        <span>+ $13.64</span>
      </div>
    {/* bill item */}
      <div className="billItem">
      <p>
      <AirportShuttleOutlinedIcon className="billIcon"/>
      Delivery charges
      </p>
        <span>+ $40.00</span>
      </div>
    {/* bill item */}
      <div className="billItem">
      <p>
      <PercentIcon className="billIcon"/>
      Discount
      </p>
        <span>- $10.00</span>
      </div>
      <hr />
      <div className="billItem">
      <h2 className="total">Total amount</h2>
        <span>- $10.00</span>
      </div>
    </div>
    <button className="orderBtn">Place order</button>
    <button className="discardBtn">Discard all</button>
  </div>
  )
}

export default PaymentSummery