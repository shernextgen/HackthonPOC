import { useForm } from "react-hook-form";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Login() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [invalidInp, setInvalidInp] = useState("")
  const onSubmit = (data) => {
    console.log(data);
    if (data.userName === 'admin' && data.password === 'admin') {
      window.location.assign("/register");
      setInvalidInp("")
    } else {
      setInvalidInp("Invalid credentials")
    }
  }

  return (
    <div className="container reg-container">
      <div className="welcome-text">Log In</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label for="userName">User Name</label>
          <input className="form-control"
            placeholder="Enter user name"
            {...register("userName", { required: true })}
            aria-invalid={errors.userName ? "true" : "false"}
          />
          {errors.userName?.type === 'required' && <small className="form-text text-danger">Username is required</small>}
        </div>
        <div className="form-group">
          <label for="date">Password</label>
          <input className="form-control"
            type="password"
            placeholder="Enter password"
            {...register("password", { required: true })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password?.type === 'required' && <small className="form-text text-danger">Password is required</small>}
        </div>
        {invalidInp && invalidInp.length && <div className="mb-3"><small className="form-text text-danger">{invalidInp}</small></div>}
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
    </div>
  );
}