import React, {FC} from "react";

export default function HomePage() {
    return (
        <div className="home">
            <div className="home_info">
                <div className="home_text">
                    <div className="home_title">
                        <span>Fashion Store</span>
                    </div>
                    <div className="home_slogan">
                        <span>Where Trends Come to Life</span>
                    </div>
                    <button className="home_btn">Shop now</button>
                </div>
            </div>
            <img src={process.env.PUBLIC_URL + 'img/home-2.png'} alt="promo 2"/>
            <img src={process.env.PUBLIC_URL + 'img/home-1.png'} alt="promo 1"/>
        </div>
    );
}