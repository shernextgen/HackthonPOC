import { useForm } from "react-hook-form";
import {useState} from 'react';
export default function App() {
    const [dateError,setError]=useState('');
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    data.date.length===0?setError("Required"):setError('')
  
    }
  const onChange = (e,errors) => {
    console.log("erro",errors);
    setError('');
    const currentYear = new Date().getFullYear();
    const year = e.target.value.split("-")[0];
    const age = currentYear - year;
    console.log("age",age)
    if (age < 18) setError("Invalid age");
}
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input 
        {...register("userName", { required: true })} 
        aria-invalid={errors.userName ? "true" : "false"} 
      />
      {errors.userName?.type === 'required' && <p role="alert">Username is required</p>}
    <input 
      type="date"
        {...register("date")} 
        aria-invalid={errors.date ? "true" : "false"} 
        onChange={(e)=>onChange(e,errors.date)}
      />
    
      {dateError && dateError.length && <p role="alert">{dateError}</p>}
      <input 
        {...register("mail", { required: "Email Address is required" })} 
        aria-invalid={errors.mail ? "true" : "false"} 
      />
      {errors.mail && <p role="alert">{errors.mail?.message}</p>}
      <input 
        {...register("title", { required: true })} 
        aria-invalid={errors.title ? "true" : "false"} 
      />
      {errors.title?.type === 'required' && <p role="alert">Titlea is required</p>}
      <textarea {...register("address", { required: "Address is required" })} 
        aria-invalid={errors.address ? "true" : "false"} ></textarea>
      <input type="submit" disabled={dateError.length}/>
    </form>
  );
}