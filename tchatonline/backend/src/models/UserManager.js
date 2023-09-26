const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  getAllUser() {
    return this.findAll();
  }

  find(id) {
    return this.database.query(
      `select Name from  ${this.table} where id = ?`,
      [id]
    );
  }

  findByNameWithHashedPassword(Name) {
    return this.database.query(
      `select Id, Email, Name, Lastname, Numéro, MotDePasse from  ${this.table} where Name = ?`,
      [Name]
    );
  }

  findById(id) {
    return this.database.query(
      `SELECT Id, Email, Name, Lastname, Numéro FROM ${this.table} WHERE Id = ?`,
      [id]
    );
  }

  findAll() {
    return this.database.query(`select Name from  ${this.table}`);
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (Name, Lastname, Numéro, Adresse, Email, MotDePasse) values (?, ?, ?, ?, ?, ?)`,
      [
        user.Name,
        user.Lastname,
        user.Numéro,
        user.Adresse,
        user.Email,
        user.hashedPassword,
      ]
    );
  }
}

module.exports = UserManager;