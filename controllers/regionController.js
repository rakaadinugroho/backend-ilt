const regionModel = require('../models/regionModel');

const getProvinces = async (req, res) => {
    try {
        const provinces = await regionModel.getProvinces();
        res.json(provinces);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getCitiesByProvince = async (req, res) => {
    const { provinceId } = req.query;
    try {
        const cities = await regionModel.getCitiesByProvince(provinceId);
        res.json(cities);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getDistrictsByCity = async (req, res) => {
    const { cityId } = req.query;
    try {
        const districts = await regionModel.getDistrictsByCity(cityId);
        res.json(districts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getProvinces,
    getCitiesByProvince,
    getDistrictsByCity
};
