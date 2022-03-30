import { Form } from "react-bootstrap";
import { loginFormOptions } from "../assets/options/loginFormOptions";

// const form = {
//   email: "",
//   password: "",
// }


const LoginPage = () => {
console.log('LoginPage');

  return (
    <Form
      options={loginFormOptions}
      // cbOnSubmit={null}
      // initialFormValue={form}
    />
  )
}
 
export default LoginPage;