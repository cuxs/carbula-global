import {GOOGLE_ONETAP_LOGIN_CLIENT_ID, GOOGLE_ONETAP_LOGIN_DATA_URI} from '../../utils/constants'

const GoogleOneTapLogin = () => {
  return (
    <div id="g_id_onload"
      data-client_id={GOOGLE_ONETAP_LOGIN_CLIENT_ID}
      data-login_uri={GOOGLE_ONETAP_LOGIN_DATA_URI}>
    </div>
  )
}

export default GoogleOneTapLogin;