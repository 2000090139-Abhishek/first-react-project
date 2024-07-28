const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const connection = require('../config/db');

class User {
  static async create({ name, email, password }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    const [result] = await connection.query(sql, [name, email, hashedPassword]);
    return result.insertId;
  }

  static async findByEmail(email) {
    const sql = 'SELECT * FROM users WHERE email = ?';
    const [rows] = await connection.query(sql, [email]);
    return rows[0];
  }

  static async findById(id) {
    const sql = 'SELECT * FROM users WHERE id = ?';
    const [rows] = await connection.query(sql, [id]);
    return rows[0];
  }
}

module.exports = User;
