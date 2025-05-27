import photo from './../assets/photo.svg'
import Button from './Button'
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const ContactForm = () => {
    return (
        <div className='form-conatiner'>
            <div className='upper-form'>
                <div className='buttons'>
                    <Button text='VIA SUPPORT CHAT' icon={<MdMessage fontSize='24px' />} />
                    <Button text='VIA CALL' icon={<FaPhoneAlt fontSize='24px' />} />
                </div>
                <div className='email-btn'>
                    <Button text='VIA EMAIL FORM' icon={<HiMail fontSize='24px' />} isOutline={true} />
                </div>
                <form>
                    <div className='form-control'>
                        <label htmlFor='name'>Name</label>
                        <input type="text" name='Name' />
                        <label htmlFor='email'>Email</label>
                        <input type="text" name='E-Mail' />
                        <label htmlFor='text'>Text</label>
                        <input type="text" name='Text' />
                    </div>
                    <div className='submit-btn'>
                        <Button text='SUBMIT' />
                    </div>
                </form>
            </div>
            <div className='contact-form-image'>
                <img src={photo} alt='sales-girl-image'></img>
            </div>
        </div>
    )
}

export default ContactForm
