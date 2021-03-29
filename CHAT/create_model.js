const mongoose = require('mongoose');

const chatCollection = 'chat';

const chatSchema = new mongoose.Schema(
{
    author: {type: String, max: 100},
    date: {type: String,max: 100},
    text: {type: String,max: 100}
});
 
const chats = mongoose.model(chatCollection,chatSchema);

module.exports = {
    chats
}