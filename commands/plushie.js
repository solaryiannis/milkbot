const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');

module.exports = {
    n: 'plushie',
    a: ['plushie', 'sendplushie', 'plushcow'],
    d: 'Here is a plushie for you!',
    u: 'moo!plushie',
    
  async execute(client, message, args) {

    function randomFromArray( images ){
      return images[Math.floor( Math.random() * images.length )];
    }

    fs.readdir('./toys', function( err, files ) {
      if (err){
        console.log('error:', err);
        return;
      }
      else{
        let images = [];
        files.forEach(function(f) {
          images.push(f);
        } );
      
        const imagePath = path.join('./toys/' + randomFromArray(images));
      
        message.channel.send("here you go!", {
          file: imagePath
        });
      }
    } );
  },
};