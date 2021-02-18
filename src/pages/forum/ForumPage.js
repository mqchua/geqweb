import React, { useRef, useState, useEffect } from 'react'
import { Button, TextField, Container, Box, List, ListItem, ListItemText } from '@material-ui/core';
import firebase from 'firebase'
import '../../firebase'

export default function HomePage(classes) {
    const nameRef = useRef()
    const commentRef = useRef()
    var commentDict = []
    const [data, setData] = useState()

    function fetchData() {
        return firebase.database().ref().get().then(function (snapshot) {
            if (snapshot.exists()) {
                //console.log(snapshot.val())
                var i = 1
                snapshot.forEach(function (childSnapshot) {
                    //console.log(childSnapshot.val())
                    commentDict.push({
                        id: i,
                        name: childSnapshot.val().name,
                        comment: childSnapshot.val().comment
                    })
                    i += 1
                });
                setData(commentDict)
                //console.log(data)
                //console.log(commentDict)
            }
            else {

            }
        }).catch(function (error) {
            console.error(error);
        });
    }

    function CommentDetails() {
        useEffect(() => {
            fetchData()
        }, [])

        if (data == null) {
            return <p> Loading comments...</p>
        }

        return (
            <List>
                {data.map(d => (
                    <ListItem>
                        <ListItemText inset primary={d.name} secondary={d.comment} />
                    </ListItem>
                ))}
            </List>
        )

    }




    async function handleSubmit() {
        console.log("hello")
        firebase.database().ref().push({
            name: nameRef.current.value,
            comment: commentRef.current.value
        })

        window.location.reload()
    }

    return (
        <div>
<Box display="flex" justifyContent="center">
            <CommentDetails />
            </Box>
            <Container maxWidth="md">
                <div> <TextField id="standard-basic" label="Your Name" inputRef={nameRef} /> </div>
                <div> <TextField margin="normal" fullWidth="true" id="outlined-basic" label="Write your comments" variant="outlined" inputRef={commentRef} /></div>
                <Button onClick={handleSubmit} variant="outlined" color="primary"> Confirm </Button>
            </Container>

        </div>
    )
}