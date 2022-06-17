import styles from './google.module.scss';
import InputMask from 'react-input-mask';
import Button from '../../components/Button';
import Head from '../../components/head';
import { Fragment, useState } from 'react';
import { requestCode, verifyCode } from '../../utils/fetches';
import { saveToken } from '../../utils/helpers';
import { useRouter } from 'next/router';

const Acceso = () => {
  const router = useRouter()
  const [codeGenerated, setCodeGenerated] = useState(false)
  const [code, setCode] = useState('')
  const [checkingCode, setCheckingCode] = useState(false)

  const handleAlreadyCodeClick = () => {
    setCodeGenerated(true)
  }
  const handleButtonClick = async () => {
    try {
      await requestCode()
      setCodeGenerated(true)
    } catch (e) {
      console.error(e)
      setCodeGenerated(false)
    }
  }
  const handleCheckCodeClick = async () => {
    try {
      setCheckingCode(true)
      const { data } = await verifyCode({ code })
      saveToken(data.token)
      router.replace('/leads')
    } catch (e) {
      setCheckingCode(false)
      console.error(e)
    }
  }
  return (
    <Fragment>
      <Head title='Acceso' />
      <div className={styles.acceso__container}>
        {!codeGenerated ?
          <div styles={{width: '320px'}}>
            <Button secondary onClick={handleButtonClick}>Ingresar</Button><br/>
            <Button small onClick={handleAlreadyCodeClick}> Ya tengo un código</Button>
          </div>
          :
          <div className={styles.code__input}>
            <label>Ingrese el código enviado a hola@carbula.com</label>
            <InputMask
              formatChars={{
                'n': '[0-9]',
                'a': '[A-Za-z]',
                '*': '[A-Za-z0-9]'
              }}
              mask="****"
              maskChar="*"
              name="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <div className={styles.button__container}>
              <Button onClick={handleCheckCodeClick} light loading={checkingCode}>Aceptar</Button>
            </div>
          </div>
        }
      </div>
    </Fragment>
  )
}


export default Acceso;