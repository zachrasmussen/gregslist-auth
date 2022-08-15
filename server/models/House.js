import mongoose from "mongoose";
const Schema = mongoose.Schema

export const HouseSchema = new Schema(
    {
        bedrooms: {
            type: Number, required: true, minlength: 1, maxlength: 100
        },
        bathrooms: {
            type: Number, required: true, minlength: 1, maxlength: 100
        },
        sqft: {
            type: Number, required: true, minlength: 1, maxlength: 10000
        },
        price: {
            type: Number, required: true, minlength: 1, maxlength: 10000000
        },
        img: {
            type: String, maxlength: 600, default: 'https://www.nc-engineering.com/nccms/wp-content/uploads/2021/04/image-coming-soon-placeholder.png'
        },
        description: {
            type: String, maxlength: 1000
        }
    },
    { timestamps: true, toJSON: { virtuals: true } }
)