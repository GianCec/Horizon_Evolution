function expSetup(){
    let jump=1;
    for(let sc=0;sc<2;sc++){
    for(let coo=0;coo<2;coo++){
    for(let i=0;i<N;i++){
 let scaleX=scaleT;
 let scaleY=scaleR;
if(sc==0){
     scaleY=scaleR/2;

}
exp[i][coo][sc].beginShape();
exp[i][coo][sc].translate(0,exp[i][coo][sc].height/2);
exp[i][coo][sc].noFill();
exp[i][coo][sc].stroke(col[i]);
for(let j=0;j<frame;j=j+jump){
let x = table[i][coo].getNum(j,1)*scaleX;
let y = table[i][coo].getNum(j,0)*scaleY;
exp[i][coo][sc].vertex(x,y);
}
exp[i][coo][sc].endShape();
exp[i][coo][sc].beginShape();
//exp[i][coo].translate(0,exp[i][coo].height/2)
exp[i][coo][sc].noFill();
exp[i][coo][sc].stroke(col[i]);
for(let j=0;j<frame;j=j+jump){
  print(j);
//let x = table[i][coo].getNum(1,1);
let x = table[i][coo].getNum(j,1)*scaleX;
let y = table[i][coo].getNum(j,0)*scaleY;

//let y = table[i][coo].getNum();
exp[i][coo][sc].vertex(x,-y);
}
exp[i][coo][sc].endShape();


   
if(i==0){
    for(let z=0;z<4;z++){
    exp[i][coo][sc].beginShape();
    exp[i][coo][sc].noFill();
    exp[i][coo][sc].stroke(col[i]);
    for(let j=0;j<frame;j=j+jump){
    let x = table[i][coo].getNum(j,1)*scaleX;
    let y = table[i][coo].getNum(j,0)*scaleY*exp(z+2);
    exp[i][coo][sc].vertex(x,y);
    }
    exp[i][coo][sc].endShape();

    exp[i][coo][sc].beginShape();
    //exp[i][coo][sc].translate(0,exp[i][coo][sc].height/2)
    exp[i][coo][sc].noFill();
    exp[i][coo][sc].stroke(255,100);

    for(let j=0;j<frame;j=j+jump){
    let x = table[i][coo].getNum(j,1)*scaleX;
    let y = table[i][coo].getNum(j,0)*scaleY*exp(z+2);
    exp[i][coo][sc].vertex(x,-y);
    }
    exp[i][coo][sc].endShape();

    
 
   
 
    
    
}
}
}
}
    }
}
    