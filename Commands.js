let ximg= [];
let yimg= [];
let wimg= [];
let himg= [];
//bottoni
let bS= [];  //status
let bT=[];   // time
let bToday;
let bC=[];   //coordinate
let bSc=[];  //scale
let bP;     //pointer
let bPc;
let bRel;
let  bd;
let Tbar;




  
  
    function commandSetup(){
       let bx=width*0.01;
       let by=height*0.35;
      let   byI=height/36;
      let bxI=(width*0.15);
         bd=height*0.018;
    for(let i=0; i<N;i++){
    bS[i]=new button(bx,by-byI*(i+1),bd,true,false)
    buttonText(bS[i],textGraphic[i],col[i]);
    }
   let byI2=byI/2;
   by=by+byI2;
   Tbar=new slider(bx+byI*2,by*1.05,width*0.27,height*0.018);
  xTB=bx+byI*2;
  yTB=by-bd/3;
  wTB=width/4;
  hTB=10;

   bT[0]=new button(bx,by*1.08,bd*1.3,true,false);
   bT[1]=new button(bx+byI,by*1.08,bd*1.3,false,false);
   
   bC[0]=new button(bx+bxI,by-byI*8,bd,true,true);
   buttonText(bC[0],"Comoving Coordinates");
   bC[1]=new button(bx+bxI,by-byI*9,bd,true,false);
   buttonText(bC[1],"Proper Coordinates");

   bSc[0]=new button(bx,by-byI*8,bd,true,true);
   buttonText(bSc[0],"Unit scale = 1 Glyr");
   bSc[1]=new button(bx,by-byI*9,bd,true,false);
   buttonText(bSc[1],"Unit scale = 2 Glyr");

   bP=new button(bx+bxI,by-byI*2,bd,true,false);
   buttonText(bP,"Show ruler");
   bPc=new button(bx+bxI,by-byI,bd,true,false);
   buttonText(bPc,"Show circle associeted to the ruler");

   bToday=new button(bx+bxI,by-byI*4,bd,false,false);
   buttonText(bToday,"Set time to today (t = 13.7Gyr)");
   bRel=new button(bx+bxI,by-byI*6,bd,true,false);
   buttonText(bRel,"Show relation between graphics");
    }

    function commandDraw(){
        for(let i=0; i<N;i++){
            bS[i].display();
            }
            Tbar.display();
            for(let i=0; i<2;i++){
            bT[i].display();
            bC[i].display();
            bSc[i].display();
            }
            bP.display();
            if(bP.State){
                bPc.display();
            }
            bToday.display();
            bRel.display();
            buttonCouple( bC[0], bC[1]);
            buttonCouple( bSc[0], bSc[1]);


    }

