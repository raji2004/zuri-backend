const express = require('express');
const app = express();

// Middleware to parse URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('HNG X task 1, check /api for the task');
});

app.get('/api', (req, res) => {
  try {
    const { slack_name = 'Not provided', track = 'Not provided' } = req.query;
    const date = new Date();

    const responseData = {
      slack_name,
      current_day: date.toLocaleString('default', { weekday: 'long' }),
      utc_time: date.toISOString().split('.')[0] + 'Z',
      track: track.toLowerCase(),
      github_file_url:
        'https://github.com/raji2004/zuri-backend/blob/main/index.js',
      github_repo_url: 'https://github.com/raji2004/zuri-backend',
      status_code: 200,
    };

    res.status(200).json(responseData);
  } catch (error) {
    // Handle errors and log them
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
