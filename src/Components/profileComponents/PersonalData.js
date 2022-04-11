import React, { useState} from "react";
import { makeStyles,} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {TiSocialInstagram} from 'react-icons/ti'
import {FaGoogle, FaFacebookF} from 'react-icons/fa'
import { Link } from "react-router-dom";
import './PersonalData.css'
import { NavLink } from "react-router-dom";

function PersonalData() {
    
    const[checboxbtn, setchecboxbtn] = useState(true)
    function checkboxHandler() {
        setchecboxbtn(!checboxbtn)
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '100%',
          },
        },
      }));
      const classes = useStyles();
    return(
            <div className="container">
                <div className="profile-data">
                    <div className="profiledata-avatar">
                        <div className="data-avatar">
                            <img src="https://static.gabestore.ru/static/image/avatar/22.svg" alt="avatar"/>
                            <p className="change-avatar">Change avatar</p>
                        </div>
                    </div>
                    <h1 className="profiledata-title">PERSONAL DATA</h1>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField id="standard" label="NICKNAME" /><br/>
                        <TextField id="standard" label="EMAIL" />
                    
                        <div className='data-warning'>
                            <p>To change your mail, you will need to contact our support. <Link to="">Write</Link></p>
                        </div>
                        <div className='data-warning'>
                            <p>Your E-mail is not confirmed.To confirm, follow the link in the email we sent you. <Link to="">Send again</Link> </p>
                        </div>
                        <h4 className='data-change-pin'>a change of the pin code</h4>
                        <TextField id="standard" label="CURRENT PASSWORD" /><br/>
                        <TextField id="standard" label="NEW PASSWORD" />
                        <h2 className='linking-account'>linking accounts</h2>
                        <p className='link-text'>Link an account and use it for authorization</p>

                        <div className='personal-data-icons'>
                        <TiSocialInstagram className='data-social'/>
                        <FaGoogle className='data-social' />
                        <FaFacebookF className='data-social'/>
                    </div>
                    <div className="profile-agree">
                        <div className={checboxbtn ? "profile-checkbox" : "checked"} onClick={checkboxHandler}>
                            <div className={checboxbtn ? 'profile-checkroll' : 'profile-checkroll-checked'}></div>
                        </div>
                        <div className="profile-checkbox-text">I consent to the processing of my <Link to="">personal data</Link></div>
                    </div>
                    <div className={checboxbtn ? "profie-checkbox-warning" : "profie-checkbox-warned"}>To complete editing, you must agree to the processing of personal data</div>
                    <div className='profile-btns'>
                        <button className={checboxbtn ?'profile-save-btn' : 'profile-save-btn-disagreed'}>SAVE</button>
                        <button className='profile-output-btn'>OUTPUT</button>
                    </div>
                    </form>
                </div>
            </div>
        
    )
}

export default PersonalData;