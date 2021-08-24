const url = 'https://affirbisiaks.herokuapp.com';
export async function signup(userInfo) {
    const data = await fetch(`${url}/api/v1/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
    .then(response => response.json())
    return data;
}