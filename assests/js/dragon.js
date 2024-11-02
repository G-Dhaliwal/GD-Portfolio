const town = document.querySelector('#imgTown');
const shop = document.querySelector('#imgShop');
const forestWooden = document.querySelector('#imgForestWooden');
const forestDagger = document.querySelector('#imgForestDagger');
const forestSword = document.querySelector('#imgForestSword');
const caveWooden = document.querySelector('#imgCaveWooden');
const caveDagger = document.querySelector('#imgCaveDagger');
const caveSword = document.querySelector('#imgCaveSword');
const castleWooden = document.querySelector('#imgCastleWooden');
const castleDagger = document.querySelector('#imgCastleDagger');
const castleSword = document.querySelector('#imgCastleSword');

let currentLevel = document.querySelector('#currentLevel');
let currentExp = document.querySelector('#currentExp');
let currentHealth = document.querySelector('#health');
let currentPotions = document.querySelector('#potions');
let currentGold = document.querySelector('#currentGold');
let currentWeapon = document.querySelector('#currentWeapon');
let currentLocation = document.querySelector('#currentLocation');
let fight = document.querySelector('#fightScreen');
let playerHealth = document.querySelector('#playerHealth');
let monsterHealth = document.querySelector('#monsterHealth');
let monsterName = document.querySelector('#monsterName');

let buttonOne = document.querySelector('#btnOne');
let buttonTwo = document.querySelector('#btnTwo');
let buttonThree = document.querySelector('#btnThree');
let buttonFour = document.querySelector('#btnFour');
let buttonFive = document.querySelector('#btnFive');

let level = 1;
let exp = 0;
let expTotal = 100;
let health = 10;
let hpTotal = 10;
let gold = 0;
let potions = 0;
let weapon = "Wooden Sword";
let playerLocation = "Town";
let monsterHp = 10;
let win = false;


buttonOne.onclick = first;
buttonTwo.onclick = second;
buttonThree.onclick = third;
buttonFour.onclick = fourth;
buttonFive.onclick = reset;


// Button Function

function first() {
    if (playerLocation == "Town") {
        goShop();
    } else if (playerLocation == "Shop") {
        buyPotion();
    } else {
        fightButton();
    }
}

function second() {
    if (playerLocation == "Town") {
        goForest();
    } else if (playerLocation == "Shop") {
        buyDagger();
    } else {
        potionButton();
    }
}

function third() {
    if (playerLocation == "Town") {
        goCave();
    } else if (playerLocation == "Shop") {
        buySword();
    } else {
        goTown();
    }
}

function fourth() {
    if (playerLocation == "Town") {
        goCastle();
    } else {
        goTown();
    }
}

// Travel Functions

function goTown() {
    playerLocation = "Town";
    currentLocation.innerText = `${playerLocation}`;
    fight.classList.add("hide");
    buttonDefault();
    weaponLocation();
    health = `${hpTotal}`;
    currentHealth.innerText = `${hpTotal} / ${hpTotal}`;
}


function goShop() {
    playerLocation = "Shop";
    buttonOne.innerText = "Town";
    currentLocation.innerText = `${playerLocation}`;
    buttonOne.innerText = "Potion (10G)";
    buttonTwo.innerText = "Dagger (15G)";
    buttonThree.innerText = "Sword (75G)";
    buttonFour.innerText = "Town";
    fight.classList.add("hide");
    weaponLocation(); 
}

function goForest() {
    playerLocation = "Forest";
    currentLocation.innerText = `${playerLocation}`;
    buttonOne.innerText = "Fight";
    buttonTwo.innerText = "Heal";
    buttonThree.innerText = "Flee";
    buttonFour.classList.add("hide");
    fight.classList.remove("hide");
    weaponLocation(); 
    monsterHp = 10;
    monsterName.innerText = "Slime";
    monsterHealth.innerText = `${monsterHp} / ${monsterHp}`;
    playerHealth.innerText = `${health} / ${health}`;
}

function goCave() {
    playerLocation = "Cave";
    currentLocation.innerText = `${playerLocation}`;
    buttonOne.innerText = "Fight";
    buttonTwo.innerText = "Heal";
    buttonThree.innerText = "Flee";
    buttonFour.classList.add("hide");
    fight.classList.remove("hide");
    weaponLocation();
    monsterHp = 50;
    monsterName.innerText = "Bear";
    monsterHealth.innerText = `${monsterHp} / ${monsterHp}`;
    playerHealth.innerText = `${health} / ${health}`;
}

function goCastle() {
    playerLocation = "Castle";
    currentLocation.innerText = `${playerLocation}`;
    buttonOne.innerText = "Fight";
    buttonTwo.innerText = "Heal";
    buttonThree.innerText = "Flee";
    buttonFour.classList.add("hide");
    fight.classList.remove("hide");
    weaponLocation();
    monsterHp = 200;
    monsterName.innerText = "Dragon";
    monsterHealth.innerText = `${monsterHp} / ${monsterHp}`;
    playerHealth.innerText = `${health} / ${health}`;
}

function buttonDefault() {
    buttonOne.innerText = "Shop";
    buttonTwo.innerText = "Forest";
    buttonThree.innerText = "Cave";
    buttonFour.innerText = "Castle";
    buttonFour.classList.remove("hide");
}


// Shop Functions

function buyPotion() {
    if (gold >= 10) {
        gold -= 10;
        currentGold.innerText = `${gold}`;
        potions += 1;
        currentPotions.innerText = `${potions} Potions`;
    }
}

function buyDagger() {
    if (gold >= 15 && weapon == "Wooden Sword") {
        gold -= 15;
        currentGold.innerText = `${gold}`;
        weapon = "Dagger";
        currentWeapon.innerText = "Dagger";
    }
}

function buySword() {
    if (gold >= 75 && weapon == "Dagger") {
        gold -= 75;
        currentGold.innerText = `${gold}`;
        weapon = "Sword";
        currentWeapon.innerText = "Sword";
    }
}


// make image add / remove hide class

function hideImg() {
    town.classList.add("hide");
    shop.classList.add("hide");
    forestWooden.classList.add("hide");
    forestDagger.classList.add("hide");
    forestSword.classList.add("hide");
    caveWooden.classList.add("hide");
    caveDagger.classList.add("hide");
    caveSword.classList.add("hide");
    castleWooden.classList.add("hide");
    castleDagger.classList.add("hide");
    castleSword.classList.add("hide");
}

function weaponLocation() {
    hideImg();
    if (weapon == "Wooden Sword") {
        locationWooden();
    } else if (weapon == "Dagger") {
        locationDagger();
    } else {
        locationSword();
    }
}

function locationWooden() {
    if (playerLocation == "Forest") {
        forestWooden.classList.remove("hide");
    } else if (playerLocation == "Cave") {
        caveWooden.classList.remove("hide");
    } else if (playerLocation == "Castle") {
        castleWooden.classList.remove("hide");
    } else if (playerLocation == "Shop") {
        shop.classList.remove("hide");
    } else {
        town.classList.remove("hide");
    }
}

function locationDagger() {
    if (playerLocation == "Forest") {
        forestDagger.classList.remove("hide");
    } else if (playerLocation == "Cave") {
        caveDagger.classList.remove("hide");
    } else if (playerLocation == "Castle") {
        castleDagger.classList.remove("hide");
    } else if (playerLocation == "Shop") {
        shop.classList.remove("hide");
    } else {
        town.classList.remove("hide");
    }
}

function locationSword() {
    if (playerLocation == "Forest") {
        forestSword.classList.remove("hide");
    } else if (playerLocation == "Cave") {
        caveSword.classList.remove("hide");
    } else if (playerLocation == "Castle") {
        castleSword.classList.remove("hide");
    } else if (playerLocation == "Shop") {
        shop.classList.remove("hide");
    } else {
        town.classList.remove("hide");
    }
}



// Battle functions

function fightButton() {
    if (playerLocation == "Forest") {
        fightSlime();
    } else if (playerLocation == "Cave") {
        fightBear();
    } else if (playerLocation == "Castle") {
        fightDragon();
    }
}

function potionButton() {
    if (health < hpTotal && potions >= 1) {
        potions -= 1;
        currentPotions.innerText = `${potions} Potions`;
        health += 20;
        if (health > hpTotal) {
            health = hpTotal;
        }
        currentHealth.innerText = `${health} / ${hpTotal}`;
        playerHealth.innerText = `${health} / ${hpTotal}`;
        if (playerLocation == "Forest") {
            slimeAttack();
        } else if (playerLocation == "Cave") {
            bearAttack();
        } else if (playerLocation == "Castle") {
            dragonAttack();
        }
        resetCheck();
    }
}

function playerAttack() {
    if (weapon == "Wooden Sword") {
        monsterHp -= 2;
    } else if (weapon == "Dagger") {
        monsterHp -= 10;
    } else if (weapon == "Sword") {
        monsterHp -= 25;
    }
}

function fightSlime() {
    playerAttack();
    monsterHealth.innerText = `${monsterHp} / 10`;
    slimeAttack();
    if (monsterHp <= 0) {
        goTown();
        gold += 1;
        currentGold.innerText = `${gold}`;
        if (currentExp.innerText != "Max Level") {
            exp += 10;
            currentExp.innerText = `${exp} / ${expTotal}`;
        }
        levelCheck();
    }
    resetCheck();
}

function slimeAttack() {
    let slimeDamage = Math.floor(Math.random() * 100);
    if (slimeDamage >= 50) {
        health -= 2;
        currentHealth.innerText = `${health} / ${hpTotal}`;
        playerHealth.innerText = `${health} / ${hpTotal}`;
    } else if (slimeDamage < 50) {
        health -= 1;
        currentHealth.innerText = `${health} / ${hpTotal}`;
        playerHealth.innerText = `${health} / ${hpTotal}`;
    }
}


function fightBear() {
    playerAttack();
    monsterHealth.innerText = `${monsterHp} / 50`;
    bearAttack();
    currentHealth.innerText = `${health} / ${hpTotal}`;
    playerHealth.innerText = `${health} / ${hpTotal}`;
    if (monsterHp <= 0) {
        goTown();
        gold += 5;
        currentGold.innerText = `${gold}`;
        if (currentExp.innerText != "Max Level") {
            exp += 50;
            currentExp.innerText = `${exp} / ${expTotal}`;
        }
        levelCheck();
    }
    resetCheck();
}

function bearAttack() {
    let bearDamage = Math.floor(Math.random() * 100);
    if (bearDamage >= 50) {
        health -= 5;
        currentHealth.innerText = `${health} / ${hpTotal}`;
        playerHealth.innerText = `${health} / ${hpTotal}`;
    } else if (bearDamage < 50) {
        health -= 3;
        currentHealth.innerText = `${health} / ${hpTotal}`;
        playerHealth.innerText = `${health} / ${hpTotal}`;
    }
}


function fightDragon() {
    playerAttack();
    monsterHealth.innerText = `${monsterHp} / 200`;
    dragonAttack();
    currentHealth.innerText = `${health} / ${hpTotal}`;
    playerHealth.innerText = `${health} / ${hpTotal}`;
    if (monsterHp <= 0) {
        win = true;
    }
    resetCheck();
}

function dragonAttack() {
    let dragonDamage = Math.floor(Math.random() * 100);
    if (dragonDamage >= 50) {
        health -= 20;
        currentHealth.innerText = `${health} / ${hpTotal}`;
        playerHealth.innerText = `${health} / ${hpTotal}`;
    } else if (dragonDamage < 50) {
        health -= 10;
        currentHealth.innerText = `${health} / ${hpTotal}`;
        playerHealth.innerText = `${health} / ${hpTotal}`;
    }
}

function levelCheck() {
    if (exp == 100 && level == 1) {
        level = 2;
        exp = 0;
        expTotal = 300;
        currentLevel.innerText = `Level ${level}`;
        currentExp.innerText = `${exp} / ${expTotal}`;
        health = 25;
        hpTotal = 25;
        currentHealth.innerText = `${health} / ${hpTotal}`;
        playerHealth.innerText = `${health} / ${hpTotal}`;
    } else if (exp >= 300 && level == 2) {
        level = 3;
        exp = 0;
        expTotal = 750;
        currentLevel.innerText = `Level ${level}`;
        currentExp.innerText = `${exp} / ${expTotal}`;
        health = 50;
        hpTotal = 50;
        currentHealth.innerText = `${health} / ${hpTotal}`;
        playerHealth.innerText = `${health} / ${hpTotal}`;
    } else if (exp >= 750 && level == 3) {
        level = 4;
        exp = 0;
        expTotal = 1000;
        currentLevel.innerText = `Level ${level}`;
        currentExp.innerText = `${exp} / ${expTotal}`;
        health = 70;
        hpTotal = 70;
        currentHealth.innerText = `${health} / ${hpTotal}`;
        playerHealth.innerText = `${health} / ${hpTotal}`;
    } else if (exp >= 1000 && level == 4) {
        level = 5;
        currentLevel.innerText = `Level ${level}`;
        currentExp.innerText = `Max Level`;
        health = 100;
        hpTotal = 100;
        currentHealth.innerText = `${health} / ${hpTotal}`;
        playerHealth.innerText = `${health} / ${hpTotal}`;
    }
}


// Reset Game

function resetCheck() {
    if (health <= 0) {
        buttonOne.classList.add("hide");
        buttonTwo.classList.add("hide");
        buttonThree.classList.add("hide");
        buttonFour.classList.add("hide");
        buttonFive.classList.remove("hide");
        buttonFive.innerText = "You lost. Try Again?";
    } else if (win == true) {
        buttonOne.classList.add("hide");
        buttonTwo.classList.add("hide");
        buttonThree.classList.add("hide");
        buttonFour.classList.add("hide");
        buttonFive.classList.remove("hide");
        buttonFive.innerText = "Congrats! You Defeated The Dragon! Play Again?";
    }
}

function reset() {
    buttonOne.classList.remove("hide");
    buttonTwo.classList.remove("hide");
    buttonThree.classList.remove("hide");
    buttonFour.classList.remove("hide");
    buttonFive.classList.add("hide");
    level = 1;
    exp = 0;
    health = 10;
    hpTotal = 10;
    gold = 0;
    potions = 0;
    weapon = "Wooden Sword";
    monsterHp = 10;
    win = false;
    goTown();
    currentPotions.innerText = `${potions} Potions`;
    currentExp.innerText = `${exp} / 100`;
    currentGold.innerText = `${gold}`;
    currentLevel.innerText = `Level ${level}`;
    currentWeapon.innerText = "Wooden Sword";
}

// max level turns back into counter