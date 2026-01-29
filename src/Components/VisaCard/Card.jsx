import  './Card.css';
import World from '../../assets/world.svg';
import Chip from '../../assets/chip.png';
import Visa from '../../assets/visa.png';
import Partern from '../../assets/partern.jpg';

const Card = () => {
    return (
        <div className="visa-card">
            <div className="visa-card-inner">
             <div className="front">
                <img src={World} className='map-img' alt="" />
                <div className="row">
                    <img src={Chip} className='icon' alt="" />
                     <img src={Visa} className='icon' alt="" />
                </div>
                <div className="row card-no">
                    <p>5678</p>
                    <p>5634</p>
                    <p>9012</p>
                    <p>3456</p>
                </div>
                <div className="row card-holder">
                    <p>CARD HOLDER</p>
                    <p>EXPIRES</p>
                </div>
                <div className="row card-name">
                    <p>AMINU GULLAH</p>
                    <p>01/26</p>
                </div>
            </div>
            <div className="back">
                <img src={World} className='map-img' alt="" />
                <div className="bar"></div>
                <div className="cvv-section">
                    <div>
                        <img src={Partern} alt="" />
                    </div>
                    <p>355</p>
                </div>
                <div className="row card-text">
                   <p>Fastpay's virtual card enables secure online transactions, providing you  
                    with quick and easy access to your funds and financial management.
                    </p> 
                </div>
                <div className="row signature">
                    <p>CUSTOMER SIGNATURE</p>
                    <img src={Visa} className="icon" alt="" />
                </div>
            </div>

        </div>
    </div>
    );
};

export default Card;