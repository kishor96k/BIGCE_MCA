import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../Login/Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // error validation main object
  const [errors, setErrors] = useState({ email: "", password: "" });
  // button disabled/enabled
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = validateEmail(email) === "" && validatePassword(password) === "";
    setIsFormValid(isValid);
  }, [email, password]);

  // email onchange
  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setErrors((previous) => ({
      ...previous,
      email: validateEmail(emailValue),
    }));
  };

  // password onchange
  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setErrors((previous) => ({
      ...previous,
      password: validatePassword(passwordValue),
    }));
  };

  // email validation
  const validateEmail = (email) => {
    if (!email) {
      return "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email is not valid";
    }
    return "";
  };

  // password validation
  const validatePassword = (password) => {
    if (!password) {
      return "Password is required";
    } else if (password.length < 7 || password.length > 12) {
      return "Password must be between 7 to 12 characters";
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password)) {
      return "Password must contain at least one uppercase letter, one lowercase letter, one symbol, and one number";
    }
    return "";
  };

  // on form submit
  const loginsubmit = (e) => {
    e.preventDefault();
    const emailErrors = validateEmail(email);
    const passwordErrors = validatePassword(password);

    setErrors({
      email: emailErrors,
      password: passwordErrors,
    });

    if (emailErrors || passwordErrors) {
      return;
    }

    console.log("Form submitted", { email, password });

    // clear fields after submission
    setEmail("");
    setPassword("");
    setErrors({ email: "", password: "" });
  };

  return (
    <>
      <section className="form-02-main">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="_lk_de">
                <div className="form-03-main">
                  <div className="row p-5">
                    <div className="card-body p-4 p-lg-2 text-black">
                      <form onSubmit={loginsubmit}>
                        <div className="d-flex justify-content-center mb-4">
                          <span className="h1 fw-bold mb-0">LOGIN</span>
                        </div>
                        <div className="d-flex justify-content-center">
                          <h5
                            className="fw-normal mb-3 pb-3"
                            style={{ letterSpacing: "1px" }}
                          >
                            Sign into your account
                          </h5>
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form2Example17">
                            Email address
                          </label>
                          <input
                            type="text"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Email"
                          />
                          {errors.email && (
                            <div className="error text-danger">{errors.email}</div>
                          )}
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form2Example27">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Password"
                          />
                          {errors.password && (
                            <div className="error text-danger">{errors.password}</div>
                          )}
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="_btn_04"
                            type="submit"
                            disabled={!isFormValid}
                          >
                            Login
                          </button>
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                          <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                            <b>Don't have an account?</b>{" "}
                            <Link to="/registration" style={{ color: "#393f81" }}>
                              <b>Register here</b>
                            </Link>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
