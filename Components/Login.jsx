import React, { useState } from 'react';
import Image from 'next/image';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { FormHelperText } from '@mui/material';
import * as yup from 'yup';
import { setLocale } from 'yup';

import style from '../styles/Login.module.css';
import brand from '../public/Images/logo_preto.png';
import DnSubmit from './Submit';

export default function Login() {
  const [Data, setData] = useState({
    email: '',
    password: '',
  });

  const [ShowPassword, setShowPassword] = useState({ show: false });

  const [Errors, setErrors] = useState({
    email: { error: '', valid: false },
    pass: { error: '', valid: false },
  });

  const handleChange = (prop) => (event) => {
    setData({ ...Data, [prop]: event.target.value });
    if (prop === 'email') {
      let schema = yup.object().shape({
        email: yup
          .string()
          .required('Digite seu e-mail')
          .email('Digite um e-mail válido'),
      });

      schema
        .validate({ email: event.target.value }, { abortEarly: false })
        .catch((err) => {
          const handleErrors = err.errors[0];
          setErrors({
            ...Errors,
            email: { error: handleErrors, valid: false },
          });
        });
      schema.isValid({ email: event.target.value }).then((value) => {
        const handleValid = value;
        if (handleValid) {
          setErrors({ ...Errors, email: { error: '', valid: true } });
        }
      });
    }
    if (prop === 'password') {
      setLocale({
        mixed: {
          default: 'Digite uma informação válida',
        },
        string: {
          min: 'Deve ter no mínimo ${min} dígitos',
          max: 'Deve ter no máximo ${max} dígitos',
        },
      });

      let schemaPassword = yup.object().shape({
        password: yup.string().required('Digite sua senha').min(8).max(16),
      });

      schemaPassword
        .validate({ password: event.target.value }, { abortEarly: false })
        .catch((err) => {
          const handleErrors = err.errors[0];
          setErrors({ ...Errors, pass: { error: handleErrors, valid: false } });
        });
      schemaPassword.isValid({ password: event.target.value }).then((value) => {
        const handleValid = value;
        if (handleValid) {
          setErrors({ ...Errors, pass: { error: '', valid: true } });
        }
      });
    }
  };

  function handleClickShowPassword() {
    setShowPassword({ show: !ShowPassword.show });
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //Function to validate the fields with YUP

  return (
    <>
      <div className={style.Box}>
        <div className={style.MarginFields}>
          <Image src={brand} alt='Marca DN completa' layout='fixed' />
        </div>
        <form>
          <div>
            <TextField
              required
              fullWidth
              type='email'
              id='e-mail'
              label='Seu E-mail'
              value={Data.email}
              onChange={handleChange('email')}
              error={Errors.email.error !== '' ? true : false}
            />
          </div>
          <FormHelperText
            sx={{ paddingBottom: 2 }}
            error
          >{`${Errors.email.error}`}</FormHelperText>

          <div>
            <TextField
              label='Sua Senha'
              id='Password'
              fullWidth
              required
              type={ShowPassword.show ? 'text' : 'password'}
              value={Data.password}
              onChange={handleChange('password')}
              error={Errors.pass.error !== '' ? true : false}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {ShowPassword.show ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <FormHelperText
            sx={{ paddingBottom: 2 }}
            error
          >{`${Errors.pass.error}`}</FormHelperText>

          <Stack spacing={2} alignItems='flex-end' justifyContent='flex-end'>
            <DnSubmit data={Data} valid={Errors} form={'login'}>
              Entrar
            </DnSubmit>
            <Link href='/forgotpassword' underline='hover'>
              {'Esqueceu a senha'}
            </Link>
          </Stack>
        </form>
      </div>
    </>
  );
}
