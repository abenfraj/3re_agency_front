import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const HouseCard = ({logement}) => {
    const {adresse, nomPropriétaire, dateDisponibilite, surfaceHabitable, etatHabitation, nbPieces, type} = logement;

    return (
        <Card sx={{maxWidth: 345, minHeight: 550, marginTop:"20px", marginBottom:"5px"}}>
            <CardMedia
                component="img"
                height="320"
                image={"https://lovehomedesigns.com/wp-content/uploads/2021/12/suburban-house-style-122221.jpg.webp"}
                alt="product-image"
            />
            <CardContent>
                <Typography variant="body2">
                    <b>Adresse :</b> {adresse}
                </Typography>
                <Typography variant="body2">
                    <b>Propriétaire :</b> {nomPropriétaire}
                </Typography>
                <Typography variant="body2">
                    <b>Date de disponibilité :</b> {new Date(dateDisponibilite).toLocaleString().slice(0,10)}
                </Typography>
                <Typography variant="body2">
                    <b>Surface habitable :</b> {surfaceHabitable} m²
                </Typography>
                <Typography variant="body2">
                    <b>Etat de l'habitation :</b> {etatHabitation}
                </Typography>
                <Typography variant="body2">
                    <b>Nombre de pièces :</b> {nbPieces}
                </Typography>
                <Typography variant="body2">
                    <b>Type :</b> {type}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default HouseCard;