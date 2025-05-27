import Navigation from './components/Navigation'
import './App.css';
import ContactHeader from './components/ContactHeader';
import ContactForm from './components/ContactForm';

export default function App(){
  return (
    <div className='container'>
      <Navigation />
      <ContactHeader />
      <ContactForm />
    </div>
  )
}