const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return res.status(200).send('HNG X task 1, check /api for the task')
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
        "github_file_url": "https://github.com/raji2004/zuri-backend/blob/main/index.js",
        "github_repo_url": "https://github.com/raji2004/zuri-backend",
        "status_code": 200
    })
})

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
});