const url = 'https://affirbisiaks.herokuapp.com';

export async function beginService(userInfo) {
    const data = await fetch(`${url}/api/v1/users/send/${userInfo.googleId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', 
            'Access-Control-Allow-Credentials': true 
        }
    })
    const res = await data.json();

    return res;
}
