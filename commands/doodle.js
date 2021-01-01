const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    n: 'doodle',
    a: ['doodle', 'senddoodle', 'doodlecow'],
    d: 'Here is a doodle for you!',
    u: '%doodle',
    
  async execute(client, message, args) {

    function randomFromArray( images ){
      return images[Math.floor( Math.random() * images.length )];
    }

    fs.readdir('./drawings', function( err, files ) {
      if (err){
        console.log('error:', err);
        return;
      }
      else{
        let images = [];
        files.forEach(function(f) {
          images.push(f);
        } );
      
        const imagePath = path.join('./drawings/' + randomFromArray(images));
      
        message.channel.send("here you go!", {
          file: imagePath
        });
      }
    } );
  },
};