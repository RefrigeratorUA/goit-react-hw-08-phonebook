import Section from './components/Section';
import AppBar from './components/AppBar';
import ContactForm from './components/ContactForm';
import PhonebookList from './components/PhonebookList/';

const App = () => {
  return (
    <Section>
      <AppBar />
      <ContactForm />
      <PhonebookList />
    </Section>
  );
};

export default App;
