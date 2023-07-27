const express = require("express");
const app = express();
const path = require('path');
const port = 3000;

app.get("/", (req, res) => {
  const options = {
    root: path.join(__dirname)
  };

  res.sendFile('/index.html', options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', "served cold")
    }
  })
})

app.get("/about", (req, res) => {
  const options = {
    root: path.join(__dirname)
  };

  res.sendFile('/about.html', options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', "served hot")
    }
  })
})

app.get("/contact", (req, res) => {
  const options = {
    root: path.join(__dirname)
  };

  res.sendFile('/contact-me.html', options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', "eee")
    }
  })
})

app.use(function(req,res){
  const options = {
    root: path.join(__dirname)
  };

  res.status(404).sendFile('/404.html', options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', "error page!")
    }
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
