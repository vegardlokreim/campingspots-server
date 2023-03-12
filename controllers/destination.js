import Destination from "../models/Destination.js";

export const getDestinations = async (req, res) => {
    try {
        const destinations = await Destination.find();
        res.status(200).json(destinations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getDestination = async (req, res) => {
    try {
        const destination = await Destination.findById(req.params.id);
        res.status(200).json(destination);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createDestination = async (req, res) => {
    try {
        const destination = await Destination.create(req.body);
        res.status(201).json(destination);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}