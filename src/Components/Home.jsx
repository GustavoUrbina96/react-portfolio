//Import
import React from "react";
import UserCard from "./UserCard"
import { TextField, Button, Icon } from "@material-ui/core";
//Declarar clases
//state(variables)
//return


//Exportacion de manera automatica
export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mail: "",
            message: ""
        };

        
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value })
    }

    handleClick(){
        alert("Your name: "+ this.state.name+" your message: "+this.state.message+" your email: "+this.state.mail)
    }
    


    render() {
        return (
            <div>
                <UserCard />
                <form>
                    <TextField
                        fullWidth
                        label="Name"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        value={this.state.mail}
                        onChange={this.handleChange('mail')}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Message"
                        multiline
                        rowsMax="4"
                        value={this.state.message}
                        onChange={this.handleChange('message')}
                        margin="normal"
                    />
                    <Button variant="contained" onClick={this.handleClick} color="primary" className="button" style={{marginBottom: 100}}>
                        Send
                        <Icon className="icon">send</Icon>
                    </Button>
                </form>
            </div>

        )
    }
}