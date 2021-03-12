const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    n: 'rocco',
    a: ['rocco', 'littleboy', 'mabel'],
    d: 'Here is Rocco for you!',
    u: 'moo!rocco',
    
  async execute(client, message, args) {

    function randomFromArray( images ){
      return images[Math.floor( Math.random() * images.length )];
    }

    fs.readdir('./rocco', function( err, files ) {
      if (err){
        console.log('error:', err);
        return;
      }
      else{
        let images = [];
        files.forEach(function(f) {
          images.push(f);
        } );
      
        const imagePath = path.join('./rocco/' + randomFromArray(images));
      
        message.channel.send("here you go!", {
          files: [{
            attachment: imagePath,
            name: 'image.jpg'
            }]
        });
      }
    } );
  },
};