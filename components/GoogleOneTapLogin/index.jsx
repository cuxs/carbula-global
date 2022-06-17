const GoogleOneTapLogin = () => {
  return (
    <div>
      <div id="g_id_onload"
         data-client_id={process.env.GOOGLE_ONETAP_LOGIN_CLIENT_ID}
         data-login_uri={process.env.GOOGLE_ONETAP_LOGIN_DATA_URI}
         data-auto_prompt="false">
      </div>
      <div class="g_id_signin"
         data-type="standard"
         data-size="large"
         data-theme="outline"
         data-text="sign_in_with"
         data-shape="rectangular"
         data-logo_alignment="left">
      </div>
    </div>

  )
}

export default GoogleOneTapLogin;