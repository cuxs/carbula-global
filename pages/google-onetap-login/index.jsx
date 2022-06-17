import styles from './google.module.scss';
import Button from '../../components/Button';
import GoogleClientLibrary from '../../components/GoogleClientLibrary';
import Head from '../../components/head';
import { Fragment } from 'react';
import GoogleOneTapLogin from '../../components/GoogleOneTapLogin';

const GoogleOneTapLoginPage = () => {

  return (
    <Fragment>
      <GoogleClientLibrary/>
      <Head title='Google OneTap sign-in' />
      <div className={styles.acceso__container}>
        <div styles={{width: '320px'}}>
          <Button secondary onClick="">Ingresar</Button><br/>
          <Button small onClick=""> Ya tengo un código</Button>
          <GoogleOneTapLogin/>
        </div>
      </div>
    </Fragment>
  )
}


export default GoogleOneTapLoginPage;