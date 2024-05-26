import express from 'express';

const app = express();
app.use(express.json());

// TODO: Implement API endpoints for managing tasks

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

export default app;
