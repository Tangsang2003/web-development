function HouseKeeper(name, age, yearsOfExperience, languages) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.languages = languages;
    
    // Function of an Object
    this.clean = function() {
        console.log("Cleaning in Progress...");
    }
}

houseKeeper1 = new HouseKeeper("Jane", 33, 12, ["Hindi", "Nepali"]);