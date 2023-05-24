import * as React from 'react';
import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "../products/products.css";
import CallbackButton from './CallbackButton';

export default function Callback ({data, open, handleClose, handleToggle, classname}) {

    const [nameValue, setNameValue] = useState("");

    const [phoneNumberValue, setPhoneNumberValue] = useState("");

    const textOnlyForbiddenSymbols = "1234567890~@#$%^&*{}:?><.,/*+-№=;";

    const phoneNumberSymbols = "1234567890+()";


    const textOnlyValidation = (inputValue, symbols) => {
        if (symbols.includes(inputValue[inputValue.length - 1])) {
            setNameValue(inputValue.slice(0, -1))
        } else {
            setNameValue(inputValue)
            }
    }

    const phoneNumberValidation = (inputValue, symbols) => {
        if (!symbols.includes(inputValue[inputValue.length - 1])) {
            setPhoneNumberValue(inputValue.slice(0, -1))
        } else {
            setPhoneNumberValue(inputValue)
            }
    }

  return (
    <div>
      <CallbackButton data={data} handleToggle={handleToggle} classname={classname} />
      <Backdrop
        sx={{ color: '#fff', zIndex: "100" }}
        open={open} 
      >
       <div className='Callback-container'>
        <div className='Callback-inner-button-container'>
          <button className='Callback-inner-button' onClick={handleClose}><CloseIcon /></button>
        </div>
        <p className='Callback-text'>{data.header.callback.header}</p>
        <p className='Callback-text'>{data.header.callback.message}</p>
        <div className='Callback-textfield-container'>
          <input className='Callback-textfield' onChange={event => {textOnlyValidation(event.target.value, textOnlyForbiddenSymbols)}} value={nameValue} placeholder={data.header.callback.nameText}></input>
          <input className='Callback-textfield' onChange={event => {phoneNumberValidation(event.target.value, phoneNumberSymbols)}} value={phoneNumberValue} placeholder={data.header.callback.phoneText}></input>
        </div>
        <button className='Callback-inner-button Callback-submit-button' onClick={handleClose}><span>{data.header.callback.buttonText}</span>
        <ArrowForwardIosIcon /> </button>
        <p className='Callback-text'>{data.header.callback.dataMessage}</p>
       </div>
      </Backdrop>
    </div>
  );
}