const mongoose = require("mongoose");
const houseModel = require("./house.model");

// Add a new house
const addNewHouseToDB = async (req, res) => {
    try {
        const info = req.body;
        const house = new houseModel(info);
        await house.save();

        res.send({
            message: 'Successful',
            data: house
        })
    }
    catch (err) {
        res.send({
            message: 'Faild',
            data: err
        });
    }
}

// get houses
const getHousesByWonerEmail = async (req, res) => {
    try {
        const { email } = req.query;
        const houses = await houseModel.find(
            { wonerEmail: email },
            { picture: 1, rent: 1, name: 1 });

        res.send({
            message: 'Success',
            data: houses
        })
    }
    catch (err) {
        res.send({
            message: 'Faild',
            data: err
        });
    }
}

// Delete house
const deleteHouseToDB = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await houseModel.deleteOne({_id : id});

        res.send({
            message : 'Successful',
            data : result
        });
    }
    catch (err) {
        res.send({
            message: 'Faild',
            data: err
        });
    }
}

module.exports = {
    addNewHouseToDB,
    getHousesByWonerEmail,
    deleteHouseToDB
}