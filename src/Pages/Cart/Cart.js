import react, {useState} from "react";
import { Link } from "react-router-dom";
import {AiOutlineClose} from 'react-icons/ai'
import "../../Components/profileComponents/PersonalData.css";
import './Cart.css'

function Cart() {

    const[checboxbtn, setchecboxbtn] = useState(true)
    function checkboxHandler() {
        setchecboxbtn(!checboxbtn)
    }

    return(
        <section className="cart-section">
            <div className="cart-products">
                <h1 className="cart-order-number">MY ORDER IS <span className="orange">10</span></h1>
                <div className="shop-items">
                    <div className="shop-items-img">
                        <img src="https://static.gabestore.ru/product/_j7jVtprTbPuXbtnJsoGmTMEc3tM7sbI.jpg"/>
                    </div>
                    <div className="shop-items-content">
                        <div className="shop-items-content-title">
                            GRAND THEFT AUTO V: PREMIUM ONLINE EDITION
                        </div>
                        <div className="shop-items-content-price">
                            <div className="shop-items-content-price-current">1499₽</div>
                            <div className="shop-items-content-price-discount">1499₽</div>
                            <div className="shop-items-content-price-procent">-0%</div>
                        </div>
                        <div className="cart-border-line"></div>
                        <div className="shop-details">
                            <div className="shop-details-item1">Activation region: <Link to="/">Russia and GMDA</Link></div>
                            <div className="shop-details-item2">Activation Service: <Link to="">Rockstar Games</Link></div>
                        </div>
                    </div>
                    <AiOutlineClose className="cart-delete-product"></AiOutlineClose>
                </div>



                <div className="shop-items">
                    <div className="shop-items-img">
                        <img src="https://static.gabestore.ru/product/_j7jVtprTbPuXbtnJsoGmTMEc3tM7sbI.jpg"/>
                    </div>
                    <div className="shop-items-content">
                        <div className="shop-items-content-title">
                            GRAND THEFT AUTO V: PREMIUM ONLINE EDITION
                        </div>
                        <div className="shop-items-content-price">
                            <div className="shop-items-content-price-current">1499₽</div>
                            <div className="shop-items-content-price-discount">1499₽</div>
                            <div className="shop-items-content-price-procent">-0%</div>
                        </div>
                        <div className="cart-border-line"></div>
                        <div className="shop-details">
                            <div className="shop-details-item1">Activation region: <Link to="/">Russia and GMDA</Link></div>
                            <div className="shop-details-item2">Activation Service: <Link to="">Rockstar Games</Link></div>
                        </div>
                    </div>
                    <AiOutlineClose className="cart-delete-product"></AiOutlineClose>
                </div>




                <div className="shop-items">
                    <div className="shop-items-img">
                        <img src="https://static.gabestore.ru/product/_j7jVtprTbPuXbtnJsoGmTMEc3tM7sbI.jpg"/>
                    </div>
                    <div className="shop-items-content">
                        <div className="shop-items-content-title">
                            GRAND THEFT AUTO V: PREMIUM ONLINE EDITION
                        </div>
                        <div className="shop-items-content-price">
                            <div className="shop-items-content-price-current">1499₽</div>
                            <div className="shop-items-content-price-discount">1499₽</div>
                            <div className="shop-items-content-price-procent">-0%</div>
                        </div>
                        <div className="cart-border-line"></div>
                        <div className="shop-details">
                            <div className="shop-details-item1">Activation region: <Link to="/">Russia and GMDA</Link></div>
                            <div className="shop-details-item2">Activation Service: <Link to="">Rockstar Games</Link></div>
                        </div>
                    </div>
                    <AiOutlineClose className="cart-delete-product"></AiOutlineClose>
                </div>



                <div className="shop-items">
                    <div className="shop-items-img">
                        <img src="https://static.gabestore.ru/product/_j7jVtprTbPuXbtnJsoGmTMEc3tM7sbI.jpg"/>
                    </div>
                    <div className="shop-items-content">
                        <div className="shop-items-content-title">
                            GRAND THEFT AUTO V: PREMIUM ONLINE EDITION
                        </div>
                        <div className="shop-items-content-price">
                            <div className="shop-items-content-price-current">1499₽</div>
                            <div className="shop-items-content-price-discount">1499₽</div>
                            <div className="shop-items-content-price-procent">-0%</div>
                        </div>
                        <div className="cart-border-line"></div>
                        <div className="shop-details">
                            <div className="shop-details-item1">Activation region: <Link to="/">Russia and GMDA</Link></div>
                            <div className="shop-details-item2">Activation Service: <Link to="">Rockstar Games</Link></div>
                        </div>
                    </div>
                    <AiOutlineClose className="cart-delete-product"></AiOutlineClose>
                </div>

            </div>

            <div className="cart-total">
                <h1 className="total-price">TOTAL <spam className="orange">12839₽</spam></h1>
                <div className="cart-border-line"></div>
                <div className="profile-agree">
                        <div className={checboxbtn ? "profile-checkbox" : "checked"} onClick={checkboxHandler}>
                            <div className={checboxbtn ? 'profile-checkroll' : 'profile-checkroll-checked'}></div>
                        </div>
                        <div className="profile-checkbox-text">I have read the terms of the <Link to="">contract</Link> and agree to it</div>
                    </div>
                    <div className={checboxbtn ? "profie-checkbox-warning" : "profie-checkbox-warned"}>To continue the purchase, you must agree to the offer agreement</div>

            </div>
        </section>
    )
}

export default Cart;