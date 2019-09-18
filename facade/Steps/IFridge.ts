export default interface IFridge {
  open(): void;
  reachFor(item: string): void;
  putBack(item: string): void;
  close(): void;
}
