const url = 'https://affirbisiaks.herokuapp.com';

export async function deleteUser(userInfo) {
    const data = await fetch(`${url}/api/v1/users/${userInfo.id}`, {
        method: 'DELETE',
        credentials: 'include', 
        headers: {
            'Access-Control-Allow-Origin': '*', 
            'Access-Control-Allow-Credentials': true 
        },
        body: JSON.stringify(userInfo)
    })
    const res = await data.json();

    return res;
}
