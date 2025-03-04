const WhiteRook = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={'90%'}
    height={'90%'}
    viewBox="0 0 10 10"
    xmlSpace="preserve"
    {...props}
  >
    <path
      fill="white"
      stroke="#000"
      strokeWidth={0.4}
      strokeMiterlimit={10}
      d="M7.7 8.9c0 .22-.18.4-.4.4H2.7c-.22 0-.4-.18-.4-.4s.18-.4.4-.4h4.6c.22 0 .4.18.4.4zm-1-5.7a.3.3 0 0 1-.3.3H3.6c-.165 0-.3-.135-.3-.3s.135-.3.3-.3h2.8a.3.3 0 0 1 .3.3zm.5 5a.3.3 0 0 1-.3.3H3.1c-.165 0-.3-.135-.3-.3s.135-.3.3-.3h3.8a.3.3 0 0 1 .3.3zM3.1 1v1.6a.3.3 0 0 0 .3.3h3.2a.3.3 0 0 0 .3-.3V1"
    />
    <path
      fill="white"
      stroke="#000"
      strokeWidth={0.4}
      strokeMiterlimit={10}
      d="M6.9 1.6V1h-.7v.6h-.6V1H4.4v.6h-.6V1h-.7v.6m3.726 6.3c-.18-.625-.626-.886-.626-4.4H3.8c0 3.514-.446 3.775-.626 4.4z"
    />
  </svg>
);
export default WhiteRook;