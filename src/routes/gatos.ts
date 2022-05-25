import express from 'express'
import {
    sendCats,
    createCats,
    findById,
    deleteById,
    modifyById
} from "./../contollers/gatos"

const router = express.Router()


router.get("/", sendCats)

router.get("/:id", findById)

router.post("/", createCats)

router.put("/:id", modifyById)

router.delete("/:id", deleteById)

export default router