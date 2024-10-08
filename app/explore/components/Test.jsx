import { useState } from "react";
import Chat from "./Chat.js";

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat key={to.email} contact={to} />
    </div>
  );
}

const contacts = [
  { name: "Taylor", email: "taylor@mail.com" },
  { name: "Alice", email: "alice@mail.com" },
  { name: "Bob", email: "bob@mail.com" },
];

function ContactList({ selectedContact, contacts, onSelect }) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact) => (
          <li key={contact.email}>
            <button
              onClick={() => {
                onSelect(contact);
              }}
            >
              {contacts.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
