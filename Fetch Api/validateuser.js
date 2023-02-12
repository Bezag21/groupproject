
async function validateUser(username, password){
    const user = await fetch("localhost:3000/findOne(username)")
    method:'Get'
    headers: {'Content-Type' ; 'application/json'}
    
    Body:JSON.stringify({ 
        id: id,
        username: username,
        password:password,
    });
    if (user && user.password === password) {
        const {password, ...result} = user
        return result
    }
    return null

}  