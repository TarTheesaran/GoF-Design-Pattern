import { Animal, Cat, Dog, Pet } from './animal';
import { Owner } from './owner';

describe('Animal', () => {
  // it('should be able to eat', () => {
  //   const animal = new Animal('dog');
  //   expect(animal.eat()).toBe('I am eating');
  // });

  describe('Dog & Cat', () => {
    it('sohuld be ale to eat like animal', () => {
      let animal: Animal = new Dog('Poddle');
      expect(animal.eat()).toBe('I am eating like dog');

      animal = new Cat('Oriji');
      expect(animal.eat()).toBe('I am eating like cat');
    });
  });

  describe('Owner', () => {
    it('should be able to play with dog', () => {
      const owner = new Owner();
      let pet: Pet = new Dog('Poodle');
      owner.have(pet);
      expect(owner.play()).toBe('bork bork');

      pet = new Cat('Origi');
      owner.have(pet);
      expect(owner.play()).toBe('Meow!');
    });
  });
});
