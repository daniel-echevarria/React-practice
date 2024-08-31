import { useReducer } from "react";
import Chat from "./Chat.jsx";
import ContactList from "./ContactList.jsx";
import { initialState, messengerReducer } from "./messengerReducer";
import React from "react";

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const contact = contacts.find((c) => c.id === state.selectedId);
  const messages = state.messages;
  const messageObj = messages.find((mess) => mess.id === state.selectedId);
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={messageObj.message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
