const pool = require("./pool");

async function postModule(data) {

  await pool.query(
    `INSERT INTO messages (
      id,
      firstName,
      lastName,
      email,
      package,
      message
    ) VALUES (
      gen_random_uuid(),
      $1, $2, $3, $4, $5
    )`,
    [data.firstName, data.lastName, data.email, data.package, data.message]
  );
}


module.exports = {
    postModule
}