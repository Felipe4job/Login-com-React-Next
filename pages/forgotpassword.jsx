import React from 'react';

import chibas from '../../styles/Login.module.css';

import ForgotPass from '../../Components/ForgotPass';
import Head from '../../Components/Head';

export default function ForgotPassword() {
  return (
    <>
      <Head title='DN - Esqueceu a senha' />
      <section className={chibas.FormSignin}>
        <ForgotPass />
      </section>
    </>
  );
}
