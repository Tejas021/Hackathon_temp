import React, { useState } from 'react'
import '../styles/auth.scss'
import {
    Button,
    Checkbox,
    FormControlLabel,
    InputAdornment,
    TextField,
    IconButton
}
    from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';


const Login = () => {

    const [checked, setChecked] = useState(true);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)


    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
    }
    
    return (
        <div>
            <div className='authForm'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <TextField
                        name="email"
                        type="email"
                        label="Email"
                        required
                        className='inpts'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                    <TextField
                        name="password"
                        type={show ? "text" : "password"}
                        label="Password"
                        required
                        className='inpts'
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    {
                                        show ?
                                        <VisibilityIcon style={{cursor:'pointer'}} onClick={() => setShow(!show)} />:
                                        <VisibilityOffIcon style={{cursor:'pointer'}} onClick={() => setShow(!show)} />
                                    }
                                </InputAdornment>
                            ),
                        }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox checked={checked} onChange={handleChange} />}
                        label="Remember me"
                    /><br />
                    <p>Dont have an Account?<Link to='/register'><span style={{
                        textDecoration: 'underline', marginLeft: '2%'
                    }}>Signup</span></Link></p>
                    <Button className='btn' type='submit' variant="contained">Log In</Button>
                </form>
            </div>
            <p style={{color:'red',textAlign:'center'}}>{error}</p>
        </div>
    )
}

export default Login