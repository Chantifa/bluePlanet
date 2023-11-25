const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const http = require('http');
const {pool} = require("./dbConfig.js");
const bcrypt = require("bcrypt");
const jsonParser = bodyParser.json()
const cors = require('cors');

app.use(cors());
app.use("/", router);

router.post('/register', jsonParser, async (req, res) => {

    let {nickname, email, password, password2} = req.body;

    hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of rounds for the hash

    // check if the email already exists in our db
    pool.query(
        `SELECT *
         FROM users
         WHERE email = $1`,
        [email],
        (err, results) => {
            if (err) {
                console.log(err);
            }
            // if results.rows.length > 0  -----> account already exists
            if (results.rows.length > 0) {
                res.send({emailExists: true})
            } else {
                // if the e-mail does not already exist in the db, we can add a new user to the db
                pool.query(
                    `INSERT INTO users (name, email, password)
                     VALUES ($1, $2, $3) RETURNING id, name, email,  password`,
                    [nickname, email, hashedPassword],
                    (err, results) => {
                        if (err) {
                            throw err;
                        }
                    }
                );
            }
        }
    );


});

// handle POST from LOGIN page
app.post("/login", jsonParser, async (req, res) => {

    let {email, password} = req.body;

    pool.query(
        `SELECT *
         FROM users
         WHERE email = $1`,
        [email],
        (err, results) => {
            // if the e-mail exists in the DB, the user exist -> go further
            if (results.rows.length > 0) {
                const user = results.rows[0];

                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (isMatch) {
                        // password matches with the decrypted password in db
                        res.send({passwordIsCorrect: true, username: user.name})
                    } else {
                        // password does not match with the one in db
                        res.send({passwordIsCorrect: false})
                    }
                });
            } else {
                //if the email does not exist
                console.log("EMAIL DOES NOT EXIST in DB");
            }
        }
    );


});


// Endpoint to handle form data submission
app.post('mobility', async (req, res) => {
    try {
        const formData = req.body;

        // Insert data into PostgreSQL database (modify this query based on your table structure)
        const query = `
      INSERT INTO Mobility (mobility_schueler, mobility_lehrpersonen, besondere_abmachungen, reglement_flugreisen, reglement_klassenlager)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;

        const values = [
            formData.mobilitySchueler,
            formData.mobilityLehrpersonen,
            formData.besondereAbmachungen,
            formData.reglementFlugreisen,
            formData.reglementKlassenlager,
            // Add other values as needed
        ];

        const result = await pool.query(query, values);
        res.json(result.rows[0]); // Send a response indicating success
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error saving form data' }); // Send an error response
    }
});
app.post('/energie', jsonParser, async (req, res) => {
    try {
        // API URL
        const apiUrl = 'https://api3.geo.admin.ch/rest/services/api/MapServer/ch.bfe.elektrische-anlagen_ueber_36';

        // Make a GET request to the API
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();

        const addressData = data.features[0].attributes;

        // Create a formatted address string (modify this based on your data structure)
        const formattedAddress = `${addressData.street}, ${addressData.city}, ${addressData.state}, ${addressData.postal_code}`;

        // Send the formatted address as JSON in the response
        res.json({ address: formattedAddress });
    } catch (error) {
        // Handle errors
        console.error('Error:', error);

        // Send an error response
        res.status(500).json({ error: 'Error fetching address data from the API' });
    }
});

    app.get("/login")
    app.listen(4000, () => {
        console.log("Http Server started on PORT 4000");
    })
