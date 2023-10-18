const express = require('express');
const cors = require("cors");
const app = express()
const PORT = 3001;

app.use(cors()) // permet d'accepter les requetes de n'importe quel domaine
app.use(express.json()) // permet de parser le body des requetes en json

// Si l'on souhaite démarrer le S et le C en même temps
// Avant, ne pas oublier de faire un 'npm run build' dans 'client' pour créer le dossier 'build'
//app.use(express.static('build'));
// si on change le react, il faut faire 'npm run build' à chaque fois, mais ça reste interessant pour le déploiement


app.get('/game', (req, res) => {
    return res.send({
        id : 1,
        name : "MINECRAFT",
        image : "../assets/minecraft-picture.jpg",
        description : "Minecraft est un jeu sandbox emblématique qui offre aux joueurs un monde ouvert infini où ils peuvent construire, explorer et survivre. Les joueurs utilisent des blocs cubiques pour créer des structures et collecter des ressources tout en affrontant des monstres. Le jeu est apprécié pour sa créativité, son monde diversifié et sa communauté active.",
        infos : {
            date : "2009",
            developper : "Mojang",
            pegi : "7"
        },
        videoID : "MmB9b5njVbA",
        comments : [
            {
                author : "Jean",
                content : "J'adore ce jeu",
                date : "10/10/2023"
            }
        ]
    })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));