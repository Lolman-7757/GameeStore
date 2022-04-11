import shadows from '@material-ui/core/styles/shadows'
import {AiOutlineClose} from 'react-icons/ai'
import './ProfileRating.css'
export default function AboutRating({openModal, setOpenModal}) {
    return(
        <>
        {
            openModal ? 
            <div className={openModal ? "profile-modal-win" : "profile-modal-win-close"}>
                <div className="profile-modal-cont">
                    <AiOutlineClose  className='profile-modal-close' onClick={() => setOpenModal(openModal =>!  openModal)}/>
                    <h2 className="profile-modal-title">
                        ABOUT RATING
                    </h2>
                    <p className="profile-modal-text">
                       For some actions on the site, you are awarded rating points. The level of your account depends on their number. Leveling up occurs for every 100 points scored. Based on all of the above, you get a place in the overall rating of the store's buyers.
                    </p>
                    <ul className="profile-modal-ul">
                        <li className="profile-modal-ul-li">You get 1 point for every 10 rubles spent.</li>
                        <li className="profile-modal-ul-li">You get 5 points for every comment you write.</li>
                        <li className="profile-modal-ul-li">You get 50 points for each game review.</li>
                    </ul>
                    <p className="profile-modal-footer">
                        You can see the levels and rating of other players in their public profile.
                    </p>
                </div>
            </div>
            : null
        }
        </>
    )
}