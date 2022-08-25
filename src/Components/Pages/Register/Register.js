import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <>
      <section>
        <div className="register__container">
          <div className="register__form">
            <h1>Create your account</h1>
            <form action="">
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input
                type="password"
                name=""
                id=""
                placeholder="password"
                required
              />
              <input
                type="password"
                name=""
                id=""
                placeholder="confirm password"
                required
              />
              <button className="register__btn">Register</button>
            </form>

            <p>
              I Have already account{" "}
              <Link to="/login" className="log__link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
