/*░██████╗░░█████╗░██╗░░░░░██████╗░███████╗███╗░░██╗
██╔════╝░██╔══██╗██║░░░░░██╔══██╗██╔════╝████╗░██║
██║░░██╗░██║░░██║██║░░░░░██║░░██║█████╗░░██╔██╗██║
██║░░╚██╗██║░░██║██║░░░░░██║░░██║██╔══╝░░██║╚████║
╚██████╔╝╚█████╔╝███████╗██████╔╝███████╗██║░╚███║
░╚═════╝░░╚════╝░╚══════╝╚═════╝░╚══════╝╚═╝░░╚══╝

░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗
██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║
██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║
╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║
░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║
░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝

███╗░░░███╗██████╗░
████╗░████║██╔══██╗
██╔████╔██║██║░░██║
██║╚██╔╝██║██║░░██║
██║░╚═╝░██║██████╔╝
╚═╝░░░░░╚═╝╚═════╝░*/









const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  //  සෙසන් අයිඩී එක දාන්න👇👇👇 (උඩු කොමා දෙක ඇතුලේ)
  SESSION_ID: process.env.SESSION_ID || "Golden-Queen-MD-t0R3WJDT#YVWyfQxAgEESdLMsBXBKjb_uBQFhdbHYXszBCF1w1mAftrc", 

//  Mongodp URl එක දාන්න 👇👇👇 (උඩු කොමා දෙක ඇතුලේ )
  MONGODB: process.env.MONGODB || "mongodb+srv://Tttttt:99999978666@cluster0.0ya0s.mongodb.net/",


MAX_SIZE: 500,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO
};
