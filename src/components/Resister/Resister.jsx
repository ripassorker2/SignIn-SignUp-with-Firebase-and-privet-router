import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../UserContext/UserContext";

const Resister = () => {
  const { createUser, googleSignIn } = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const form = event.target;
    // const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        form.reset();
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <h2 className="text-3xl text-blue-700 font-serif font-semibold mb-6">
            Please resister now !!
          </h2>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={submitHandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="form-control my-3">
                <button className="btn btn-primary">Resister</button>
              </div>
              <div>
                <p>
                  If you have an account? Please{" "}
                  <Link className="btn btn-link" to={"/login"}>
                    Login now !!
                  </Link>{" "}
                </p>
              </div>
            </form>
            <div>
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-secondary w-full"
              >
                Sign up with Google !!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resister;
