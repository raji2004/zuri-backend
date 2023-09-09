const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());



// Define a route
app.get('/',(req,res)=>{
    res.send('omo')
})
app.get('/api', (req, res) => {
    const body = req.query
    const date = new Date()
    const utc_time = date.toISOString().split('.')[0] + "Z"
    const github_file_url = "https://github.com/raji2004/zuri-backend/blob/main/index.js"
    const github_repo_url = "https://github.com/raji2004/zuri-backend"
    const status_code = 200
    const slack_name = body.slack_name
    const track = body.track
    res.status(200).json({slack_name,track ,current_day: "Saturday", utc_time,github_file_url,github_repo_url,status_code,  });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});