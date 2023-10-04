import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

function RegisterForm() {
    const [isLoading, setisLoading] = useState(false);
    const [error, setError] = useState(null)
    //const [data, setData] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    const navigateToHome = () => {
        setTimeout(() => {
            navigate({to: "/login"});
        }, 2000)
    };
    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const {email, password, name, avatar, banner } = event.target.elements;

        const payload = {
            name: name.value,
            email: email.value,
            password: password.value,
            avatar: avatar?.value,
            banner: banner?.value,
        };

        try {
            const res = await fetch (
                "https://api.noroff.dev/api/v1/social/auth/register",
                {
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );

       /* 
       const data = await res.json()
       */
        
        localStorage.setItem("email", email.value);
        /*
        setData(data);
        */
        setIsSuccess(res.ok)
        navigateToHome();
        } catch (error){
            console.warn("An error occoured", error);
            setError(error)
        } finally {
            setisLoading(false);
        }
    };

        if (error) return <div>Oh no, something is wrong: {error?.message}</div>;

        return (
            <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 bg-white lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="w-auto h-10 mx-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {isSuccess ? (
          <section>
            <p className="text-center text-green-900">
              👋 Hi {localStorage.getItem("email")}. You will now redirect to
              the login page!
            </p>
          </section>
        ) : (
          <form className="space-y-6" onSubmit={handleOnSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>

              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  defaultValue={`RandomUser_${Math.floor(
                    Math.random() * 10000000,
                  )}`}
                  className="px-1 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Avatar
              </label>

              <div className="mt-2">
                <input
                  id="avatar"
                  name="avatar"
                  type="file"
                  autoComplete="avatar"
                  className="px-1 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="banner"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Banner
              </label>

              <div className="mt-2">
                <input
                  id="banner"
                  name="banner"
                  type="file"
                  className="px-1 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>

              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  defaultValue={`${Math.floor(
                    Math.random() * 10000000,
                  )}-last@stud.noroff.no`}
                  className="px-1 block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>

              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  defaultValue="UzI1NiIsInR5cCI"
                  className="block w-full rounded-md border-0 px-1 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                disabled={isLoading}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {isLoading ? "Registering" : "Sign up"}
              </button>
            </div>
          </form>
        )}

        <p className="mt-10 text-sm text-center text-gray-500">
          Already a member?{" "}
          <a
            href="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
            
        );


}




export default RegisterForm