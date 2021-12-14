import { Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

class AddContact extends React.Component{
    state={
        name:"",
        email:"",
    }
    add=(e)=>{
        e.preventDefault();
        if(this.state.name==="" || this.state.email===""){
            alert("All the fields are mandatory");
            return
        }
        this.props.addContactHandler(this.state)
        this.setState({name:"",email:""})
        this.props.history.push("/")
    }
    render(){
        return(
            <Container maxWidth="sm">
            <div className="ui main">
                <h2 style={{marginTop:"90px"}}>Add Contact
                <Link to="/">
                <button className="circular ui button grey" style={{float:"right",padding:"8px 12px"}}><ArrowBackIcon/></button>
                </Link>
                </h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" autoComplete="off" placeholder="Name" value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="name" autoComplete="off" placeholder="Email" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})}/>
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
            </Container>
        )
    }
}

export default AddContact