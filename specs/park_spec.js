const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  beforeEach(function () {
    park = new Park('Jurassic Park',5);
    const dinosaur = new Dinosaur ('Diplodocus', 'herbivore', 30);
    park.addDinosaur(dinosaur);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual,'Jurassic Park');
  });


  it('should have a ticket price',function () {

    const actual = park.ticket;
    assert.strictEqual(actual,5);
  });

  it('should have a collection of dinosaurs',function(){

    const actual = park.dinoCount();
    assert.deepStrictEqual(actual, 1);
  });

  it('should be able to add a dinosaur to its collection', function(){

    const dinosaur2 = new Dinosaur ('Velociraptor', 'carnivore', 25);
    park.addDinosaur(dinosaur2);
    const actual = park.dinoCount();
    assert.deepStrictEqual(actual, 2);
  });

  it('should be able to remove a dinosaur from its collection',function(){

    park.removeDinosaur('Diplodocus')
    const actual = park.dinoCount();
    assert.deepStrictEqual(actual, 0);
  }); //not entirely sure this does pass...

  it('should be able to find the dinosaur that attracts the most visitors', function(){

    const actual = park.mostVisitors();
    assert.deepStrictEqual(actual, 'Diplodocus');
    });

  it('should be able to find all dinosaurs of a particular species',function(){
    park.findSpecies('Diplodocus')
    const actual = park.dinoCount();
    assert.deepStrictEqual(actual, 1);
  });

  xit('should be able to remove all dinosaurs of a particular species', function(){
//accidentally did that for the remove dinosaurs
  });

});
