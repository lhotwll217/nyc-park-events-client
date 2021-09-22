import Login from "./Login"
import Signup from "./Signup"


function AuthPage({onLogin}){

return (
    <div style={{margin: "auto"}}>
    <Login onLogin={onLogin}/>
    <Signup onLogin={onLogin}/>
    </div>

)

}

export default AuthPage