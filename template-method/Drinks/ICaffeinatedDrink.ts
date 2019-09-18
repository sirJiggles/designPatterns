export default interface ICaffeinatedDrink {
  prepare(): void;
  boilWater(): void;
  pour(): void;
  brew(): void;
  addCondiments(): void;
}
