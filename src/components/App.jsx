import { ContactForm, ContactList, Filter } from './phoneBook';
import { Toaster } from 'react-hot-toast';
export const App = () => {
  return (
    <div>
      <section>
        <div className="container">
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
          <Toaster />
        </div>
      </section>
    </div>
  );
};
