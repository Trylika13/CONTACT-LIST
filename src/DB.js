export default class DB {
  static setApiURL(data) {
    this.apiURL = data;
  }
  static async findAll() {
    const response = await fetch(this.apiURL + "contacts");
    return await response.json();
  }

  static async create(data) {
    const response = await fetch(this.apiURL + "contacts", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        createdAt: Date.now(),
      }),
    });
    return response.json();
  }
}
