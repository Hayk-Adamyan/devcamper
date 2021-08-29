import "./Login.css";
const Login = () => {
  const LoginUser = () => {
    alert("ok");

  };
  return (
    <div className="loginDiv" activeClassName="active">
      <div>
        <div className="slaq">
          <div className="sl">
            <img src="./../icon/5.png" />
          </div>
          <div className="aq">
            <img src="./../icon/6.png" />
          </div>
          <span className="pLogin">Login</span>
          <p>
            Log in to list your bootcamp or rate, review and favorite
            <br /> bootcamps
          </p>
          <span className="span">Email Address</span>
          <input type ="text" placeholder="Enter Email"  />
          <span className="span">Password</span>
          <input type="password" placeholder="Enter Password" />
          <button type="submit" onClick={LoginUser}>
            Login
          </button>
          <span>Forgot Password?</span>
          <span className="orangeSpan">Reset Password</span>
        </div>
      </div>
    </div>
  );
};
export default Login;
