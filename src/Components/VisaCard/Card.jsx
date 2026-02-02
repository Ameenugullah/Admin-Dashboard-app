import './Card.css';
import World from '../../assets/world.svg';
import Chip from '../../assets/chip.png';
import Visa from '../../assets/visa.png';
import Partern from '../../assets/partern.jpg';

const Card = () => {
    return (
        <div className="visa-card">
            <div className="visa-card-inner">
                {/* FRONT OF THE CARD */}
                <div className="front">
                    <img src={World} className='map-img' alt="world map" />
                    <div className="card-row header-row">
                        <img src={Chip} className='chip-icon' alt="chip" />
                        <img src={Visa} className='visa-icon' alt="visa" />
                    </div>
                    <div className="card-row card-no">
                        <span>5678</span>
                        <span>5634</span>
                        <span>9012</span>
                        <span>3456</span>
                    </div>
                    <div className="card-row card-holder-labels">
                        <p>CARD HOLDER</p>
                        <p>EXPIRES</p>
                    </div>
                    <div className="card-row card-name">
                        <p>ABDULMALIK AMINU</p>
                        <p>01/26</p>
                    </div>
                </div>

                {/* BACK OF THE CARD */}
                <div className="back">
                    <div className="magnetic-bar"></div>
                    <div className="cvv-section">
                        <div className="pattern-area">
                            <img src={Partern} alt="security pattern" />
                        </div>
                        <div className="cvv-box">355</div>
                    </div>
                    <div className="card-info-text">
                        <p>This virtual card is property of Fastpay. It is valid for secure 
                            online transactions globally.</p>
                    </div>
                    <div className="card-row footer-row">
                        <span className="sig-text">CUSTOMER SIGNATURE</span>
                        <img src={Visa} className="visa-icon-small" alt="visa" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
