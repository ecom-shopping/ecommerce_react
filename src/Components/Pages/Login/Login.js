import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <>
      <section>
        <div className="login__container">
          <div className="login__form">
            <h1>Login</h1>
            <form action="">
              <input type="email" placeholder="Email" required />
              <input
                type="password"
                name=""
                id=""
                placeholder="password"
                required
              />

              <button className="log__btn">Login</button>
            </form>

            <Link to="/register" className="crt__link">
              Create account
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
