import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import PaymentSummery from "../../components/paymentSummery/PaymentSummery";
import "./payment.scss";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ContactlessIcon from '@mui/icons-material/Contactless';

const PaymentOptions=()=>{
    return(
        <div className="paymentOption">
            <h1>Payment options</h1>
            <div className="optionContainer">
               <button>
                <LocalAtmIcon className="paymentIocn"/>
                COD (Cash On Delivery)
                </button>
               <button>
                <AccountBalanceIcon className="paymentIocn"/>
                Net Banking
                </button>
               <button>
                <CreditCardIcon className="paymentIocn"/>
                Credit Card
                </button>
               <button>
                <ContactlessIcon className="paymentIocn"/>
                UPI
                </button>
            </div>
        </div>
    )
}

const Address = () => {
  return (
    <div className="addressContainer">
      <p>123/456 DDU Nagar, Raipur, C.G. 492001</p>
      <button>+ add another address</button>
    </div>
  );
};

const Payment = () => {
  return (
    <div className="mainContainer">
      <Banner
        name="Payments"
        imgUrl="public/assets/paymentBannerImg.png"
        reverse
      />
      <div className="wrapper">
        <hr />
        <PaymentSummery />
        <Address />
        <PaymentOptions/>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
