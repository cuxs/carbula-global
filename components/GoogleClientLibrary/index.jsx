import Script from 'next/script'

const GoogleClientLibrary = () => {
  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" async defer></Script>
    </>
  )
}

export default GoogleClientLibrary;