// Excercise: 1.1
function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
 }
 function move4(){
    move();
    move();
    move();
    move();
 }
 function godiag(){
    move();
    turnLeft();
    move();
    turnRight();
    putBeeper();
 }
 function main(){
    putBeeper();
    godiag();
    godiag();
    godiag();
    godiag();
 }
 

// Excercise: 1.2
function turnRight(){
    turnLeft();
    turnLeft();
    turnLeft();
 }
 function move4even(){
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
 }
 function move4odd(){
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
 }
 function levelupright()
 {
    turnLeft();
    move();
    turnLeft();
 }
 function levelupleft()
 {
    turnRight();
    move();
    turnRight();
 }
 function main(){
    move4even();
    levelupright();
    move4odd();
    levelupleft();
    move4even();
    levelupright();
    move4odd();
    levelupleft();
    move4even();  
 }