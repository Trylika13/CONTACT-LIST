import getTemplate from "../contact/template";
export default class Contact {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.email = data.email;
    this.createdAt = data.createdAt;
  }
  render(elt) {
    const template = document.createElement("div");
    template.innerHTML = getTemplate(this);
    elt.append(template);
  }
}
