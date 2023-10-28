import { Cat, Dog, Pet } from './animal';

export class Owner {
  private pet: Pet | undefined;

  have(dog: Pet) {
    this.pet = dog;
  }

  play() {
    if (this.pet) {
      return this.pet.play();
    } else {
      return 'I do not have a dog';
    }
  }
}
