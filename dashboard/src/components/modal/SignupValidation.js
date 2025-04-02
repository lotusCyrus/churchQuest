function signupValidation(userData){
    let errors = {}
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(userData.churchName === "" ){
        errors.churchName="Church name should not be empty"
    }

    else if (userData.churchName.length > 20){
        errors.churchName="Church Name should not be more than 20 characters"
    } else{
        errors.churchName= ""
    }

//checking church size field

    if(userData.churchSize.trim() === "" ){
        errors.churchSize="Church size should not be empty"
    }
    else if (userData.churchSize.length > 12){
        errors.churchSize="Church size should not be more than 12 characters"
    } else{
        errors.churchSize= ""
    }

//checking for email feild

    if(userData.email.trim() === "" ){
        errors.email="Email should not be empty"
    }
    else if (!emailPattern.test(userData.email)){
        errors.email="Email didn't match"
    } else{
        errors.email= ""
    }

//checking for address field

    if(userData.address.trim() === "" ){
        errors.address="Address should not be empty"
    }
    else if (userData.address > 200){
        errors.address="You reached limit for your address characters"
    } else{
        errors.address= ""
    }

  //checking for password field

    if(userData.password.trim() === "" ){
        errors.password = "Password should not be empty"
    }

      else if(!passwordPattern.test(userData.password)){
        errors.password="Password didn't match"
      } 
           
  //checking for confirmPassword field and comparing with password

    if(userData.confirmPassword.trim() === "" ){
        errors.confirmPassword = "Password should not be empty"
    }
      else if(userData.password !== userData.confirmPassword ){
        errors.confirmPassword="Your passwords are different"
      } 
        return errors;
}
export default signupValidation