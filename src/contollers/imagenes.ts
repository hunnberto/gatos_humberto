import { Response, Request } from "express"
import axios from "axios"



export const getImages = async (_req: Request, res: Response) => {
    try {


        const config = {
            method: 'get',
            url: 'https://api.thecatapi.com/v1/images/search?limit=10',
            headers: {}
        }

        //@ts-ignore
        axios(config)
            .then(function (response) {
                res.send(response.data);
            })



    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}




export const saveAsFavorite = async (_req: Request, res: Response) => {
    try {
        const { id } = _req.body
        const data = JSON.stringify({
            "image_id": id,
            "sub_id": "humberto_Otalora"
        });

        var config = {
            method: 'post',
            url: 'https://api.thecatapi.com/v1/favourites',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'f221c99b-304d-4404-b111-cbd3ddccf31a'

            },
            data: data
        }

        //@ts-ignore
        axios(config)
            .then(function (response) {
                res.send(`Save  image ${id} as favorite, ${response}`);
            })

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}



export const showFavorites = async (_req: Request, res: Response) => {
    try {
        const config = {
            method: 'get',
            url: 'https://api.thecatapi.com/v1/favourites?sub_id=humberto_Otalora',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'f221c99b-304d-4404-b111-cbd3ddccf31a'
            }

        }

        //@ts-ignore
        axios(config)
            .then(function (response) {
                res.send(response.data)
            })

    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}
