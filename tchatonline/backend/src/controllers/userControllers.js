const models = require("../models");

const read = (req, res) => {
    models.user
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
  
  const edit = (req, res) => {
    const user = req.body;
  
    user.id = parseInt(req.params.id, 10);
  
    models.user
      .update(user)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
  

const add = (req, res) => {
    const user = req.body;
  
    models.user
      .insert(user)
      .then(([result]) => {
        res.location(`/users/${result.insertId}`).sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  const getProfile = (req, res) => {
    models.user
      .findAll()
      .then(([rows]) => {
        res.json(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
  
  const getUserById = (req, res) => {
    const { userId } = req.params;
  
    models.user
      .findById(userId)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.json(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

module.export = {
    read,
    edit,
    add,
    getProfile,
    getUserById,
};
