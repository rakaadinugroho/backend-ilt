const pool = require('../config/db');

const getProvinces = async () => {
    const result = await pool.query('SELECT * FROM provinces');
    return result.rows;
};

const getCitiesByProvince = async (provinceId) => {
    const result = await pool.query('SELECT * FROM cities WHERE province_id = $1', [provinceId]);
    return result.rows;
};

const getDistrictsByCity = async (cityId) => {
    const result = await pool.query('SELECT * FROM districts WHERE city_id = $1', [cityId]);
    return result.rows;
};

module.exports = {
    getProvinces,
    getCitiesByProvince,
    getDistrictsByCity
};