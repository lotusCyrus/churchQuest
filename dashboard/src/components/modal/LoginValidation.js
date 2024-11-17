function validation(userData){
    let errors = {}
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     
    const passwordPattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(userData.email.trim() === "" ){
        errors.email="Email should not be empty"
    }
    else if (!emailPattern.test(userData.email)){
        errors.email="Email didn't match"
    } else{
        errors.email= ""
    }

    if(userData.password.trim() === "" ){
        errors.password = "Password should not be empty"
    }
      else if(!passwordPattern.test(userData.password)){
        errors.password="Password didn't match"
      } 
        else{
            errors.password = ""
           }

        return errors;
}
export default validation;