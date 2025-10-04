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

  static async delete(id) {
    const response = await fetch(this.apiURL + "contacts/" + id, {
      method: "DELETE",
    });
    return response.json();
  }

  static async update(id, data) {
    const response = await fetch(this.apiURL + "contacts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return await response.json();
  }
}
