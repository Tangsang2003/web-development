// This is the solution for 5 by 5 grid only.  

function main() {
    beeperIsRight();
    turnLeftAndGo();
    beeperIsLeft();
    turnRightAndGo();
    beeperIsRight();
    turnLeftAndGo();
    beeperIsLeft();
    turnRightAndGo();
    beeperIsRight();
 }
 function beeperIsRight() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
 }
 function turnLeftAndGo() {
    turnLeft();
    move();
    turnLeft();
    move();
 }
 function beeperIsLeft() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
 }
 function turnRightAndGo() {
    turnRight();
    move();
    turnRight();
 }
 
 
 
 