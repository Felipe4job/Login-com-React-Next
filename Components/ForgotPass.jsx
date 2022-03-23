import React, { useState } from 'react';
import Image from 'next/image';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import * as yup from 'yup';
import { FormHelperText } from '@mui/material';

import style from '../styles/Login.module.css';
import brand from '../public/Images/logo_preto.png';
import Submit from './Submit';

export default function ForgotPass() {
  const [Data, setFields] = useState({
    email: '',
  });

  const [Errors, setErrors] = useState({
    email: { error: '', valid: false },
  });

  const handleChange = (prop) => (event) => {
    setFields({ ...Data, [prop]: event.target.value });
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
  };

  return (
    <>
      <div className={style.BoxForgotPass}>
        <div className={style.MarginFields}>
          <Image src={brand} alt='Marca DN completa' layout='fixed' />
        </div>
        <div>
          <h1>Esqueceu a senha</h1>
          <p className={style.MarginFields}>
            Preencha o campo abaixo e receba as instruções para resetar a senha
            em seu e-mail.
          </p>
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
          <Stack spacing={2} alignItems='flex-end' justifyContent='flex-end'>
            <Submit data={Data} valid={Errors} form={'forgotPass'}></Submit>
            <Link href='/' underline='hover'>
              {'Voltar para login'}
            </Link>
          </Stack>
        </form>
      </div>
    </>
  );
}
