import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import MovieNavBar from "../components/MovieNavbar";
import { Form,Button } from "react-bootstrap";
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
        <MovieNavBar /> 
    <Form className="position-absolute top-50 start-50 translate-middle border border-primary border border-4 bg-success bg-gradient " onSubmit={loginHandler}>
      <Form.Group className="mb-3 w-250 p-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" ref={email} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 w-250 p-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  ref={password} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  
    
    </>
    
  );
};
export default Login;
