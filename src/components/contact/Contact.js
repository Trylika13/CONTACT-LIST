import getTemplate from "../contact/template";
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
  }
}
