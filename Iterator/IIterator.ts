export default interface IIterator {
  hasNext(): boolean;
  next(): any; // I think this should be iterable later on ...
}
