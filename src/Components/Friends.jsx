//Import
import React from "react";
import {Grid} from "@material-ui/core"
import FriendCard from "./FriendCard";


export default class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people')
            .then(response => response.json())
            .then(json => this.setState({ data: json.results }));
    }

    render() {
        return this.state.data.map((value, index) => {
            return (
                <Grid container xs={4} spacing={3} >
                    <Grid item >
                        <FriendCard
                            name={value.name}
                            height={value.height}
                            hair_color={value.hair_color}
                            gender={value.gender}
                        ></FriendCard>
                    </Grid>
                </Grid>
            )
        });
    }
}