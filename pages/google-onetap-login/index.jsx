import styles from './google.module.scss';
import Button from '../../components/Button';
import Head from '../../components/head';
import { Fragment } from 'react';
import GoogleClientLibrary from '../../components/GoogleClientLibrary';
import GoogleOneTapLogin from '../../components/GoogleOneTapLogin';

const GoogleOneTapLoginPage = () => {

  return (
    <Fragment>
      <GoogleClientLibrary/>
      <Head title='Google OneTap sign-in' />
      <div className={styles.acceso__container}>
        <GoogleOneTapLogin/>
      </div>
    </Fragment>
  )
}


export default GoogleOneTapLoginPage;