import supervillains, { randomSupervillain } from 'supervillains';
import superheroes from 'superheroes';
import {randomSuperhero} from 'superheroes';
var myHeroName = randomSuperhero();
var myVillianName = randomSupervillain();
console.log("My Super Hero name: " + myHeroName);
console.log("My Super Villain name: " + myVillianName);