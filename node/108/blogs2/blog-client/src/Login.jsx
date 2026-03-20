import "./login.css";
import useForm from "./useForm";

export default function Login(props) {
  const { setUserName } = props;

  const [formData, setformData] = useForm({
    userName: "",
    password: "",
  });
  async function login(e) {
    if (e) e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      setUserName(formData.userName);
    } catch (e) {
      console.log(e);
    }
  }

  async function register(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }
      await login();
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <form id="login" onSubmit={login}>
      <label>
        name:{" "}
        <input
          name="userName"
          required
          value={formData.userName}
          onChange={setformData}
        />
      </label>
      <label>
        password:{" "}
        <input
          type="password"
          name="password"
          required
          value={formData.password}
          onChange={setformData}
        />
      </label>
      <button>Login</button>

      <button type="button" onClick={register}>
        Register
      </button>
    </form>
  );
}
