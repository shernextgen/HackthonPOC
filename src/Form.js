import { useForm } from "react-hook-form";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Form() {
  const [dateError, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
    !data.date || data.date.length === 0 ? setError("Required") : setError('')

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "user_name": data.userName,
        "dob": data.date,
        "high_qualification": data.qualification,
        "title": data.title,
        "address": data.address,
        "email": data.email,
        "user_image": "",
        "user_is_admin": true
      })
    };
    setIsSuccess(true);
    // fetch('', requestOptions)
    //     .then(response => response.json())
    //     .then(data => {console.log("result:", data); setPostId(data.id)});

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
      {isSuccess ? <div className="welcome-text">Complete your registration by clicking <br></br> on the activation link sent to your <br></br>registered email address.</div> :
        <><div className="welcome-text">Welcome! Start Your Registration Process</div>
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
          </form></>
      }
    </div>
  );
}