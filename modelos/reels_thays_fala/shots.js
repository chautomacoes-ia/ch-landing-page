const {chromium}=require('playwright');
const caps=require('./caps.json');
(async()=>{const b=await chromium.launch();let p=await b.newPage({viewport:{width:1080,height:1920}});await p.goto('file://'+process.cwd()+'/over.html');await p.waitForTimeout(500);await p.screenshot({path:'over.png',omitBackground:true});
p=await b.newPage({viewport:{width:1080,height:330}});for(let i=0;i<caps.length;i++){await p.goto('file://'+process.cwd()+'/cap.html?n='+i+'#'+encodeURIComponent(caps[i][2]));await p.waitForTimeout(200);await p.screenshot({path:`cap${i}.png`,omitBackground:true});}await b.close();})();
