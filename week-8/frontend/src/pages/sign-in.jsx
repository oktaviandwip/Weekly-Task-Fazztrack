import Icon from "../components/Login/Icon.jsx";
import Background from "../components/Login/Background.jsx";
import EmailPassword from "../components/Login/EmailPassword.jsx";
import Button from "../components/Movies/Button.jsx";
import GoogleFb from "../components/Login/GoogleFb.jsx";

const signIn = () => {
  return (
    <div className="mt-[-104px]">
      <Background>
        <Icon />
        <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-md w-[327px] h-[614px] md:w-[546px] md:h-[756px] mt-12 md:mt-5">
          <section className="w-[284px] h-[527px] md:w-[400px] md:h-[609px] flex flex-col justify-between">
            <div className="welcome-back">
              <p className="title text-[20px] md:text-[32px] md:font-bold tracking-[0.3%] md:tracking-[1px]">
                Welcome Back 👋
              </p>
              <p className="text-[13px] md:text-lg text-dark-grey font-inter my-4 md:my-5 tracking-[0.2px]">
                Sign in with your data that you entered during your registration
              </p>
            </div>

            <form className="w-[100%]">
              <EmailPassword />

              <p className="text-sm md:text-base text-blue text-right font-inter mt-10 mb-[25px] md:my-5 tracking-[0.5px]">
                Forgot your password?
              </p>

              <Button text={"Login"} width={"full"} height={"[56px]"} />
            </form>

            <GoogleFb />
          </section>
        </div>
      </Background>
    </div>
  );
};

export default signIn;
