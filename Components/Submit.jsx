import React from 'react';
import Button from '@mui/material/Button';
import { Tooltip } from '@mui/material';
import { useRouter } from 'next/router';

export default function DnSubmit(props) {
  const validate = props.valid;
  const formType = props.form;
  const data = props.data;

  let brake = false;
  const router = useRouter();

  for (let field in validate) {
    if (brake === true) {
      break;
    }
    let valid = validate[field];
    for (let validation in valid) {
      let result = valid[validation];
      if (result === false) {
        brake = true;
        break;
      }
    }
  }

  return (
    <div>
      {brake ? (
        <Tooltip
          title='Ainda existem campos obrigatórios não preenchidos ou campos inválidos'
          arrow
          followCursor
        >
          <div>
            <Button variant='contained' disabled>
              {props.children ? props.children : 'Enviar'}
            </Button>
          </div>
        </Tooltip>
      ) : (
        <Button
          variant='contained'
          onClick={() => {
            if (formType === 'login') {
              router.push({
                pathname: '/api/login',
                query: { email: data.email, pass: data.password },
              });
            }
            if (formType === 'forgotPass') {
              router.push({
                pathname: '/api/forgotpass',
                query: { email: data.email },
              });
            }
          }}
        >
          {props.children ? props.children : 'Enviar'}
        </Button>
      )}
    </div>
  );
}
