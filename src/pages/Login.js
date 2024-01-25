import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
const Login = () => {
  const email = useRef();
  const password = useRef();

  const history = useHistory();
  const loginHandler = async (e) => {
    e.preventDefault();
    const loginData = {
      email: email.current.value,
      password: password.current.value,
    };
    try {
      const response = await axios.post(
        "https://api.dynoacademy.com/test-api/v1/login",
        loginData,
        {
          timeout: 10000,
        }
      );
      //   alert(response.data.message);
      const getAccessToken = response.data.accessToken;
      localStorage.setItem("accessToken", getAccessToken);
      if (response.data.status === "success") {
        alert("logged in success");
      }

      history.replace("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.errors[0].message);
      } else {
        alert("unknown error try again boy");
      }
    }
  };

  return (
    <>
      <form onSubmit={loginHandler}>
        Login screen Email:
        <br />
        <input type="text" ref={email} placeholder="username" />
        <br /> <br />
        Password:
        <br />
        <input type="password" ref={password} placeholder="password" />
        <button>submit</button>
      </form>
    </>
  );
};
export default Login;
