import { makeStyles,} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {TiSocialInstagram} from 'react-icons/ti'
import {FaGoogle, FaFacebookF} from 'react-icons/fa'

import './PersonalData.css'

function PersonalData() {
    
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
                        <TextField id="standard" label="NICKNAME"  value='Nickname'/><br/>
                        <TextField id="standard" label="EMAIL" />
                    
                        <div className='data-warning'>
                            <p>To change your mail, you will need to contact our support.Write</p>
                        </div>
                        <div className='data-warning'>
                            <p>Your E-mail is not confirmed.To confirm, follow the link in the email we sent you.Send again </p>
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
                    </form>
                </div>
            </div>
        
    )
}

export default PersonalData;