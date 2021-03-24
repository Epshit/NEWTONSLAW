rope1= new rope(bobObject1.body,roofObject.body-bobDiameter*2,0)
rope2= new rope(bobObject2.body,roofObject.body-bobDiameter*2,0)
rope3= new rope(bobObject3.body,roofObject.body-bobDiameter*2,0)
rope4= new rope(bobObject4.body,roofObject.body-bobDiameter*2,0)

display()
{
var pointA=this.rope.bodyA.position;
var pointB=this.rope.bodyB.position;

strokeWeight(2);

var Anchor1X=pointA.x
var Anchor1Y=pointA.y 

var Anchor2=pointB.x+this.offsetX
var Anchor2=pointB.y+this.offsetY

line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)
}