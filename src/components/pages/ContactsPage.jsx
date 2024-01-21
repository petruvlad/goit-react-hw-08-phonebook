import Contacts from './Contacts'; // Adaugă importul pentru componenta Contacts

const ContactsPage = ({ userEmail }) => {
  return (
    <div>
      <h1>Contact Book - Contacts</h1>
     
      <Contacts />
    </div>
  );
};

export default ContactsPage;
