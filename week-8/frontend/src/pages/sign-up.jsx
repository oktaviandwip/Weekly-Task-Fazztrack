import { Link } from "react-router-dom";
import Icon from "../components/Login/Icon.jsx";
import Background from "../components/Login/Background.jsx";
import numberOne from "../assets/number-1.svg";
import numberTwo from "../assets/number-2.svg";
import numberThree from "../assets/number-3.svg";
import stripe from "../assets/stripe.svg";
import EmailPassword from "../components/Login/EmailPassword.jsx";
import Button from "../components/Login/Button.jsx";
import GoogleFb from "../components/Login/GoogleFb.jsx";

const signIn = () => {
  return (
    <Background>
      <Icon />
      <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md w-[327px] h-[535px] md:w-[546px] md:h-[756px] mt-12 md:mt-5">
        <section className="w-[284px] h-[450px] md:w-[400px] md:h-[667px] flex flex-col justify-between">
          <div className="hidden md:flex justify-between w-[397px] text-sm mb-[46px]">
            <div className="flex flex-col justify-between items-center h-[75px]">
              <img src={numberOne} alt="number 1" />
              <p>Fill Form</p>
            </div>
            <img src={stripe} alt="Stripe" />
            <div className="flex flex-col justify-between items-center h-[75px]">
              <img src={numberTwo} alt="number 2" />
              <p className="text-dark-grey">Activate</p>
            </div>
            <img src={stripe} alt="stripe" />
            <div className="flex flex-col justify-between items-center h-[75px]">
              <img src={numberThree} alt="number 1" />
              <p className="text-dark-grey">Done</p>
            </div>
          </div>

          <form className="w-[100%] h-[274px] md:h-[360px] flex flex-col justify-between">
            <EmailPassword />

            <div className="hidden md:flex items-center mt-8 mb-6">
              <input
                type="checkbox"
                id="terms-conditions"
                className="w-5 h-5 mr-6"
                required
              />
              <label
                htmlFor="terms-conditions"
                className="text-lg text-darkest-grey font-mulish tracking-[0.75px]"
              >
                I agree to terms & conditions
              </label>
            </div>

            <Button text="Join For Free Now" />
          </form>

          <p className="text-darkest-grey text-center tracking-[0.5px] font-inter md:font-semibold mt-6">
            Already have an account?{" "}
            <Link to="./sign-in.html" className="text-blue underline">
              Log in
            </Link>
          </p>

          <GoogleFb />
        </section>
      </div>
    </Background>
  );
};

export default signIn;
