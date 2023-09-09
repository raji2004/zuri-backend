const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a route
app.get('/', (req, res) => {
    const body = req.query
    const date = new Date()
    const utc_time = date.toUTCString()
    const github_file_url = "https://github.com/raji2004/zuri-backend/blob/main/index.js"
    const github_repo_url = "https://github.com/raji2004/zuri-backend"
    const status_code = 200
    res.status(200).json({ ...body,current_day: "Saturday", utc_time,github_file_url,github_repo_url,status_code,  });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});