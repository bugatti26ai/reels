const X=document.getElementById('c').getContext('2d'),W=1080,H=1920;
let _s=7;const r=()=>{_s=(_s*16807)%2147483647;return (_s-1)/2147483646};
function glow(x,y,rad,c,a){const g=X.createRadialGradient(x,y,0,x,y,rad);g.addColorStop(0,`rgba(${c},${a})`);g.addColorStop(1,`rgba(${c},0)`);X.fillStyle=g;X.fillRect(x-rad,y-rad,rad*2,rad*2)}
function lin(y0,y1,stops){const g=X.createLinearGradient(0,y0,0,y1);stops.forEach(([o,c])=>g.addColorStop(o,c));return g}
function star8(x,y,R,rr,rot){X.beginPath();for(let i=0;i<16;i++){const a=rot+i*Math.PI/8,rad=i%2?rr:R;X.lineTo(x+Math.cos(a)*rad,y+Math.sin(a)*rad)}X.closePath()}
function grain(a){for(let i=0;i<9000;i++){X.fillStyle=`rgba(${r()<.5?'0,0,0':'255,255,255'},${a*r()})`;X.fillRect(r()*W,r()*H,2,2)}}
