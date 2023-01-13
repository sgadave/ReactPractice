import axios from 'axios';


class UserServices{
    constructor(){
        this.baseUrl="http://localhost:4000/"
    }

    getUsers(){
        return axios.get(this.baseUrl+"user/data")
    }

    addUsers(user){
        return axios.post(this.baseUrl+"adduser",user);
    }

    getUserbyid(userid){
        return axios.get(this.baseUrl+"userbyid/"+userid);
    }
}

export default new UserServices();