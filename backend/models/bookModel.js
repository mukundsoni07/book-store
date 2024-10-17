import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            
        },
        publishYear: {
            type: Number,
        }
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model('Book', bookSchema)