//David Cyril
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU43d3o1WitWUVVWMGU4OG9mWkVvVmNYYWc2Y25aUmNXL0Z6T2xEa0xuYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUVPZXBOclRhUmVDOEpKR2NOTlRtTnNWcER3dWswbFN5ZHpvd084b2Jsaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4REdpMlRXN2t4bkpoZkRtN1JRMWZJcWNEZkpKWG93NjFUSDRqRDFESTI4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxU1NIWktBc0ZMMEtoZTF2NE9OcWNPcUhJOHVWejV2WTRvSzNTbVp2YWkwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhQWkt6MEYxTWl5OCt2MjN1WlpsaDNIVHVTOVpEQStFNElWZUlKcitQbVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNnWGV0L3UrVjA0ZUJ6OGtTOWZwT1FkUlJaRlM2eC8zSThINmQ2dGhUMms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ05oTG44TExyeGQ3Rm9ieGkrOTR0T0gvcHA3azA1Y1h6V3JnWFNvS3QzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVJoUnprRnpjQzdkc2tnOXd3RFFOOXFycXNHYUJ4TytFdWIyYTIwVnVpTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ind4NnFMTVBsZm9jQ0ZwNmRkRnFNalhzZDN3UXpkQWErRkV0cndUSW1PTjZ5d1llRHVySGV5N3ozQVdPUTZ5QjN2RDhDWXVGaTh0c3RJWG8vemwyMEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI4LCJhZHZTZWNyZXRLZXkiOiJDZTVFN3c2VStRNVBDcE9weVBVcWlBempGdGhRb05Gb3I0SmFlWlk3cGNBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJNX3IwczI5NlRhbXBuRTBEQ2tLT0tnIiwicGhvbmVJZCI6ImY0MGViOWE3LWFkZDItNGJiMy1iZGY2LWYyZGQ3YjhkMmVlNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNUGpQdHhrelRNekxOUHY3NFRrSEZIR0ZDbjg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWkoxMW53OHhXZEpGaDY3MnRyUkU3bEY4NHVzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZTR1lTTTVaIiwibWUiOnsiaWQiOiIyMzQ5MTM1NzU4NDQ5OjQ0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkJva2Vib3kncyBNRURJQSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmlQb2lJUS9PMlJ0QVlZR0NBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTUNObnpIV2k4eEphcVFEemF5cWtaNmpITm9yS2FoMU9kMmtLSkJuRWxsTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQlpWSVZxaWRKZFJtejVOSmNxVDBIRlBlQ1FENVdwaWQzV1g0MjlzWUxYZDNmTXlFQit3NElic0lteThKdUtZWHV3NHg1d2g0M08yc1FtamRDWmtkQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IitLSDd6dndhVmtOaFRpYStMdEk3YUxzanVlUGphL3pyYlZOTFVTYXpVN3hiZFM4MVgxTUlhRTQ5Q1huZkw5c3VzWDVWUGNFMlowK29aaGxWcGdOMUNRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTEzNTc1ODQ0OTo0NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUQWpaOHgxb3ZNU1dxa0E4MnNxcEdlb3h6YUt5bW9kVG5kcENpUVp4SlpUIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE5OTU3MjU3fQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2349135758449,2347042931004";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/5bc93a07e0325da1b5c0e.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://telegra.ph/file/5bc93a07e0325da1b5c0e.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "#",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`©𝙱𝚘𝚔𝚎𝚋𝚘𝚢'𝚜 𝙼𝙴𝙳𝙸𝙰`",
  author: process.env.PACK_AUTHER || "𝙱𝚘𝚔𝚎𝚋𝚘𝚢'𝚜 𝙼𝙴𝙳𝙸𝙰",
  packname: process.env.PACK_NAME || "𝙱𝚘𝚔𝚎𝚋𝚘𝚢'𝚜 𝙼𝙴𝙳𝙸𝙰",
  botname: process.env.BOT_NAME || "𝙱𝚘𝚔𝚎𝚋𝚘𝚢'𝚜 𝙼𝙴𝙳𝙸𝙰",
  ownername: process.env.OWNER_NAME || "𝙱𝚘𝚔𝚎𝚋𝚘𝚢'𝚜 𝙼𝙴𝙳𝙸𝙰",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "𝙱𝚘𝚔𝚎𝚋𝚘𝚢'𝚜 𝙼𝙴𝙳𝙸𝙰",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/QUEEN_ANITA-V2";
global.gurl = process.env.GURL || "";
global.website = process.env.GURL || "";
global.devs = "2349066528353";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api.maher-zubair.tech";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
