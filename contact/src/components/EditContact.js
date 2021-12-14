import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

class EditContact extends React.Component{
    constructor(props){
        super(props)
        const {id,name,email}=props.location.state.contact;
        this.state={
            id,
            name,
            email,
        }
    }
    update=(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("All the fields are mandatory");
            return
        }
        this.props.updateContactHandler(this.state)
        this.setState({name:"",email:""})
        this.props.history.push("/")
    }
    render(){
        return(
            <Container maxWidth="sm">
            <div className="ui main" style={{marginTop:"90px",}}>
                <h2>Edit Contact
                <Link to="/">
                <button className="circular ui button grey" style={{float:"right",padding:"8px 12px"}}><ArrowBackIcon/></button>
                </Link>
                </h2>
                <form className="ui form" onSubmit={this.update}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" autoComplete="off" placeholder="Name" value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="name" autoComplete="off" placeholder="Email" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})}/>
                    </div>
                    <button className="ui button blue">Update</button>
                </form>
            </div>
            </Container>
        )
    }
}

export default EditContact