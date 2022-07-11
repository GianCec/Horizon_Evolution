function impDraw(){
    
    imp.beginShape();
    imp.background(0);
    imp.noFill();
    if(bPc.State && bP.State){
        imp.stroke(255,100);

        imp.circle(imp.width/2,imp.height/2,D*2);
      }
    let scale=scaleR;
if(bSc[1].State){
    scale=scaleR/2;
}
    for(let i=0;i<N;i++){
        let x = table[i][int(bC[0].State)].getNum(int(t),0)*scale*2;

        if(bS[i].State){
            
            imp.stroke(col[i]);

      imp.circle(wimg[1]/2,wimg[1]/2,x);
      if(i==0){
        for(let j=0;j<4;j++){
            x= table[i][int(bC[0].State)].getNum(int(t),0)*scale*2*exp(j+2);
            imp.circle(wimg[1]/2,wimg[1]/2,x);
      }
        }
    }
    imp.endShape();
}
}