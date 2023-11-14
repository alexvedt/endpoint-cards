import "./App.css";
import ExampleRegisterForm from "./components/example-login-form";

function App() {
  return (
    <>
      <header></header>

      <main>
        <h1 id="h1">Hi</h1>
        <button data-testid="btn" id="btn">
          Hi
        </button>
        <ExampleRegisterForm />
      </main>

      <footer>
        <small>Created with ❤️ by Monde</small>
      </footer>
    </>
  );
}

export default App;
