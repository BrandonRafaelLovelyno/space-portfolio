function validateReqBody(body){
    const retVal=[];
    const {firstName,lastName,email,topic,message}=body;
    if(validateName('first name',firstName)){
        retVal.push(validateName('first name',firstName))
    }
    if(validateName('last name',lastName)){
        retVal.push(validateName('last name',lastName))
    }
    if(validateEmail(email)){
        retVal.push(validateEmail(email))
    }
    if(validateEmpty('topic',topic)){
        retVal.push(validateEmpty('topic',topic))
    }
    if(validateEmpty('message',message)){
        retVal.push(validateEmpty('message',message))
    }
    return retVal;
}

function validateEmpty(field,str){
    if(!str){
        return 'The '+field+' field cannot be empty'
    }
}

function validateName(field,name) {
    if(!name){
        return 'The '+field+' field cannot be empty'
    }
    const containNumber=/\d/.test(name);
    if(containNumber){
        return 'Please enter a valid name'
    }
}

function validateEmail(email){
    if(!email){
        return 'The email field cannot be empty'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return 'Please enter a valid email'
    }
}

module.exports=validateReqBody;