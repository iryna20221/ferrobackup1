import * as React from 'react';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import "../products/products.css";

export default function CallbackButton ({data, handleToggle, classname}) {
  return (
      <div className='Callback-button-container Pulse-Icon'>
        <button className={classname} onClick={handleToggle}><PhoneCallbackIcon className='Header-icon' />
        {data.header.callback.text}</button>
      </div>
  );
}
