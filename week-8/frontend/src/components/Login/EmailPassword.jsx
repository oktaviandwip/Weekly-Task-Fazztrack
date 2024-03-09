import hidePassword from "../../assets/hide-password.svg";

const EmailPassword = () => {
  return (
    <div className="h-[178px] md:h-[219px]">
      <label htmlFor="email" className="block font-medium text-semi-black">
        Email
      </label>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        className="w-full h-[50px] md:h-16 mt-3 px-4 border border-grey outline-none rounded bg-lighter-grey  text-darker-grey tracking-[0.75px] placeholder:text-dark-grey"
        required
      />

      <div className="relative mt-[25px]">
        <label htmlFor="password" className="block font-medium text-semi-black">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="w-full h-[50px] md:h-16 mt-3 px-4 border border-grey outline-none rounded bg-lighter-grey  text-darker-grey tracking-[0.75px] placeholder:text-dark-grey"
          required
        />
        <img
          src={hidePassword}
          className="absolute top-[52px] md:top-[60px] right-[22px]"
        />
      </div>
    </div>
  );
};

export default EmailPassword;
