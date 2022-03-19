import React from "react"
import "./profile.css"
import PersonalData from "../../Components/PersonalData";
export default function Profile() {
    return(
        <section className="profile">
            <div className="container">
                <div className="profile-container">
                    <div className="profile-head">
                        <div className="sparta-num">155343 / 180096</div>
                        <div className="profile-avatar">
                            <img src="https://static.gabestore.ru/static/image/avatar/22.svg" alt="avatar"/>    
                        <div className="profile-level">1</div>
                        </div>
                        <div className="profile-rating">ABOUT RATING</div>
                    </div>
                    <div className="profile-user-name">Asqar Sarsenbaev</div>
                    <div className="profile-user-left-points">100 points left until level 2</div>
                    <span className="line"></span>
                    <div className="profil-advantages">
                        <div className="profile-advantages">
                            <div className="profile-statistics-1">
                                <div className="profile-statistics-parts">
                                    <p className="profile-advantages-title">0</p>
                                    <p className="profile-advantages-text">Games <br/> bought</p>
                                </div>
                                <div className="profile-statistics-parts">
                                    <p className="profile-advantages-title">0</p>
                                    <p className="profile-advantages-text">Reviews <br/> left</p>
                                </div>
                            </div>
                            <div className="profile-statistics-2">
                                <div className="profile-statistics-parts">
                                    <p className="profile-advantages-title">0</p>
                                    <p className="profile-advantages-text">Comments <br/> written</p>
                                </div>
                                <div className="profile-statistics-parts last-statistic">
                                    <p className="profile-advantages-title">0</p>
                                    <p className="profile-advantages-text">Add-ons <br/> bought</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
            <PersonalData />
        </section>
    )
}

