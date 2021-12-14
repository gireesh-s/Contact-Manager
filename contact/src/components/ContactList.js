import { Container } from '@mui/material'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'

const ContactList = (props) => {
    console.log(props)
    const inputEl = useRef("")
    const deleteContactHandler=(id)=>{
        props.getContactId(id)
    }
    const renderContactList=props.contacts.map((contact)=>{
        return(
            <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
        )
    })
    const getSearchTerm=()=>{
        props.searchKeyword(inputEl.current.value)
    }
    return (
        <Container maxWidth="sm">
        <div>
            <h2 style={{marginTop:"90px"}}>
                Contact List
                <Link to="/add">
                <button className="ui button blue right" style={{float:"right"}}>Add Contact</button>
                </Link>
            </h2>
            <div className="ui search" style={{width:"100%"}}>
                <div className="ui icon input" style={{width:"100%",padding:"4px 9px"}}>
                    <input ref={inputEl} type="text" placeholder='Search Contacts' className="promp" value={ props.term } onChange={getSearchTerm}/>
                    <i className='search icon'></i>
                </div>
            </div>
        </div>
        <div className="ui celled list" style={{padding:"0px 9px"}}>
            {renderContactList.length >0 ? renderContactList: "No contacts available"}
        </div>
        </Container>
    )
}

export default ContactList
