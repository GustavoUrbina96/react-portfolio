import React from "react"
import { Card, Typography, CardContent } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        maxWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function FriendCard(props) {
    const classes = useStyles();
    return (
        

                <Card className={classes.card} sm>
                    <CardContent>
                        <Typography>Name: {props.name}</Typography>
                        <Typography>Height: {props.height}</Typography>
                        <Typography>Hair color: {props.hair_color}</Typography>
                        <Typography>Gender: {props.gender}</Typography>

                    </CardContent>

                </Card>

    )
}