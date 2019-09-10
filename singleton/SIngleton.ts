class Singleton {
  // static instance is the one that we will ALWAYS ref
  // static means we also call from outside without an instance
  // for example `Singleton.instance` no need to do
  // `const t = new Singleton(); t.instance();`
  private static instance: Singleton;

  // as the constructor here is private we cannot call
  // new Singleton()
  private constructor() {
    // do something construct...
  }

  // this is lazy initialization of the singleton. however you could
  // use private static instance = new Singleton() if you where
  // in a threaded environment ;)
  static getInstance() {
    if (!Singleton.instance) {
      // this however can cal new Singleton as we are inside it
      Singleton.instance = new Singleton();
      // ... any one time initialization goes here ...
    }
    return Singleton.instance;
  }
}
