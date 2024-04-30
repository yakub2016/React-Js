import axios from 'axios';

const WEBSITE_API_BASE_URL = "http://localhost:8080/api/v1/farmers";
//  const WEBSITE_API_BASE_URL = "http://localhost:3000/websites";


class FarmerService {
    // CRUD operation

    getFarmer(data){
        console.log(data)
        return axios.get(WEBSITE_API_BASE_URL);
    }

    createFarmer(data){
        console.log(data)
        return axios.post(WEBSITE_API_BASE_URL, data);
    }

    //  getFarmer(farmerId){
    //     return axios.get(WEBSITE_API_BASE_URL + '/' + farmerId);
    //  }

    updateFarmer(farmer, farmerId){
        return axios.put(WEBSITE_API_BASE_URL + '/' + farmerId, farmer);
    }

    deleteFarmer(farmerId){
        console.log(farmerId);
        return axios.delete(WEBSITE_API_BASE_URL + '/' + farmerId);
    }
   
}

export default new FarmerService()