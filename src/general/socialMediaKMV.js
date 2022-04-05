import React from 'react';
import '../style/socialMediaKMV.css';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import WhatsApp from '@mui/icons-material/WhatsApp';
import Telegram from '@mui/icons-material/Telegram';
import YouTube from '@mui/icons-material/YouTube';

const Redes = () => {
  return (
    <>
      <div className="seguinos" id="redes">
        <h3> Seguinos en nuestras redes </h3>
        <div className="linkredes">
          <a href="https://www.facebook.com/">
            <Facebook color='primary' fontSize='large' alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/">
            <Instagram color='warning' fontSize='large' alt="Instagram" />
          </a>
          <a href="https://twitter.com/">
            <Twitter color='info' fontSize='large' alt="Twitter" />
          </a>
          <a href="https://web.whatsapp.com/">
            <WhatsApp color='success' fontSize='large' alt="Whatsapp" />
          </a>
          <a href="https://web.telegram.org/k/">
            <Telegram color='inherit' fontSize='large' alt="Telegram" />
          </a>
          <a href="https://youtube.com/">
            <YouTube color='error' fontSize='large' alt="YouTube" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Redes;
