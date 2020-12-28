const LoginPage = () => {
  return (
    <div className="card grid grid-cols-1 gap-4">
      <div className="formAvatar  justify-self-center">
        <svg className="h-32 w-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <label className="block">
        <span className="sr-only">Email Address</span>
        <input type="email" className="w-full" placeholder="Email" required />
      </label>
      <label className="block">
        <span className="sr-only">Password</span>
        <input type="password" className="w-full" placeholder="Password" required />
      </label>
      <label className="block">
        <input type="checkbox" checked />
        <span className="text-sm">Remember Me</span>
      </label>
      <button className="btn justify-self-start" type="submit">
        Sign In
      </button>
      <a href="#" className="text-sm text-gray-400">
        Forgot Password?
      </a>
    </div>
  );
};

export default LoginPage;
