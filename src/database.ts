import sqlite3 from 'sqlite3';

const db = new sqlite3.Database(':memory:');

// TODO: Initialize database and create tasks table

export default db;
