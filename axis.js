let axisImg1=[];
let axisImg2=[];
let border;
function axisSetup(){
border=width/10;
for (let i=0;i<2;i++){
axisImg1[i]=createGraphics(wimg[0]+2*border,himg[0]+2*border);
axisImg2[i]=createGraphics(wimg[1]+2*border,himg[1]+2*border);
}
infoNum1=[true,true,true,false];  //Sopra sx destra sotto
infoSymm1=[false,true,true,false]; //true = symm
infoUR1=[true,true,false,false];  //true sx->dx up->down 
infoSCL1=[false,true,true,false];


infoNum2=[false,false,true,true];  //Sopra sx destra sotto
infoSymm2=[true,true,true,true]; //true = symm
infoUR2=[true,true,false,true];  //true sx->dx up->down 
infoSCL2=[true,true,true,true];

axis(exp[0][0][0],axisImg1[0],infoNum1,infoSymm1,infoUR1);
axis(imp         ,axisImg2[0],infoNum2,infoSymm2,infoUR2);
axis(exp[0][0][0],axisImg1[1],infoNum1,infoSymm1,infoUR1,infoSCL1);
axis(imp         ,axisImg2[1],infoNum2,infoSymm2,infoUR2,infoSCL2);
}


function axis(img,axisImg,infoNum,infoSym,infoUR,infoSCL=[false,false,false,false]){
    let x=[];
    let y=[];
      x[0]=border;
      y[0]=border;
      x[1]=border+img.width;
      y[1]=border+img.height;
      for(let i=0;i<4; i++){
        let a=int(i/2)%2;
        let b=i%2;
      let UpRight=infoUR[i];
        let c=(i+1)%2;
     axisLine(axisImg,x[a],y[a],x[c],y[b],infoNum[i],infoSym[i],infoSCL[i],UpRight,border,i)
    }  
    }
    
    function axisLine(axisImg, xi,yi,xf,yf,info,infosym,infoSC,UpRight,bd,j){
        let scale=scaleR;
        let symFix=0;
        let resto=0;

        let scaleValue=1;
      if(  infoSC){
        scaleValue=2;
      }
     // axisImg.background(100);
         axisImg.stroke(255);
      axisImg.line(xi,yi,xf,yf);
      let d=dist(xi,yi,xf,yf);
     
      let n=int(d/scale/2);
      let SCL=1;
      let xti,xtf,yti,ytf;
      for(let i= 0 ; i<n+1;i++ ){
        let  valueI1=i*scaleValue;
        let  valueI2=valueI1;
        if(infosym==false){
        valueI1=abs(i-n+1)*scaleValue;
          valueI2=abs(i+n+1)*scaleValue;
          if(UpRight){
                valueI1=abs(i+n+1)*scaleValue;
          valueI2=abs(i-n)*scaleValue;
             }
        }
         axisImg.textSize(10);
          let l=bd/80*SCL;
    if(!infosym){
      resto=2;
    }
        if(i%5==resto){ //Regola lunghezza
           
           l=bd/40*SCL;}
       if(valueI1==0){
         
          l=bd/(25)*SCL;}
        if(xi==xf){
          yti=+d/2+bd+i*scale;
          ytf=yti;
          xti=xi-l;
          xtf=xi+l;
       axisImg.line(xti,yti,xtf,ytf);
            if(info==true && i%5==0){  
      l=bd/40*SCL;
      axisImg.noStroke();
      axisImg.fill(255);

       axisImg.textAlign(CENTER, CENTER);               
    axisImg.text(valueI1, xi+s(j)*l*3,yti);
      }
      axisImg.stroke(255);

             yti=d/2+bd-i*scale;
        ytf=yti;
            if(info==true && i%5==0 && i!=0){  
                axisImg.noStroke();
                axisImg.fill(255);
       axisImg.textAlign(CENTER, CENTER);               
    axisImg.text(valueI2, xi+s(j)*l*3,yti);
      }
      axisImg.stroke(255);

            axisImg.line(xti,yti,xtf,ytf);
      }

      if(!infosym){
        resto=2;
        symFix=1;

      }
     
         if(yi==yf){
       
          yti=yi-l;
          ytf=yi+l;
          xti=d/2+bd+i*scale+symFix;
          xtf=xti;
       axisImg.line(xti,yti,xtf,ytf);
                 if(info==true && i%5==resto){  
    l=bd/40*SCL;
    axisImg.noStroke();
    axisImg.fill(255);
       axisImg.textAlign(CENTER, CENTER);               
    axisImg.text(valueI1, xti,yi+s(j)*l*3);
      }
      axisImg.stroke(255);
      if(!infosym){
        resto=2;
        symFix=6;
      }
         xti=d/2+bd-i*scale-symFix;
       xtf=xti;
            axisImg.line(xti,yti,xtf,ytf);
      
                 if(info==true && i%5==resto){  
                    axisImg.noStroke();
                    axisImg.fill(255);
           axisImg.textAlign(CENTER, CENTER);               
           axisImg.text(valueI2, xti,yi+s(j)*l*3);
      }
      }
    
      }
    
      
    }
    
    function s(i){
     if(int(i/2)==0){
      return (-1);
     }else{
       return(1);
     }
    }