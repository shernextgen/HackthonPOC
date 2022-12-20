import { useForm } from "react-hook-form";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Form() {
  const [dateError, setError] = useState('');
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
    !data.date || data.date.length === 0 ? setError("Required") : setError('')

  }
  const onChange = (e, errors) => {
    console.log("erro", errors);
    setError('');
    const currentYear = new Date().getFullYear();
    const year = e.target.value.split("-")[0];
    const age = currentYear - year;
    console.log("age", age)
    if (age < 18) setError("Invalid age");
  }
  return (
    <div className="container reg-container">
      <div className="welcome-text">Welcome! Start Your Registration Process</div>
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
          <label for="date">Date Of Birth</label>
          <input className="form-control"
            type="date"
            placeholder="Enter Date Of Birth"
            {...register("date")}
            aria-invalid={errors.date ? "true" : "false"}
            onChange={(e) => onChange(e, errors.date)}
          />
          {dateError && dateError.length && <small className="form-text text-danger">{dateError}</small>}
        </div>
        <div className="form-group">
          <label for="mail">Email</label>
          <input className="form-control"
            placeholder="Enter email address"
            {...register("mail", { required: "Email Address is required" })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
          {errors.mail && <small className="form-text text-danger">{errors.mail?.message}</small>}
        </div>
        <div className="form-group">
          <label for="qualification">Highest Qualification</label>
          <input className="form-control"
            placeholder="Enter highest qualification"
            {...register("qualification", { required: "Highest Qualification is required" })}
            aria-invalid={errors.qualification ? "true" : "false"}
          />
          {errors.qualification && <small className="form-text text-danger">{errors.qualification?.message}</small>}
        </div>
        <div className="form-group">
          <label for="title">Title</label>
          <input className="form-control"
            placeholder="Enter title"
            {...register("title", { required: true })}
            aria-invalid={errors.title ? "true" : "false"}
          />
          {errors.title?.type === 'required' && <small className="form-text text-danger">Title is required</small>}
        </div>
        <div className="form-group">
          <label for="address">Address</label>
          <textarea className="form-control"
            placeholder="Enter address"
            {...register("address", { required: "Address is required" })}
            aria-invalid={errors.address ? "true" : "false"} ></textarea>
        </div>
        <input type="submit" className="btn btn-primary" disabled={dateError.length} value="Register" />
      </form>
    </div>
  );
}