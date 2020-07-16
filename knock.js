// ZzFX - Zuper Zmall Zound Zynth - Micro Edition
// MIT License - Copyright 2019 Frank Force
// https://github.com/KilledByAPixel/ZzFX
'use strict';let zzfx,zzfxV,zzfxX

// ZzFXMicro - Zuper Zmall Zound Zynth 
zzfxV=.3 // volume
zzfx=    // play sound
(J=1,K=.05,g=220,f=0,h=0,n=.1,k=0,A=1,t=0,B=0,u=0,C=0,v=0,D=0,w=0,L=0,e=0,c=2*Math.PI,b=44100,x=p=>2*p*Math.random()-p,q=p=>0<p?1:-1,M=t*=500*c/b**2,E=g*=(1+x(K))*c/b,N=q(w)*c/4,r=[],F=0,G=0,d=0,l=1,H=0,I=0,a=0,O=.5,m,y,z=zzfxX.createBufferSource())=>{f=50+f*b|0;h=h*b|0;n=n*b|0;e=e*b|0;B*=500*c/b**3;m=f+h+n+e;w*=c/b;u*=c/b;C*=b;for(v*=b;d<m;r[d++]=a)++I>100*L&&(I=0,a=F*g*Math.sin(G*w-N),4<k?a=q((a/c%1+1)%1-(O+=100*A/b)%1):(a=k?1<k?2<k?3<k?q(Math.sin((a%c)**3)):Math.max(Math.min(Math.tan(a),1),-1):1-(2*a/c%2+2)%2:1-4*Math.abs(Math.round(a/c)-a/c):Math.sin(a),a=q(a)*Math.abs(a)**A),a*=J*zzfxV*(d<f?d/f:d<f+h?1:d<m-e?1-(d-f-h)/n:0),a=e?a/2+(e>d?0:(d<m-e?1:(d-m)/e)*r[d-e]/2):a),F+=1+x(D),G+=1+x(D),g+=t+=B,l&&++l>C&&(E+=u,g+=u,l=0),v&&++H>v&&(g=E,t=M,H=1,l=l||1);y=zzfxX.createBuffer(1,r.length,b);y.getChannelData(0).set(r);z.buffer=y;z.connect(zzfxX.destination);z.start()}
zzfxX=new(window.AudioContext||webkitAudioContext);zzfxX.z=zzfxX.createBufferSource;zzfxX.createBufferSource=(s=zzfxX.z())=>(s.start=s.start||(t=>zzfxX.noteOn(t)),s)

var btn
  =document.getElementsByTagName('button');
function knock(key){
  switch(key){
    case 'btn1':
      btn[0].onClick=zzfx(...[,,1675,,.06,.24,1,1.82,,,837,.06]);
      break;
    case 'btn2':
      btn[1].onClick=zzfx(...[,,925,.04,.3,.6,1,.3,,6.27,-184,.09,.17]);
      break;
    case 'btn3':
      btn[2].onClick=zzfx(...[,,539,0,.04,.29,1,1.92,,,567,.02,.02,,,,.04]);
      break;
    case 'btn4':
      btn[3].onClick=zzfx(...[,,80,.3,.4,.7,2,.1,-0.73,3.42,-430,.09,.17,,,,.19]);
      break;
    case 'btn5':
      btn[4].onClick=zzfx(...[,,537,.02,.02,.22,1,1.59,-6.98,4.97]);
      break;
    case 'btn6':
      btn[5].onClick=zzfx(...[,,528,.01,,.48,,.6,-11.6,,,,.32,4.2]);
      break;
    case 'btn7':
      btn[6].onClick=zzfx(...[,,20,.04,,.6,,1.31,,,-990,.06,.17,,,.04,.07]);
      break;
    case 'btn8':
      btn[7].onClick=zzfx(...[,,662,.82,.11,.33,1,0,,-0.2,,,,1.2,,.26,.01]);
      break;
    case 'btn9':
      btn[8].onClick=zzfx(...[1.5,.5,270,,.1,,1,1.5,,,,,,,,.1,.01]);
      break;
    case 'btn10':
      btn[9].onClick=zzfx(...[,,224,.02,.02,.08,1,1.7,-13.9,,,,,,6.7]);
      break;
    case 'btn-space':
      btn[10].onClick=zzfx(...[,,129,.01,,.15,,,,,,,,5]);
      break;
    default:
      break;
  }  
} 
document.onkeydown=function(e){
  var i = e.keyCode;
  switch(i){
    case 81:
      knock('btn1');
      break;
    case 87:
      knock('btn2');
      break;
    case 69:
      knock('btn3');
      break;
    case 82:
      knock('btn4');
      break;
    case 84:
      knock('btn5');
      break;
    case 89:
      knock('btn6');
      break;
    case 85:
      knock('btn7');
      break;
    case 73:
      knock('btn8');
      break;
    case 79:
      knock('btn9');
      break;
    case 80:
      knock('btn10');
      break;
    case 32:
      knock('btn-space');
      break;
    default:
      break;
     
  }
}