import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Grid } from '@material-ui/core';

export const Redesociais = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button variant="outlined" color="default" onClick={handleClickOpen}>
                Informations
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullScreen
            >
                <DialogTitle id="alert-dialog-title">{"Informations"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Grid container spacing={12}
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                                <h1>Social networks</h1>
                            <Grid item xs={12} style={{textAlign: "center", alignItems: "center", margin: "10px"}}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    size="large"
                                    startIcon={<InstagramIcon />}
                                >
                                    <a href="https://www.instagram.com/law_devart_/" style={{textDecoration: "none", color: "white"}}>Instagram</a>
                                </Button>
                            </Grid>
                            <Grid item xs={12} style={{textAlign: "center", alignItems: "center", margin: "10px"}}>
                                <Button
                                    variant="contained"
                                    color="default"
                                    size="large"
                                    startIcon={<YouTubeIcon />}
                                >
                                    <a href="https://www.youtube.com/channel/UCuoy70C9WqCw16o0tqWD0YA" style={{textDecoration: "none", color: "black"}}>Youtube</a>
                                </Button>
                            </Grid>
                            <Grid item xs={12} style={{textAlign: "center", alignItems: "center", margin: "10px"}}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    startIcon={<GitHubIcon />}
                                >
                                    <a href="https://github.com/lawDevArt" style={{textDecoration: "none", color: "white"}}>GitHub</a>
                                </Button>
                            </Grid>
                            <p>Bio</p><br></br>
                            <p style={{width: "100%", textAlign: "center"}}>Description</p>
                            <h2>Hablities </h2>
                            <p style={{width: "100%", textAlign: "center"}}>Hab 1, hab 2, hab3</p><br></br>
                            <p style={{width: "100%", textAlign: "center"}}>Option</p><br></br>
                            <p style={{width: "100%", textAlign: "center"}}>Hablities</p><br></br>
                            <h2>More</h2><br></br>
                            <p style={{width: "100%", textAlign: "center"}}>Description</p>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Concluído
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}