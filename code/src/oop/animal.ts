export abstract class Animal {
  constructor(breed: string) {
    this.breed = breed;
  }

  // attribute
  private breed: string = 'unknow';

  abstract eat(): string;
}

export class Dog extends Animal implements Pet {
  play(): string {
    return this.bork();
  }

  eat() {
    return 'I am eating like dog';
  }

  bork() {
    return 'bork bork';
  }
}

export class Cat extends Animal {
  play(): string {
    return this.cry();
  }

  eat(): string {
    return 'I am eating like cat';
  }

  cry() {
    return 'Meow!';
  }
}

export interface Pet {
  play(): string;
}
