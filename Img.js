var cipher;

function imgSetup(){
   cipher=1;
    txtButton = createGraphics(width,height);
    infoLoad();
for (let i=0;i<N;i++){
    exp[i]=[];
    
    for (let j=0;j<2;j++){
  exp[i][j] = [];
 
  for (let k=0;k<2;k++){
  exp[i][j][k] = createGraphics(wimg[0],himg[0]);    
  }
}

}
  expSetup();
  imp = createGraphics(wimg[1],himg[1]);
}

function imgDraw(){
  impDraw();


  for(let i=0;i<N;i++){
    if(bS[i].State){
  image(exp[i][int(bC[0].State)][int(bSc[0].State)],ximg[0],yimg[0]);
    }
  }
  image(imp,ximg[1],yimg[1]);
  
  image(axisImg1[int(bSc[1].State)],ximg[0]-border,yimg[0]-border);
  
  image(axisImg2[int(bSc[1].State)],ximg[1]-border,yimg[1]-border);
  if(bP.State){
  pointer();
  }
  timeIndexes();
  timeText(Tbar.x,Tbar.y,Tbar.l,Tbar.h);
  formula();
  formulaValue();
  image(txtButton,0,0);
  if(bRel.State){
    relation();
  }
}
function formula(){
  let x=width*0.01;
  let dx=(width-x)*0.2;
let w=width/5;
let h=w/4;
let ds=1;
let future=true;
if(t>t0){
future=false;
}
for (let i=0;i<N;i++){

  if(bS[i].State){
image(formulas[i][int(bC[1].State)],x,himg[0]-h*ds*(i+0.5),w,h);
  if(i==4){
   let j= int(bC[1].State)+2*int(future);
    image(formulas[i][j],x,himg[0]-h*ds*(i+0.5),w,h);

  }
}
}
let a=0.7;
//image(timeImg,x+dx,himg[0]-h*ds*0.58,h*a,h*a);
}
function formulaValue(){
  let x=width*0.01;
  let w=width/5;
  let h=w/4;
 
  let ds=0.93;
let dx=[-w*0.24,w*0.09,w*0.17,w*0.23,w*0.25]
let dy=[-h*0.04,-h*0.03,h*0.0,h*0.03,h*0.1]
if(!bC[0].State){
  dx=[-w*0.24,w*0.02,w*0.24,w*0.32,w*0.37]
  dy=[-h*0.04,h*0.04,h*0.04,h*0.09,h*0.07]
  if(t>t0){
    dy[4]= h*0.15;
  }
}

let v=[];
textAlign(CENTER, CENTER);               
textSize(bd);
time= table[0][0].getNum(int(t),1);
noStroke;
for (let i=0;i<N;i++){
  if(bS[i].State){
v[i]= table[i][int(bC[0].State)].getNum(int(t),0);

if(i!=0){
fill(col[i]); 
  text(round(abs(v[i]),cipher)+" Glyr", x+w*0.45+dx[i],himg[0]-dy[i]-h*ds*i);
}else{
  v[i]= table[i][0].getNum(int(t),0);

  fill(0xE0, 0xE0, 0xE0); 
  text(round(v[i],cipher+1), x+w*0.45+dx[i],himg[0]-dy[i]-h*ds*i);
}
  }
}
//fill(0x2B, 0x3A, 0x67);
//text(round(time,cipher)+" Gyr", x+w*1.2,himg[0]-dy[0]);
textSize(12);

}

function cross(x,y){
  let d=5;
  stroke(255);
  line(x+d,y,x-d,y);
  line(x,y+d,x,y-d);

}

function pointer(){
  let SC=1;
  if(bSc[1].State){
    SC=2;
  }
let Cx=ximg[1]+imp.width/2;
let Cy=yimg[1]+imp.height/2;

  cross(Cx,Cy);
  cross(Px,Py);
  stroke(255,100);
  dottedLine(Cx,Cy,Px,Py);
  D= dist(Cx,Cy,Px,Py);

  fill(255);

 textWidth(10);
noStroke();
 let rangeX=80;
 let rangeY=30;
  let devX=map(Px-ximg[1],0,wimg[1],-rangeX,40);

  let devY=map(Py,0,wimg[1],-rangeY,rangeY);
  textSize(bd);
  textAlign(CENTER, CENTER);   

  text(round(D/scaleR*SC,cipher)+" Glyr",Px-devX,Py-devY);

}

function timeIndexes(){
 
 let xline=map(t,0,frame,ximg[0],ximg[0]+wimg[0]-5);
 stroke(0x2B, 0x3A, 0x67);
  if(t>5){
  
 
  line(xline,yimg[0],xline,yimg[0]+himg[0]);
  }
 let time= table[0][0].getNum(int(t),1);
 fill(255);
 stroke(255);
 //noStroke();
 textAlign(CENTER, CENTER);               
 textSize(bd);

 noStroke();
  text("Time: t = "+ round(time,cipher)+" Gyr", xline,yimg[0]+himg[0]+12);
  stroke(255,150);
  if(D<himg[0]/2){
  if(Py>height/2){
  cross(xline,D+yimg[0]+himg[0]/2)
  }else{
    cross(xline,-D+yimg[0]+himg[0]/2)

  }}
}

function timeText(x,y,w,h){
  let xline=map(t,0,frame,x,x+w);
 
  let time= table[0][0].getNum(int(t),1);
  stroke(255);
  fill(255);
  textAlign(CENTER, CENTER);   
  textSize(bd);
  noStroke();
  text("t= "+ round(time,cipher)+" Gyr", xline+10,y+2*h);

}

function infoLoad(){
  let x=width*0.01;
  let dx=(width-x)*0.2;
  let h=width/16*1.1;
  let X=x+dx
  let Y=himg[0]-h*0.5;
  bd=height*0.018;
  txtButton.stroke(255);
  txtButton.noFill(255);

  txtButton.line(X,Y-bd/2,X+width/10,Y-bd/2);
  txtButton.noStroke();
  txtButton.fill(255);
  txtButton.textSize(bd+3);
  txtButton.text("Legend",X,Y-bd)
  txtButton.textSize(bd);

  txtButton.text("Gyr : Giga-years",X,Y+bd)
  txtButton.text("Glyr : Giga-lightyears",X,Y+bd*2.5)
  txtButton.text("ON",X+bd*1.5,Y+bd*4);
  txtButton.text("OFF",X+bd*1.5,Y+bd*5.5);

  txtButton.fill(0x2B, 0x3A, 0x67);
  txtButton.circle(X+bd/2,Y+bd*3.5,bd);
  txtButton.fill(0xE3, 0x17, 0x0A);
  txtButton.circle(X+bd/2,Y+bd*5,bd);
  txtButton.fill(255);


  txtButton.textAlign(CENTER);
 let axisInfo="Space : Glyr  ";
  txtButton.text(axisInfo,ximg[1]+wimg[1]/2,yimg[0]/2);
  txtButton.push();
  txtButton.translate(wimg[0]+ximg[0]*1.05,yimg[0]+himg[1]/2);
  txtButton.rotate(-PI/2);
  txtButton.textAlign(CENTER);
  txtButton.text(axisInfo,0,0);
  txtButton.pop();
  txtButton.push();
  txtButton.translate(ximg[0]*0.95,yimg[0]+himg[1]/2);
  txtButton.rotate(-PI/2);
  txtButton.textAlign(CENTER);
  txtButton.text("Distance from the Observer in Glyr  ",0,0);
  txtButton.pop();
  let xt=[];
  let yt=[];
  let BD=height/67/2;
  let BX=width*0.01;
  let BY=height*0.392;
  
  for(let i=0;i<3;i++){
    let theta=TWO_PI/3*i;
    xt[i]=BX+BD*cos(theta);
    yt[i]=BY+BD*sin(theta);

  }
  txtButton.fill(255);
    txtButton.triangle(xt[0], yt[0],xt[1], yt[1],xt[2], yt[2]);
    let dBX=height/36;

    txtButton.textAlign(CENTER,CENTER);
    txtButton.text("R",BX+dBX,BY+1);
    txtButton.textAlign(LEFT);

    let TITLE="Horizons Evolution";
    txtButton.textSize(height/30);
    txtButton.text(TITLE,width/60*5,height/40*2);
    txtButton.stroke(255);
    txtButton.line(width/120,height/40*2,width/60*5,height/40*2);
    txtButton.line(width/60*5+textWidth(TITLE)*2.08,height/40*2,width/60*18,height/40*2);
    txtButton.noStroke();
}

function dottedLine(xi,yi,xf,yf){
  let d=dist(xi,yi,xf,yf);
  let l=10;
  let n=d/l;

  for(let i=0;i<n;i++){
    if(i%2==0){
    let vi= i/n;
    let  vf= (i+1)/n;
   xti=lerp(xi,xf,vi);
    yti=lerp(yi,yf,vi);
        xtf=lerp(xi,xf,vf);
    ytf=lerp(yi,yf,vf); 
    if(ytf>yf || xtf>xf){
      ytf=yf;
      xtf=xf;
    }
      line(xti,yti,xtf,ytf);
    }
  }
  
}

function relation(){
  let scaleX=scaleT;
  let scaleY=scaleR; 
   if(bSc[1].State){
      scaleX=scaleR/2;
  }
 
  for(let i=1; i<N;i++){
     if(bS[i].State){
    let x = table[i][int(bC[0].State)].getNum(int(t),0)*scaleX;
    let time = table[i][int(bC[0].State)].getNum(int(t),1)*scaleY;
    xi=ximg[0]+time;
    yi=yimg[0]+himg[0]/2+x;
    xf=ximg[1]+wimg[1]/2;
    yf=yi;
    stroke(col[i],50);
    ymax=yimg[0]+himg[0]
    if(yi<ymax){
    dottedLine(xi,yi,xf,yf);
    yi=yimg[0]+himg[0]/2-x;
    yf=yi;
    dottedLine(xi,yi,xf,yf);
    }
   }
  }


}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
      if(t<frame){
    t++;
  }
  } else if (keyCode === LEFT_ARROW) {
      if(t>0){
          t--;
        }
  }
}
