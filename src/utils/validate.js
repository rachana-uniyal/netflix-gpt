export const checkValidateData = (name,email, password) =>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)
    const isNameValid = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/.test(name)

    if(!isEmailValid) return "Email ID is not valid"
    if(!isPasswordValid) return "Password is not valid"
    if(!isNameValid) return "Name is not valid"

    return null;
}