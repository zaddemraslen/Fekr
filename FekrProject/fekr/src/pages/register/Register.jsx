import "./register.css"

export default function Register() {
  return (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">Lamasocial</h3>
                <span className="registerDesc">
                    Connect with friends and the world around you with Lamasocial.{" "}
                </span>
            </div>
            <div className="loginRight">
                <div className="registerBox">
                    <input placeholder="Username" className="RegisterInput" />
                    <input placeholder="Password" className="RegisterInput" />
                    <input placeholder="Password" className="RegisterInput" />
                    <input placeholder="Confirm password" className="RegisterInput" />
                    <button className="signupButton">Sign Up</button>
                    <button className="logIntoButton">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
