const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349164333225";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_05_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDYyLFxuICAgICAgICA0NixcbiAgICAgICAgNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDY5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMzYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA3LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDc2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU2LFxuICAgICAgICA5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE5LFxuICAgICAgICA0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzLFxuICAgICAgICA5MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTEzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDYyLFxuICAgICAgICA0MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNixcbiAgICAgICAgOTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2LFxuICAgICAgICA2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI5LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNixcbiAgICAgICAgMTk4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDQsXG4gICAgICAgIDk3LFxuICAgICAgICAyOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkyLFxuICAgICAgICA5NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjExLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjRjMmFtTEhwSXJ5ZXRmWWdSMUVqUFhDbVFBV2hvaDlIQXRCci9MZU04c3c9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdzdUZ2ZVhjUmRDY1ctWC01eldlandcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzRkYzBiYWMtZmZkYS00ODFhLWFkMDAtNjZkMDRjOTcyZDY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMwLFxuICAgICAgMjU0LFxuICAgICAgODUsXG4gICAgICAyMzMsXG4gICAgICAxNzYsXG4gICAgICAxOTgsXG4gICAgICAxMjcsXG4gICAgICA2NixcbiAgICAgIDEzNSxcbiAgICAgIDE1NSxcbiAgICAgIDY0LFxuICAgICAgMTQxLFxuICAgICAgMjMxLFxuICAgICAgNTAsXG4gICAgICAxMjcsXG4gICAgICAyOCxcbiAgICAgIDE0MixcbiAgICAgIDIwNyxcbiAgICAgIDIzNSxcbiAgICAgIDE3MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzYsXG4gICAgICA2MixcbiAgICAgIDExOSxcbiAgICAgIDE4NCxcbiAgICAgIDQ1LFxuICAgICAgMTA4LFxuICAgICAgMTA5LFxuICAgICAgNyxcbiAgICAgIDgxLFxuICAgICAgMTQ3LFxuICAgICAgMjgsXG4gICAgICAyNDgsXG4gICAgICAxODAsXG4gICAgICAxNTgsXG4gICAgICAxNzAsXG4gICAgICA3MyxcbiAgICAgIDIyNyxcbiAgICAgIDI1MCxcbiAgICAgIDQzLFxuICAgICAgNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWDFFRjVMM0VcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjQzMzMyMjU6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjUyNTcwNzY4ODYzMzcxOjI5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k3KzRJQURFSXFqNTdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMDVVdVRnOGFWWXBaZ1VZdUpiZFhTOHpoeUw1TFA3UVc4WTYrMVZmbmZSTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJobGIxSnZ0T29xRkJjNnRBZ2dleFprTXhvMG9MQlA0TmdyVDJPaE4vV1F2NXdKSHFkUjExWXNiYlVnc29seEFMMDVVbFdaNjgyQlpPcXBaMFpkVG1CQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJPcVBqMllWeE01MHcyczlDZFdaMU1nOWhZT0xUaHI5QkQ1Qzg5ZDM4bDdQb1ZPSjBIZkdQTGpPMXJKNkZEVzU2cUlrYkJEMm5ZZ3dBSjhwdDRBTjZnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY0MzMzMjI1OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkyNTk1MzVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
