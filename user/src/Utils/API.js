import  Axios from "axios";

export default {
    // This function will use Axios to request 20 random users using https://randomuser.me/api/
    // Location of API: https://randomuser.me/
    getUsers:function(){    
        return axios.get("https://randomuser.me/api/?results=50&nat=us&inc=name,email,phone,picture,login,id");
    },
};