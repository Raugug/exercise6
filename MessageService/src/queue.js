const Queue = require('bull');
const queue = new Queue('message', 'redis://127.0.0.1:6379');
const uuidv1 = require('uuid/v1');
const sendMessage = require("./controllers/sendMessage")
const getMessages = require("./controllers/getMessages");
const updateCredit = require("./controllers/updateCredit");


module.exports = (req, res) => {
    let body = req.body
    body.uuid = uuidv1()
    queue.add(body).then((job) => {
      res.end(`{"url": http://localhost:9006/message/${body.uuid}/status`);
      //sendMessage(body, res)
    });

};