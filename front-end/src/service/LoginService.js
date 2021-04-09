import axios from 'axios'

export async  function login(user){

   
    try{
        const response = await axios.post("http://localhost:2500/api/login",
        {"username": user.username,
        "password":user.password,
    });
        return response;
    }
    catch(error){
        return error.response
    }

    
};