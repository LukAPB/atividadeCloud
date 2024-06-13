const db = require('../models/database');

const getData = async (req, res) => {
  try {
    const [rows, fields] = await db.query('SELECT * FROM table_name');
    res.json(rows);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { getData };
