#!/usr/bin/node

/* eslint-disable */

const request = require('request');

const api = `${process.argv[2]}`;

request(api, (err, res, body) => {
  if (err) throw err;
  const data = JSON.parse(body).results;
  const char = [];
  for (const x in data) {
    char.push(...data[x]['characters'].filter((str) => str.includes('/18/')));
  }
  console.log(char.length);
});
