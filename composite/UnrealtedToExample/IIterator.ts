// For more information on the iterator pattern have a look at the
// docs / demo for that
export default interface IIterator {
  hasNext(): boolean;
  next(): any;
}
