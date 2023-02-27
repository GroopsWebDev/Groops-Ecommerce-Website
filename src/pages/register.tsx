import React from 'react';
import { useRouter } from 'next/router';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import bcrypt from 'bcryptjs';

const Register = () => {
    const router = useRouter();
  
    const formStyle = {
      display: 'flex',
      flexDirection: 'column' as const,
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px'
    };
  
    const labelStyle = {
      marginBottom: '5px'
    };
  
    const inputStyle = {
      padding: '5px 10px',
      marginBottom: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      width: '100%',
    };
  
    const buttonStyle = {
      padding: '10px',
      backgroundImage: 'linear-gradient(to right, #9b59b6,#e74c3c 50%, #f39c12)',
      color: '#fff',
      borderRadius: '5px',
      border: 'none',
      cursor: 'pointer',
      marginTop:"50px"
    };
    const checkboxStyle = {
      marginRight: '5px'
    };
  
    const schema = Yup.object().shape({
      firstname: Yup.string().required('First name is required'),
      lastname: Yup.string().required('Last name is required'),
      email: Yup.string().required('Email is required').email('Invalid email'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords do not match')
        .required('Confirm password is required'),
      terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
    });
  
    const { control, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema),
      mode: 'onBlur',
    });
  
    async function  onSubmit (data :any) {
      const hashedPassword = await bcrypt.hash(data.password, 10);
      data.password = hashedPassword;

      const result = await fetch("/api/user/register", {
          method: "POST",
          body: JSON.stringify(data),   
          headers: {
            "Content-Type": "application/json",
          },
        });
      
        if (result) {
          router.push("/login")
        } else {
          // Error occurred while creating user
        }
    };

    return (
        <div>
        <h1 style={{textAlign:"center"}}>Join to unlock the best of Groops!</h1>
        <form style={formStyle} onSubmit={handleSubmit(onSubmit)}>
          <div style={{display: 'flex'}}>

            <div style={{flex: '1'}}>
              <label htmlFor="firstname" style={labelStyle}>First Name</label>
              <Controller
                control={control}
                name="firstname"
                render={({ field }) => <input {...field} type="text" id="firstname" name="firstname" style={inputStyle} />}
              />
              {errors.firstname && typeof errors.firstname === 'string' && (
                <span style={{ color: 'red' }}>{errors.firstname}</span>
                )}
            </div>

            <div style={{flex: '1', marginLeft: '10px'}}>
              <label htmlFor="lastname" style={labelStyle}>Last Name</label>
              <Controller
                control={control}
                name="lastname"
                render={({ field }) => <input {...field} type="text" id="lastname" name="lastname" style={inputStyle} />}
              />
               {errors.lastname && typeof errors.lastname === 'string' && (
                <span style={{ color: 'red' }}>{errors.lastname}</span>
                )}
              </div>

              </div>

              <label htmlFor="email" style={labelStyle}>Email Address</label>
            <Controller
            control={control}
            name="email"
            render={({ field }) => <input {...field} type="email" id="email" name="email" style={inputStyle} />}
            />
             {errors.email && typeof errors.email === 'string' && (
                <span style={{ color: 'red' }}>{errors.email}</span>
                )}

            <label htmlFor="password" style={labelStyle}>Password</label>
            <Controller
            control={control}
            name="password"
            render={({ field }) => <input {...field} type="password" id="password" name="password" style={inputStyle} />}
            />
             {errors.password && typeof errors.password === 'string' && (
                <span style={{ color: 'red' }}>{errors.password}</span>
                )}

            <label htmlFor="confirmPassword" style={labelStyle}>Confirm Password</label>
            <Controller
            control={control}
            name="confirmPassword"
            render={({ field }) => <input {...field} type="password" id="confirmPassword" name="confirmPassword" style={inputStyle} />}
            />
            {errors.confirmPassword && typeof errors.confirmPassword === 'string' && (
                <span style={{ color: 'red' }}>{errors.confirmPassword}</span>
                )}

            <label style={labelStyle}>
            <Controller
                control={control}
                name="terms"
                render={({ field }) => <input {...field} type="checkbox" name="terms" style={checkboxStyle} />}
            />
            yes, I want to receive deals & products information. I can opt out at any time.
            </label>

            <button type="submit" style={buttonStyle}>Join</button>
        </form>
        </div>
        );
        };

export default Register;
