
import { Recaptcha } from 'next-recaptcha';

const RecaptchaComponent = ({ onVerify }) => {

  const handleVerify = (token) => {
    onVerify(token);
  };


  return (
    <Recaptcha
      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      size="invisible"
      verifyCallback={handleVerify}
    />
  );
};

export default RecaptchaComponent;