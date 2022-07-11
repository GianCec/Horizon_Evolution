
let Px;
let Py;
let D;
function mousePressed(){

    for(let i=0; i<N;i++){
        bS[i].click();
         }
       
         
         for(let i=0; i<2;i++){
            bT[i].click();
            bC[i].click();
            bSc[i].click();
            }
            bP.click();
            bPc.click();
         Tbar.click();
         bToday.click();
         bRel.click();
         if(bT[1].State){
            t=0;
        }
        if(bT[0].State && t<frame){
            t++;
        }
        if(bToday.State){
            t=t0;
        }
        if(overGraphic(imp,ximg[1],yimg[1])){
            Px=mouseX;
            Py=mouseY;
            }

}

function mouseDragged(){
if(overGraphic(imp,ximg[1],yimg[1])){
Px=mouseX;
Py=mouseY;
}
Tbar.click();

}

function overGraphic(img,x,y){
if(mouseX>x && mouseX<x+img.width && mouseY>y && mouseY<y+img.height){
    return true;
}
return false;
}
function overArea(x,y,w,h){
    if(mouseX>x && mouseX<x+w && mouseY>y && mouseY<y+h){
        return true;
    }
    return false;
    }

