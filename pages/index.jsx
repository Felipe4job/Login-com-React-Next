import React from 'react';

import style from '../../styles/Login.module.css';

import Login from '../../Components/Login';
import Head from '../../Components/Head';

export default function LoginArea() {
  return (
    <>
      <Head title='DN - Login' />
      <section className={style.FormSignin}>
        <Login />
      </section>
    </>
  );
}
