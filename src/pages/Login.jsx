import ExampleLoginForm from "../components/example-login-form";

function LoginPage() {
  return (
    <>
      <ExampleLoginForm />
      (function () {
        console.log("this function is called as soon as the function is defined")
      })();
    </>
  );
}

export default LoginPage;
