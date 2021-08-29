import "./Register.css";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from "../../store/actions/user";
const Register = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(
      setUserInfo({
        ...userInfo,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <div className="loginDiv" activeClassName="active">
      <div>
        <div className="register">
          <div className="profIcon">
            <img src="./../icon/7.png" />
          </div>
          <span className="pRegist">Register</span>
          <p className="text">
            Register to list your bootcamp or rate, review and favorite
            bootcamps
            <br />
          </p>
          <span className="span">Name</span>
          <input
            onChange={handleChange}
            value={userInfo.name}
            name="name"
            placeholder="Enter Full Name"
          />
          <span className="span">Email Address</span>
          <input
            onChange={handleChange}
            value={userInfo.email}
            name="email"
            placeholder="Enter Email"
          />
          <span className="span">Password</span>
          <input
            onChange={handleChange}
            value={userInfo.password}
            name="password"
            placeholder="Enter Password"
          />
          <span className="span">Confirm Password</span>
          <input
            onChange={handleChange}
            value={userInfo.c_password}
            name="c_password"
            placeholder=" Confirm Password"
          />
          <div className="checkbox">
            <p>User Role</p>
            <input type="radio" className="radio1" name="check" />
            <label for="Regular ">
              Regular User (Browse, Write reviews, etc)
            </label>
            <br />
            <input type="radio" className="radio2" name="check" />
            <label>Bootcamp Publisher</label>
          </div>

          <div className="regP">
            <p>
              * You must be affiliated with the bootcamp in some way
              <br />
              in order to add it to DevCamper.
            </p>
          </div>

          <button
            onClick={() =>
              localStorage.setItem("user", JSON.stringify(userInfo))
            }
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
export default Register;
