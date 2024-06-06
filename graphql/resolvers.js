const regionModel = require('../models/regionModel');

const resolvers = {
    Query: {
        provinces: async () => {
            return await regionModel.getProvinces();
        },
        citiesByProvince: async (_, { provinceId }) => {
            return await regionModel.getCitiesByProvince(provinceId);
        },
        districtsByCity: async (_, { cityId }) => {
            return await regionModel.getDistrictsByCity(cityId);
        }
    }
};

module.exports = resolvers;