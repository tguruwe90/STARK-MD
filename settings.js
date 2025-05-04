//STARK SETTINGS


//PASTE YOUR SESSION ID HERE, LOYAL CITIZEN

const sessionId  = process.env.SESSION || 'NEIMAN-TECH-SESSION-ID;;;=>.eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK01nN3dGVi8wMXBSMjRkU0hmUlYreDk5cU9kME1PblJ1YWpvNHJ5QlBVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDN4US9GZG5aOEQyZXZTRDJGSnJMYXRBM3F5YUVKMzZlU0xWdDdsNFREdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQktBY01UNVdoY3VtOXhQWUpsUnpxTXJRSXE3RmZNQ1RoQXgvbTNPLzBRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwWnEvN0RQejZuZmNOdnpxV1NsNHNDbzY2dEMvbmNhNHlJT01LNDJvMFgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJQRGJiRXVCbjhybkxJZWhzYzVUS0daQ0NLeGRmQUZrdVFWUk5FUVJxMm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtBMmxPbmZ1VVFnR1FsRjZGeG5sQWRIMTZvR1piNXl0OVpOeHJrdzdNQm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU5ITzZKdjdGSlhkWUtqNGpzVmZvY0w3Z2xJdDBNRGUvNGhTcERzVDhYTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEoreDZ4NkJFLzcxUDV2bldONkk2ZkF4THVKZFV5SG9XSU9FZXRSTTZqVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFKN0ZxYjdKUHVqNzQ5R1VqNXpsdXlONWxCaUJyd0piei9pYmtYcFkrRDFaRklMbkRmMnZBQUpDMVpQOHgyUkZtc1JKZnNjM3RQODdaRFJIN1ZsdEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiJ3OEx0Q1lwRUZ2Mmk1Mmg0dnZ2N3E2bDdFQlczNGJPQS9mOUVuenFGekEwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLcVU4SHc1dlI3aW5lczNlMFRXaUJ3IiwicGhvbmVJZCI6IjVjYjhmZmU3LWE4NjItNDM1ZS04OGYxLTY1ODA3MWM4ZDRjNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUHVWTW41UkJiNDQyR2tyazFsQXBnaSt4c0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGJVMFBLRVZRbEVTSGcxZEU1eGY3dG0vOFMwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdGNkpDVjZBIiwibWUiOnsiaWQiOiIyNjM3MTM4NjU0MDg6MjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiYmFza2V0IGJhbGwifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lTa2pNWUNFTjc0M01BR0dCWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImhVYm0wQ3RkNnhYVzVkNGxvKytpWFJwMGVSSFNIV1AzZ0tGUlJwelZHVlE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InlPVjRTQ3NVYjhKa3FTMm5NZEJDNWtGK3RoVkc4NGYxSy81dE1Nc2hVcEdwWWo5L01xRnJqNElJOUk4RFZndFl4K2hzd3ltaEh1T2UrMjlVcllwbERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI1TkEveGRydUdHTllpRkdmMVZubDR0eUlnam44Q1BmdHhnNSt4N0g2bWZGQ3d2b3U0VGhWd2h2L1ZrdWx4K2JRb1BTTUZxVHUrZWx2UWFCbm02RmdDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxMzg2NTQwODoyNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZVkc1dEFyWGVzVjF1WGVKYVB2b2wwYWRIa1IwaDFqOTRDaFVVYWMxUmxVIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ2MzUzMjYxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURNTCJ9'; 


const session = sessionId.replace('NEIMAN-TECH-SESSION-ID;;;=>.','');
const prefix = process.env.PREFIX || '%';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || '𝐍ᴇɪᴍᴀɴ 𝐌ᴀʀᴄᴜs';
const packname = process.env.PACKNAME || 'Marcus';
const dev = process.env.OWNER_NUMBER || '263713865408';
const fridayActive = process.env.FRIDAY || "true"; //you can always deactivate by typing (friday off)
const DevMarcus = dev.split(",");
const botname = process.env.BOTNAME || 'Sᴛᴀʀᴋ-ᴍᴅ';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'true';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'typing';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://media-database-mcjv.onrender.com/media/images/a98e77ee75af1bf5d5d49fc6e840f123.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vb9EZIl60eBdl8fIY10p';
const reactemoji = process.env.EMOJI || '⚒️';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const anticallmsg = process.env.ANTICALL_MSG || '❌ This Residence Cannot Pick Your Call At This Time Please Leave A Message 😌';
const autobio = process.env.AUTOBIO || 'true';

const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: true,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: true,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  botname,
  reactemoji,
  autobio,
  antilink: groupControl, 
  antibad: groupControl, 
  mode,
  prefix,
  anticall,
  autolike,
  anticallmsg,
  mycode,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  DevMarcus,
  gcpresence,
  antionce,
  session,
  antitag,
  antidelete,
  fridayActive
};
