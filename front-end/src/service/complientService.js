import axios from 'axios'

export async  function PostComplient(Complient){

   
    try{
        const response = await axios.post("http://localhost:2500/api/complient",
        {"provider": Complient.provider,
        "email":Complient.email,
        "message": Complient.message,
        "mobile":Complient.mobile,
        "address":Complient.address,
        "nic":Complient.nic,
        "imobile":Complient.imobile,
        "name":Complient.name

    });
        return response;
    }
    catch(error){
        return error.response
    }

    
};

export async  function getComplientsProvider(provider){

   
    try{
        const response = await axios.get(`http://localhost:2500/api/provider/${provider}`);
        return response;
    }
    catch(error){
        return error.response
    }
    
}

export async  function deleteComplient(id){

   
    try{
        const response = await axios.delete(`http://localhost:2500/api/complient/${id}`);
        return response;
    }
    catch(error){
        return error.response
    }
    
};

export async  function UpdateComplient(Complient,Status){

    

console.log(Status)
console.log(Complient)
   
    try{
        const response = await axios.put(`http://localhost:2500/api/complient/${Complient._id}`,
        {"provider": Complient.provider,
        "email":Complient.email,
        "message": Complient.message,
        "mobile":Complient.mobile,
        "address":Complient.address,
        "nic":Complient.nic,
        "imobile":Complient.imobile,
        "name":Complient.name,
        "status":Status


    });
        return response;
    }
    catch(error){
        return error.response
    }
    
    
}
