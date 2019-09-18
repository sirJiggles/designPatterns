import TeaFacade from './TeaFacade';
import Tea from './Steps/Tea';
import Milk from './Steps/Milk';
import Kettle from './Steps/Kettle';
import Fridge from './Steps/Fridge';

// our sub system classes
const tea = new Tea();
const milk = new Milk();
const kettle = new Kettle();
const fridge = new Fridge();

const teaMaker = new TeaFacade(kettle, milk, fridge, tea);

// one liner, nice and simple sub system 'wrapper' of a sorts
teaMaker.makeTea();
