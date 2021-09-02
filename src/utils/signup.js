const url = 'https://affirbisiaks.herokuapp.com';

export async function signup(userInfo) {
    const data = await fetch(`${url}/api/v1/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', 
            'Access-Control-Allow-Credentials': true 
        },
        body: JSON.stringify(userInfo)
    })
    const res = await data.json();

    return res;
}
