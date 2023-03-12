import mongoose from "mongoose";

const DestinationSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    },
    tags: [{
        type: String,
        required: false
    }]
});

const Destination = mongoose.model("Destination", DestinationSchema);
export default Destination;