import React from 'react'
import { Link } from 'react-router-dom'
import ContactMailIcon from '@mui/icons-material/ContactMail';

const ContactCard = (props) => {
    const { id, name, email } = props.contact
    return (
        <div className="item">
            <div style={{width:"6%",float:"left",padding:"3px",marginTop:"6px",color:"grey"}}>
                <ContactMailIcon/>
            </div>
            <div style={{width:"80%",float:"left",padding:"5px"}} className="content">
                <Link to={{pathname:`/contact/${id}`, state:{contact: props.contact}}}>
                    <div className="header">{name}</div>
                    <div style={{marginTop:"5px"}}>{email}</div>
                </Link>
            </div>
            <div style={{float:"right",width:"7%",padding:"5px",marginTop:"10px",color:"red",fontSize:"20px"}}>
                <i className="trash alternate outline icon" onClick={()=>props.clickHandler(id)} style={{cursor:"pointer"}}></i>
            </div>
            <div style={{float:"right",width:"7%",padding:"5px",marginTop:"10px",color:"brown",fontSize:"20px"}}>
                <Link to={{pathname:`/update`, state:{contact: props.contact}}} style={{color:"brown"}}>
                    <i className="edit alternate outline icon"></i>
                </Link>
            </div>
        </div>
    )
}

export default ContactCard
