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
    const { slack_name = 'Not provided, Check spelling maybe',
        track = 'Not provided, Check spelling maybe' } = req.query;
    const date = new Date();
    return res.status(200).json({
        slack_name,
        "current_day": date.toLocaleString(
            'default', { weekday: 'long' }
        ),
        "utc_time": date.toISOString().split('.')[0] + "Z",
        track: track.toLowerCase(),
        "github_file_url": "https://github.com/samuelIkoli/hngx-s1/blob/main/index.js",
        "github_repo_url": "https://github.com/samuelIkoli/hngx-s1",
        "status_code": 200
    })
    
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});