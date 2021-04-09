const jwt = require("jsonwebtoken");

const tokenGenerator =(provider)=>{
    const token = jwt.sign(
        {provider},
        process.env.JWT_KEY,
        {expiresIn:"1hours"})

        return token;
}

const tokenValidater = (token) =>{
    try{
        const data = jwt.verify(token,process.env.JWT_KEY);
        return data;
    }
    catch(err){
        console.log(err);
        return false;
    }
}