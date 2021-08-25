const url = 'https://affirbisiaks.herokuapp.com';

export async function update(userInfo) {
    console.log(userInfo);
    const data = await fetch(`${url}/api/v1/users/${userInfo.googleId}`, {
        method: 'PATCH',
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