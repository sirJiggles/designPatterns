export default interface IPizza {
  prepare(): void;
  bake(): void;
  cut(): void;
  box(): void;
  name: string;
}
