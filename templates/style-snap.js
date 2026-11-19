const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920}});
for(const f of process.argv.slice(2)){await p.goto('file://'+__dirname+'/'+f);await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(200);
await p.screenshot({path:__dirname+'/'+f.replace('.html','.jpg'),type:'jpeg',quality:92});}await b.close()})();
