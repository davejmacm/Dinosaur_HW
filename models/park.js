const Park = function(name, price){
  this.name = name;
  this.ticket = price;
  this.collection = [];
}

Park.prototype.addDinosaur = function(dinosaur){
  this.collection.push(dinosaur);
}

Park.prototype.dinoCount = function(){
  return this.collection.length;
}

Park.prototype.removeDinosaur = function (species) {
  const remainingDinosaurs = [];

  for (const dinosaur of this.collection) {
    if (this.collection.species !== species) {
      remainingDinosaurs.push(dinosaur);
    }
  }

  this.collection = remainingDinosaurs;
};

Park.prototype.mostVisitors = function (){
maxVisitors = Math.max(...this.collection.visitors);
return maxVisitors;
};

Park.prototype.findSpecies = function (species) {
  const remainingDinosaurs = [];

  for (const dinosaur of this.collection) {
    if (this.collection.species === species) {
      remainingDinosaurs.push(dinosaur);
    }
  }

  this.collection = remainingDinosaurs;
};

module.exports = Park;
