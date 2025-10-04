import DB from "../../DB";
import Contact from "../contact/Contact";
import getTemplate from "./template";

export default class ContactList {
  constructor(data) {
    this.domElt = document.querySelector(data.elt);
    this.listDomElt = null;
    DB.setApiURL(data.apiURL);
    this.contacts = [];
    this.loadContacts();
  }
  async loadContacts() {
    const contacts = await DB.findAll();
    this.contacts = contacts.map((contact) => new Contact(contact));
    this.render();
  }

  getContactCount() {
    return this.contacts.length;
  }
  renderContactCount() {
    this.domElt.querySelector(".contact-count").innerText =
      this.getContactCount();
  }
  render() {
    this.domElt.innerHTML = getTemplate();
    this.listDomElt = this.domElt.querySelector(".contacts-table tbody");
    this.contacts.forEach((contact) => contact.render(this.listDomElt));
    this.renderContactCount();
    this.initEvents();
  }
  async addContact(data) {
    // Ajouter dans la DB
    const contact = await DB.create(data);

    //Ajoute à this.contacts
    const newContact = new Contact(contact);
    this.contacts.push(newContact);

    //Ajouter dans le dom
    newContact.render(this.listDomElt);

    // relancer le count
    this.renderContactCount();
  }

  async deleteOneById(id) {
    // Supprimer de la DB
    const response = await DB.delete(id);
    // Supprimer des Contacts
    this.contacts.splice(
      this.contacts.findIndex((contact) => contact.id === id),
      1
    );
    // Supprimer du DOM
    //Fais dans le iniEvents dans contact.js

    // relancer le rendercount
    this.renderContactCount();
  }

  initEvents() {
    this.domElt.querySelector(".new-contact").addEventListener("click", () => {
      // On récupère les inputs une seule fois
      const firstNameInput = this.domElt.querySelector("[name=firstName]");
      const lastNameInput = this.domElt.querySelector("[name=lastName]");
      const emailInput = this.domElt.querySelector("[name=email]");

      // On crée un objet avec leurs valeurs
      const newContact = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
      };

      // On ajoute le contact
      this.addContact(newContact);

      // On vide les champs après ajout
      firstNameInput.value = "";
      lastNameInput.value = "";
      emailInput.value = "";
    });
  }
}
