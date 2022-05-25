import { Response, Request } from "express"

const model = require('./../models/cat')

export const sendCats = async (_req: Request, res: Response) => {
    try {
        const allData = await model.find({})
        res.send(allData)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export const createCats = async (_req: Request, res: Response) => {
    try {
        const data = _req.body
        await model.create(data, (_err: any, docs: any) => {
            res.send({ data: docs })
        })


    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}



export const findById = async (_req: Request, res: Response) => {
    try {
        const { id } = _req.params
        const data = await model.find({ _id: { $eq: id } })
        res.send(data)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export const deleteById = async (_req: Request, res: Response) => {
    try {
        const { id } = _req.params
        await model.remove({ _id: { $eq: id } })
        res.send("delete succesfully")

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export const modifyById = async (_req: Request, res: Response) => {
    try {
        const { id } = _req.params
        const filterData = await model.find({ _id: { $eq: id } })

        const update = _req.body

        let doc = await model.findOneAndUpdate(filterData, update, { returnOriginal: false })

        res.send(doc)

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}