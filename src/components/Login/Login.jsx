import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../UserContext/UserContext";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if ((email, password)) {
      signIn(email, password)
        .then((res) => {
          const user = res.user;
          form.reset();
          navigate("/home");
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <h2 className="text-3xl text-blue-700 font-serif font-semibold mb-6">
            Please login now !!
          </h2>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={submitHandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="/" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control my-3">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <p>
                  If you don't have an account? Please{" "}
                  <Link className="btn btn-link" to={"/resister"}>
                    Resister Now
                  </Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
