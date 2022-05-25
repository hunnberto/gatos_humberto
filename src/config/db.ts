import mongoose from "mongoose"

const DB_URI = `mongodb://localhost:27017/Cats_Humberto_Otalora`

module.exports = () => {
    const connect = () => {
        mongoose.connect(
            DB_URI,
            {

            },
            (err) => {
                if (err) {
                    console.log('Error Database connection')
                } else {
                    console.log('Database connected succesfull')
                }
            }
        )
    }

    connect()
}