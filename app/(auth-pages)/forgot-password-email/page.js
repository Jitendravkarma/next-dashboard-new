import React from 'react';
import { seo_forget_password_email } from '@/shared/data/seo-content/content';
import ForgotPass from '@/shared/layout-components/public-comp/ForgetPass';

export const metadata = seo_forget_password_email

const ForgotPasswordEmail = () => {
  return (
    <>
      <ForgotPass/>
    </>
  )
}

export default ForgotPasswordEmail
