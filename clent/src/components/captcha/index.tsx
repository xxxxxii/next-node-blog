const Captcha = (props: { htmlContent: any }) => {
  return <div dangerouslySetInnerHTML={{ __html: props?.htmlContent }} />;
};

export default Captcha;
