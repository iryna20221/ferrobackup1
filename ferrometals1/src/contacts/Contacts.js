import { useState } from "react";
import "../app.css";
import "./contacts.css";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email'

const Contacts = ({data}) => {
    
    const fullPhoneNumber = "tel:" + data.header.phoneNumber;
    const fullEmail = "mailto:" + data.header.email;

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
        <section className="Standart-Section Contacts-container">
            <div className="Contacts-adress-container">
                <h4 className="Contacts-container-heading">{data.contacts.address.heading}</h4>
                <div className="Contacts-inner-container">
                    <div className="Contacts-inner-content-container">
                        <p className="Contacts-inner-container-text Contacts-inner-container-info-text">{data.contacts.address.text}</p>
                        <div><p className="Header-contacts"><a className="Header-contacts" href={fullPhoneNumber}>
                                    <CallIcon className='Header-icon' />{data.header.phoneNumber}</a></p></div>
                        <div><p className="Header-contacts"><a className="Header-contacts" href={fullEmail}>
                                    <EmailIcon className='Header-icon' />{data.header.email}</a></p></div>
                    </div>
                    <div className="Contacts-inner-content-container">
                        <h4 className="Contacts-inner-container-heading">{data.contacts.address.detailsHeading}</h4>
                        <p className="Contacts-inner-container-info-text">{data.contacts.address.details}</p>
                    </div>
                </div>
            </div>
            <div className="Contacts-feedback-form-container">
                <h4 className="Contacts-container-heading">{data.contacts.feedback.heading}</h4>
                <p>{data.contacts.feedback.description}</p>
                <div className="Contacts-feedback-form-input-container">
                    <div className="Contacts-feedback-form-input-container-without-text-form-input">
                        <input onChange={event => {textOnlyValidation(event.target.value, textOnlyForbiddenSymbols)}} value={nameValue} className="Contacts-feedback-form-input" placeholder={data.contacts.feedback.nameInputText}></input>
                        <input onChange={event => {phoneNumberValidation(event.target.value, phoneNumberSymbols)}} value={phoneNumberValue} className="Contacts-feedback-form-input" placeholder={data.contacts.feedback.phoneInputText}></input>
                    </div>
                    <div className="Contacts-feedback-form-input-container-without-text-form-input">
                        <input className="Contacts-feedback-form-input" placeholder={data.contacts.feedback.emailInputText}></input>
                        <input className="Contacts-feedback-form-input" placeholder={data.contacts.feedback.subjectInputText}></input>
                    </div>
                    <textarea className="Contacts-feedback-form-text-input" placeholder={data.contacts.feedback.messageInputText}></textarea>
                </div>
                <p>{data.contacts.feedback.bottomText}</p>
                <button className="Contacts-feedback-form-button">{data.contacts.feedback.buttonText}</button>
            </div>
        </section>
    )
}

export default Contacts;