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

  initEvents() {
    this.domElt.querySelector(".new-contact").addEventListener("click", () => {
      const firstName = this.domElt.querySelector("[name=firstName]").value;
      const lastName = this.domElt.querySelector("[name=lastName]").value;
      const email = this.domElt.querySelector("[name=email]").value;

      const newContact = { firstName, lastName, email };

      this.addContact(newContact);
    });
  }
}
