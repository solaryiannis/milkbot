const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    n: 'daisy',
    a: ['daisy', 'daisymays', 'kitty', 'hesbian', 'cat'],
    d: 'Here is Daisy for you!',
    u: 'moo!daisy',
    
  async execute(client, message, args) {

    function randomFromArray( images ){
      return images[Math.floor( Math.random() * images.length )];
    }

    fs.readdir('./daisy', function( err, files ) {
      if (err){
        console.log('error:', err);
        return;
      }
      else{
        let images = [];
        files.forEach(function(f) {
          images.push(f);
        } );
      
        const imagePath = path.join('./daisy/' + randomFromArray(images));
      
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