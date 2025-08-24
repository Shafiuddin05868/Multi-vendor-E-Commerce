import mongoose from 'mongoose'
const dbConnect = async()=>{
    try {
        const databaseUrl = process.env.DATABASE_URL
        if (!databaseUrl) {
            throw new Error('Database URL is not defined in environment variables')
        }
        await mongoose.connect(databaseUrl)
        console.log('Database connected')
    } catch (err) {
        console.error((err as Error).message)
    }
}

export default dbConnect;