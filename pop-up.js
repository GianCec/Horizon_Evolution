function popUpDraw(){
    for(let i=0; i<N;i++){
        let x=width*0.01;
        let w=width/5;
        let h=w/4;
        let y=himg[0]-h*(i+0.5);
        let j=i+2.05;
        if(i>2){
            j=i-1.02;
        }
        let y2=himg[0]-h*(j+0.5);
        if(bS[i].State){

       if(overArea(x,y,w,h)){
        if(i==0){
            col[i]=255;
        }
        popUp(x,y2,w*1.5,h*2,popUpText[i],col[i]);

       }

        }
    }
}

function popUp(x,y,w,h,str,col){
    stroke(col);
    strokeWeight(1);
    fill(0);
    rect(x,y,w,h);
    fill(col);
    noStroke();
     dx=w/10;
     dy=h/10;
     textAlign(LEFT,TOP);
     textSize(bd*1.1);

     text(str,x+dx/2,y+dy,w-dx,h-dy);
     noFill();
     textSize(bd);


  }