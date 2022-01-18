const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };

  const dragonDamage = () => Math.ceil(Math.random() * (dragon.strength - 15) + 15);
  const warriorDamage = () => Math.ceil(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + warrior.strength);
  const mageDamage = () => Math.ceil(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + mage.intelligence);
  const mageMana = () => mage.mana > 15 ? mage.mana = mage.mana - 15 : mage.mana = 0;
  const mageAtac = () => {
      const resultAtacMag = {
      damage: mage.mana !== 0 ? mageDamage() : 'Não possui mana suficiente',
      mana: mage.mana
  };
  mage.mana -= 15;
  return resultAtacMag;
}
  console.log(mageAtac());
  console.log(mage.mana);