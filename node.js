const express = require('express');
const multer = require('multer'); // Untuk handle upload file
const path = require('path');
const app = express();

const upload = multer({ dest: 'uploads/' }); // Folder untuk menyimpan meme

// Endpoint untuk login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Lakukan autentikasi (simulasi)
  if (username === 'admin' && password === '1234') {
    res.send('Login berhasil!');
  } else {
    res.send('Login gagal!');
  }
});

// Endpoint untuk upload meme
app.post('/upload', upload.single('memeFile'), (req, res) => {
  const { memeTitle, memeDescription } = req.body;
  const memeFile = req.file;
  // Simpan data ke database atau logika tambahan
  res.send(`Meme berhasil diupload: ${memeTitle}`);
});

app.listen(3000, () => console.log('Server berjalan di port 3000'));