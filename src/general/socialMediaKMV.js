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
          <a href="https://www.facebook.com/" className='facebook'>
            <Facebook color='primary' fontSize='large' alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/"  className='instagram'>
            <Instagram color='warning' fontSize='large' alt="Instagram" />
          </a>
          <a href="https://twitter.com/"  className='twitter'>
            <Twitter color='info' fontSize='large' alt="Twitter" />
          </a>
          <a href="https://web.whatsapp.com/" className='whatsapp' >
            <WhatsApp color='success' fontSize='large' alt="Whatsapp" />
          </a>
          <a href="https://web.telegram.org/k/" className='telegram'>
            <Telegram color='inherit' fontSize='large' alt="Telegram" />
          </a>
          <a href="https://youtube.com/" className='youtube'>
            <YouTube color='error' fontSize='large' alt="YouTube" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Redes;
