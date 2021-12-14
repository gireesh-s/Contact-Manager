import { Avatar, Container } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ContactDetail = (props) => {
    const { name,email } = props.location.state.contact;
    return (
        <Container maxWidth="sm">
        <div className="main" style={{marginTop:"90px",}}>
            <div className="ui card centered" style={{textAlign:"center"}}>
                <div>
                <Avatar src="/broken-image.jpg" variant="square" style={{width:"100%",height:"auto",backgroundColor:"lightblue",}}/>
                </div>
                <div className="content">
                    <div className="header" style={{fontSize:"30px"}}>{name}</div>
                    <div className="description" style={{fontSize:"18px"}}>{email}</div>
                </div>
            </div>
            <div className="center-div" style={{margin:"30px 45%"}}>
                <Link to="/">
                    <button className="circular ui button grey" style={{padding:"8px 12px"}}><ArrowBackIcon/></button>
                </Link>
            </div>
        </div>
        </Container>
    )
}

export default ContactDetail
