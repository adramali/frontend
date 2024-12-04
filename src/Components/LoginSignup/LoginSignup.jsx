// // // import React, { useState } from 'react';
// // // import './LoginSignup.css';

// // // import user_icon from '../Assets/person.png';
// // // import password_icon from '../Assets/password.png';
// // // import email_icon from '../Assets/email.png';

// // // const LoginSignup = () => {

// // //   const [action,setAction] = useState("Login");

// // //   return (
// // //     <div className='container'>
// // //       <div className='header'>
// // //         <div className='text'>{action}</div>
// // //         <div className='underline'></div>
// // //       </div>
// // //       <div className='inputs'>
// // //         {action==="Login"?<div></div>:<div className='input'>
// // //           <img src={user_icon} alt='' />
// // //           <input type='text' placeholder='Name'/>
// // //         </div>}

// // //         <div className='input'>
// // //           <img src={email_icon} alt='' />
// // //           <input type='email' placeholder='Email ID'/>
// // //         </div>

// // //         <div className='input'>
// // //           <img src={password_icon} alt='' />
// // //           <input type='password' placeholder='Password'/>
// // //         </div>
// // //       </div>
// // //       {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span> Click Here!</span></div>}
      
// // //       <div className='submit-container'>
// // //         <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
// // //         <div className={action==="Login"?"submit gray":"submit"} onclick={()=>{setAction("Login")}}>Login</div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default LoginSignup;

// // import React, { useState } from 'react';
// // import './LoginSignup.css';

// // import user_icon from '../Assets/person.png';
// // import password_icon from '../Assets/password.png';
// // import email_icon from '../Assets/email.png';

// // const LoginSignup = () => {
// //   const [action, setAction] = useState("Login");

// //   const handleButtonClick = (newAction) => {
// //     setAction(newAction);
// //   };

// //   return (
// //     <div className='container'>
// //       <div className='header'>
// //         <div className='text'>{action}</div>
// //         <div className='underline'></div>
// //       </div>
// //       <div className='inputs'>
// //         {action === "Login" ? <div></div> : <div className='input'>
// //           <img src={user_icon} alt='' />
// //           <input type='text' placeholder='Name' />
// //         </div>}

// //         <div className='input'>
// //           <img src={email_icon} alt='' />
// //           <input type='email' placeholder='Email ID' />
// //         </div>

// //         <div className='input'>
// //           <img src={password_icon} alt='' />
// //           <input type='password' placeholder='Password' />
// //         </div>
// //       </div>
// //       {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password? <span> Click Here!</span></div>}

// //       <div className='submit-container'>
// //         <button
// //           className={action === "Sign Up" ? "submit gray" : "submit"}
// //           onClick={() => handleButtonClick("Sign Up")}
// //           onKeyPress={(e) => e.key === "Enter" && handleButtonClick("Sign Up")}
// //         >
// //           Sign Up
// //         </button>
// //         <button
// //           className={action === "Login" ? "submit gray" : "submit"}
// //           onClick={() => handleButtonClick("Login")}
// //           onKeyPress={(e) => e.key === "Enter" && handleButtonClick("Login")}
// //         >
// //           Login
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginSignup;

// import React, { useState } from 'react';
// import './LoginSignup.css';

// import user_icon from '../Assets/person.png';
// import password_icon from '../Assets/password.png';
// import email_icon from '../Assets/email.png';
// import phone_icon from '../Assets/phone.png'; // Add icon for phone
// import dob_icon from '../Assets/dob.png'; // Add icon for Date of Birth
// import confirm_password_icon from '../Assets/confirm_password.png'; // Add icon for Confirm Password

// const LoginSignup = () => {
//   const [action, setAction] = useState("Login");

//   const handleButtonClick = (newAction) => {
//     setAction(newAction);
//   };

//   return (
//     <div className='container'>
//       <div className='header'>
//         <div className='text'>{action}</div>
//         <div className='underline'></div>
//       </div>
//       <div className='inputs'>
//         {/* Show Name input for Sign Up */}
//         {action === "Login" ? <div></div> : (
//           <div className='input'>
//             <img src={user_icon} alt='' />
//             <input type='text' placeholder='Full Name' />
//           </div>
//         )}

//         {/* Show Email input */}
//         <div className='input'>
//           <img src={email_icon} alt='' />
//           <input type='email' placeholder='Email ID' />
//         </div>

//         {/* Show Phone Number input for Sign Up */}
//         {action === "Sign Up" && (
//           <div className='input'>
//             <img src={phone_icon} alt='' />
//             <input type='text' placeholder='Phone Number' />
//           </div>
//         )}

//         {/* Show Date of Birth input for Sign Up */}
//         {action === "Sign Up" && (
//           <div className='input'>
//             <img src={dob_icon} alt='' />
//             <input type='date' placeholder='Date of Birth' />
//           </div>
//         )}

//         {/* Show Password input */}
//         <div className='input'>
//           <img src={password_icon} alt='' />
//           <input type='password' placeholder='Password' />
//         </div>

//         {/* Show Confirm Password input for Sign Up */}
//         {action === "Sign Up" && (
//           <div className='input'>
//             <img src={confirm_password_icon} alt='' />
//             <input type='password' placeholder='Confirm Password' />
//           </div>
//         )}
//       </div>

//       {/* Forgot password link is only shown for Login */}
//       {action === "Sign Up" ? <div></div> : (
//         <div className="forgot-password">
//           Lost Password? <span> Click Here!</span>
//         </div>
//       )}

//       <div className='submit-container'>
//         <button
//           className={action === "Sign Up" ? "submit gray" : "submit"}
//           onClick={() => handleButtonClick("Sign Up")}
//           onKeyPress={(e) => e.key === "Enter" && handleButtonClick("Sign Up")}
//         >
//           Sign Up
//         </button>
//         <button
//           className={action === "Login" ? "submit gray" : "submit"}
//           onClick={() => handleButtonClick("Login")}
//           onKeyPress={(e) => e.key === "Enter" && handleButtonClick("Login")}
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;

import React, { useState } from 'react';
import './LoginSignup.css';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaBirthdayCake } from 'react-icons/fa';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    dob: '',
    password: '',
    confirmPassword: '', // Add confirmPassword field
  });
  const [signupMessage, setSignupMessage] = useState('');
  const [signupError, setSignupError] = useState('');

  const handleButtonClick = (newAction) => {
    setAction(newAction);
    setSignupMessage('');  // Clear message when switching actions
    setSignupError('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent form from reloading the page

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setSignupError('Passwords do not match!');
      setSignupMessage('');
      return;
    }

    if (action === "Sign Up") {
      console.log("Submitting form with data:", formData); // Add this log to verify data is correct
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        console.log('Response:', response); // Add this log to verify the response from the backend

        if (!response.ok) {
          const result = await response.json();
          setSignupMessage('');
          setSignupError(result.message || 'Signup failed. Please try again.');
        } else {
          const result = await response.json();
          setSignupMessage(result.message);
          setSignupError('');
        }
      } catch (error) {
        console.error('Error during signup:', error);
        setSignupMessage('');
        setSignupError('An error occurred while submitting the form. Please try again later.');
      }
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          {action === "Sign Up" && (
            <div className='input'>
              <FaUser className='icon' />
              <input
                type='text'
                name='full_name'
                placeholder='Full Name'
                value={formData.full_name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className='input'>
            <FaEnvelope className='icon' />
            <input
              type='email'
              name='email'
              placeholder='Email ID'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {action === "Sign Up" && (
            <div className='input'>
              <FaPhone className='icon' />
              <input
                type='tel'
                name='phone_number'
                placeholder='Phone Number'
                value={formData.phone_number}
                onChange={handleChange}
                required
              />
            </div>
          )}

          {action === "Sign Up" && (
            <div className='input'>
              <FaBirthdayCake className='icon' />
              <input
                type='date'
                name='dob'
                placeholder='Date of Birth'
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className='input'>
            <FaLock className='icon' />
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Add Confirm Password field */}
          {action === "Sign Up" && (
            <div className='input'>
              <FaLock className='icon' />
              <input
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          )}
        </div>

        {action === "Sign Up" ? null : (
          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>
        )}

        <div className='submit-container'>
          <button
            type='submit'
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => handleButtonClick("Sign Up")}
          >
            Sign Up
          </button>
          <button
            type='button'
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => handleButtonClick("Login")}
          >
            Login
          </button>
        </div>
      </form>

      {signupMessage && (
        <div className="signup-message success">{signupMessage}</div>
      )}

      {signupError && (
        <div className="signup-message error">{signupError}</div>
      )}
    </div>
  );
};

export default LoginSignup;
