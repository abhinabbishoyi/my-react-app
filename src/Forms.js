// function MyForm() {
//     return (
//       <form>
//         <label>Enter your name:
//           <input type="text" />
//         </label>
//       </form>
//     )
//   }
import {useState} from "react";
// function MyForm() {
//     const [name, setName] = useState("");
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       alert(`The name you entered was: ${name}`)
//     }
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <label>Enter your name:
//           <input 
//             type="text" 
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <input type="submit" />
//       </form>
//     )
//   }


function MyForm() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      console.log(name, value);
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs.username +"\n" + inputs.age);
      console.log(inputs);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Enter your name:
        <input 
          type="text" 
          name="username" 
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        </label>
        <label>Enter your age:
          <input 
            type="number" 
            name="age" 
            value={inputs.age || ""} 
            onChange={handleChange}
          />
          </label>
          <input type="submit" />
      </form>
    )
  }
  export default MyForm;