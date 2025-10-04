import getTemplate from "../contact/template";
import DB from "../../DB.js";

export default class Contact {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.createdAt = data.createdAt;
    this.domElt = null;
  }
  render(elt) {
    const template = document.createElement("template");
    template.innerHTML = getTemplate(this);
    this.domElt = template.content.firstElementChild;
    elt.append(this.domElt);
    this.initEvents();
  }

  async updateOneById(data) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;

    this.domElt.querySelector(".firstname").innerText = this.firstName;
    this.domElt.querySelector(".lastname").innerText = this.lastName;
    this.domElt.querySelector(".email").innerText = this.email;

    // Sortie du mode édition
    this.domElt.classList.remove("isEditing");
    // On envoie les modofs à la DB
    return await DB.update(this.id, data);
  }

  initEvents() {
    this.domElt.querySelector(".btn-delete").addEventListener("click", (e) => {
      window.ContactList.deleteOneById(this.id);
      this.domElt.remove();
    });
    this.domElt.querySelector(".btn-edit").addEventListener("click", (e) => {
      this.domElt.classList.add("isEditing");
    });

    this.domElt.querySelector(".btn-check").addEventListener("click", (e) => {
      // on récupère les 3 inputs du contact
      const firstName = this.domElt.querySelector(".input-firstname").value;
      const lastName = this.domElt.querySelector(".input-lastname").value;
      const email = this.domElt.querySelector(".input-email").value;

      // et on appelle update avec tout l'objet
      this.updateOneById({ firstName, lastName, email });
    });
  }
}
