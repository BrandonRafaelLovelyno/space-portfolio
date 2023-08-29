//Importing the react and bootstrap components
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

//Importing the styles
import '../../styles/Contact/CustomAlert.css'

function CustomAlert({status,message}) {
    const errorHead='Oh snap! You got an error!';
    const successHead='Your response has been sent to my email!'
    return (
      <Alert variant={status=='Error'?'danger':'success'}>
        <Alert.Heading>{status=='Error'?errorHead:successHead}</Alert.Heading>
        <ul>
          {message&&message.map((m)=>{
            return <li>{m}</li>
          })}
        </ul>
      </Alert>
    );
  
}

export default CustomAlert;

