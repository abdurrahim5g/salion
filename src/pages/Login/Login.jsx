import { Link } from "react-router-dom";
import "./Login.css";
import googleIcon from "./google-icon.png";
import logo from "./logo.png";

const Login = () => {
  return (
    <section className="login-page py-12">
      <div className="container">
        <div className="row">
          <div className="site-logo w-[200px] mx-auto mb-8">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          <div className="auth-container ">
            <div className="auth-form border-[1px] py-8 px-8 rounded-lg shadow-md">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                Login now
              </h3>
              <form>
                <div className="single-input">
                  <input
                    className="border-0 border-b-[1px] py-2 w-full border-gray-400 mb-6 outline-none"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="single-input">
                  <input
                    className="border-0 border-b-[1px] py-2 w-full border-gray-400 mb-6 outline-none"
                    type="password"
                    name="pass"
                    id="pass"
                    placeholder="Password"
                  />
                </div>

                <div className="single-input">
                  <button className="btn btn-primary w-full text-center py-3 text-white rounded-lg hover:shadow-lg transition">
                    Login Now
                  </button>
                </div>
              </form>

              <p className="mt-4 text-center">
                Do not have account?{" "}
                <Link to="/signup" className="text-primary">
                  Create an account
                </Link>
              </p>
            </div>

            <div className=" w-10/12 mx-auto">
              <div className="divider my-8">OR</div>

              <div className="google-login">
                <button className="flex w-full items-center border rounded-full p-2">
                  <img src={googleIcon} alt="Google Icon" />
                  <span className="flex-grow  text-center">
                    Continue with Google
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
