type Cat = {
  meow: () => void;
};

type Dog = {
  bark: () => void;
};

type CutePet = Cat | Dog;

const animal: CutePet =
  Math.random() > 0.5
    ? { meow: () => console.log('Meow') }
    : { bark: () => console.log('Bark') };

function isCat(animal: CutePet): animal is Cat {
  return (animal as Cat).meow !== undefined;
}

if (isCat(animal)) {
  animal.meow();
} else {
  animal.bark();
}

// another example
interface Animal {
  name: string;
}

interface Bird extends Animal {
  fly: () => void;
}

interface Fish extends Animal {
  swim: () => void;
}

const animals: (Bird | Fish)[] = [
  { name: 'Eagle', fly: () => console.log('Flying') },
  { name: 'Shark', swim: () => console.log('Swimming') },
  { name: 'Penguin', swim: () => console.log('Swimming') },
];

function isBird(animal: Animal): animal is Bird {
  return (animal as Bird).fly !== undefined;
}

const birds = animals.filter(isBird);

birds.forEach((bird) => bird.fly());
