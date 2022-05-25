import express from 'express'
import {
    getImages,
    saveAsFavorite,
    showFavorites
} from './../contollers/imagenes'
const router = express.Router()


router.get("/", getImages)

router.post("/favoritos/", saveAsFavorite)

router.get("/favoritos", showFavorites)

export default router