
function Logout({onLogout}) {

    async function logOutClick() {
        let res = await fetch('http://localhost:3000/logout', {
           method: 'DELETE' 
        })
        if (res.ok) {onLogout()}
    
    }


return (
<button onClick = {logOutClick}>Logout</button>
)

}

export default Logout