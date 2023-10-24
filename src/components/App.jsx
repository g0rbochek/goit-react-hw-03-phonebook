import React, { Component } from 'react';
import { TittlePhonebook } from './TittlePhonebook/TittlePhonebook';
import { ContactForm } from './ContactForm/ContactForm';
import { TitleContacts } from './TitleContackts/TitleContackts';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
 state = {
  contacts: [
   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
 };

 formSubmitHandler = formState => {
  const contactId = nanoid(5);
  formState.id = contactId;
  if (this.state.contacts.find(({ name }) => formState.name === name)) {
   alert(`${formState.name} is already in contacts`);
   return;
  }
  this.setState(prevState => {
   return { contacts: [...prevState.contacts, formState] };
  });
 };

 changeInput = input => {
  this.setState({
   [input.name]: input.value,
  });
 };

 deleteContact = contactId => {
  this.setState(prevState => ({
   contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  }));
 };

 findContact = () => {
  const filterContact = this.state.contacts.filter(({ name }) => {
   return name.toLowerCase().includes(this.state.filter.toLowerCase());
  });
  return filterContact;
 };

 componentDidMount = () => {
  const contactsFromLS = JSON.parse(localStorage.getItem('contacts')) || [];
  this.setState({
   contacts: contactsFromLS,
  });
 };

 componentDidUpdate = (prevProps, prevState) => {
  if (prevState.contacts !== this.state.contacts) {
   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }
 };

 render() {
  return (
   <>
    <TittlePhonebook title="Phonebook" />
    <ContactForm onSubmitForm={this.formSubmitHandler} />
    <TitleContacts title="Contacts" />
    <Filter onChangeInput={this.changeInput} inputFilter={this.state.filter} />
    <ContactList
     onDeleteContact={this.deleteContact}
     onfindContact={this.findContact}
    />
   </>
  );
 }
}
