// // server/index.js
// const express = require('express');
// const cors = require('cors');
// const mysql = require('mysql2');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'your_database'
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Database connection failed:', err.stack);
//     return;
//   }
//   console.log('Connected to database.');
// });

// // User registration
// app.post('/api/register', (req, res) => {
//   const { name, email, password } = req.body;
//   const hashedPassword = bcrypt.hashSync(password, 8);

//   db.query(
//     'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
//     [name, email, hashedPassword],
//     (error, results) => {
//       if (error) {
//         return res.status(500).json({ success: false, message: 'Database error' });
//       }
//       res.json({ success: true, message: 'User registered successfully' });
//     }
//   );
// });

// // User login
// app.post('/api/login', (req, res) => {
//   const { email, password } = req.body;

//   db.query(
//     'SELECT * FROM users WHERE email = ?',
//     [email],
//     (error, results) => {
//       if (error) {
//         return res.status(500).json({ success: false, message: 'Database error' });
//       }
//       if (results.length === 0) {
//         return res.status(401).json({ success: false, message: 'Invalid email or password' });
//       }

//       const user = results[0];
//       const passwordIsValid = bcrypt.compareSync(password, user.password);

//       if (!passwordIsValid) {
//         return res.status(401).json({ success: false, message: 'Invalid email or password' });
//       }

//       const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
//       res.json({ success: true, token });
//     }
//   );
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const passport = require('./config/passport');
const session = require('express-session');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({ secret: process.env.JWT_SECRET, resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

