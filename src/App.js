import React, {useState} from 'react'
import FormInputs from "./components/formInputs"
import "./App.css"

const App = () => {

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [values, setValues] = useState({
    firstname:"",
    lastname:"",
    Email:"",
    password:"",
    confirmPassword:""
  })

  const inputs = [
    {
      id:1,
      name:"firstname",
      type:"text",
      placeholder:"Firstname",
      errorMessage:"please enter your first name",
      label:"Firstname",
      required:true
    },
    {
      id:2,
      name:"lastname",
      type:"text",
      placeholder:"Lastname",
      errorMessage:"please enter your first name",
      label:"Lastname",
      required:true
    },
    {
      id:3,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"please enter a valid email address",
      label:"Email",
      required:true
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"please enter atleast 8 characters with number, symbol ",
      label:"Password",
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required:true
    },
    {
      id:5,
      name:"confirmpassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"password don't match",
      label:"Confirm Password",
      pattern:values.password,
      required:true
    }
  ]


  const handleSubmit = (event) => {

    event.preventDefault();
      setIsSubmitting(true);
    
    setValues({
      firstname:"",
      lastname:"",
      Email:"",
      password:"",
      confirmPassword:""
    })

  };
  

  const onChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value});
  }


  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        {inputs.map((input) => (
          <FormInputs
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            isSubmitting={isSubmitting}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App


