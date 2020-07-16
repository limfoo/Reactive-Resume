import React, { memo, useEffect } from 'react';
import { Slide, toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import ModalRegistrar from '../../modals/ModalRegistrar';

const Wrapper = ({ children }) => {
  useEffect(() => {
    toast.configure({
      role: 'alert',
      hideProgressBar: true,
      transition: Slide,
      closeButton: false,
      position: 'bottom-right',
      pauseOnFocusLoss: false,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Reactive Resume</title>
        <meta
          name="description"
          content="A free and open source resume builder that’s built to make the mundane tasks of creating, updating and sharing your resume as easy as 1, 2, 3."
        />
        <link rel="canonical" href="https://rxresume-staging.web.app" />
        <meta property="og:url" content="https://rxresume-staging.web.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="A free and open source resume builder that’s built to make the mundane tasks of creating, updating and sharing your resume as easy as 1, 2, 3."
        />
        <meta property="og:image" content="http://rxresu.me/images/share.png" />
      </Helmet>

      {children}

      <ModalRegistrar />
    </>
  );
};

export default memo(Wrapper);
