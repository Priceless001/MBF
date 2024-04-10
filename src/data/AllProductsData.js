import CheesePizza from '../assets/images/cheese-pizza-375.jpg'
import ExtraCheesePizza from '../assets/images/cheese-pizza-376.jpg'
import VeggiePizza from '../assets/images/veggie-pizza.jpg'
import PepperoniPizza from '../assets/images/pepperoni-pizza.jpg'
import MeatPizza from '../assets/images/meat-pizza.jpg'
import MargheritaPizza from '../assets/images/margherita-pizza.jpg'
import BBQPizza from '../assets/images/BBQ-chicken-pizza.jpg'
import AllaPalla from '../assets/images/pizza-alla-pala.jpg'
import Prosciutto from '../assets/images/Prosciutto-e-Funghi-Pizza.jpeg'
import DetroitStyle from '../assets/images/Detroit-Style-pizza.jpeg'
import GarlicFingers from '../assets/images/Garlic-Fingers-pizza.jpeg'
import StLous from '../assets/images/St-Louis-Style-Pizza.jpg'
import Rustica from '../assets/images/Pizza-Rustica.jpg'
import Genovese from '../assets/images/Genovese.jpeg'
import Efichi from '../assets/images/Pizza-e-fichi.jpeg'
import Apizza from '../assets/images/Apizza.jpg'
import StuffedPizza from '../assets/images/Stuffed-Pizza.jpg'
import Pugliese from '../assets/images/Pugliese.jpeg'
import TomatoPie from '../assets/images/Tomato-Pie.jpeg'
import Fugaza from '../assets/images/fugazza.jpeg'
import DiZucca from '../assets/images/di-zucca.jpeg'
import Fugazeta from '../assets/images/Fugazzeta.jpeg'
import Carbonara from '../assets/images/carbonara.jpeg'
import GranmaPie from '../assets/images/Grandma-Pie.jpeg'
import Padellino from '../assets/images/padellino.jpeg'
import CaliforniaStyle from '../assets/images/California-Style.jpeg'
import Fritta from '../assets/images/fritta.jpeg'
import Romana from '../assets/images/romana.jpeg'
import ThinCrust from '../assets/images/Thin-Crust.jpeg'
import GreekStyle from '../assets/images/Greek-Style.jpeg'
import PizzaRomana from '../assets/images/PizzaRomana.jpeg'

export const allProductsData = [
  {
    id: 'cheese-pizza',
    ItemImg: CheesePizza,
    ItemName: 'Cheese Pizza',
    ItemIngredients: 'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
    ItemPrice: (2).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: '1kg', value: 'small' },
          { id: 'medium', value: 'medium' },
          { id: 'large', value: 'large' },
        ],
      },
    ],
  },

  {
    id: 'veggie-pizza',
    ItemImg: VeggiePizza,
    ItemName: 'Veggie Pizza',
    ItemIngredients:
      'Pizza sauce, Onion, Capsicum, Pineapple, Ginger, Hotshot sauce, Coriander, Garlic sauce, Butter sauce, Cheese.',
    ItemPrice: (9).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'pepperoni-pizza',
    ItemImg: PepperoniPizza,
    ItemName: 'Pepperoni Pizza',
    ItemIngredients:
      'Pizza crust yeast, pepperoni, tomato paste, mozzarella cheese, sugar.',
    ItemPrice: (5).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'meat-pizza',
    ItemImg: MeatPizza,
    ItemName: 'Meat Pizza',
    ItemIngredients:
      'Sausage, pizza dough, bacon, pizza sauce, red pepper flakes.',
    ItemPrice: (10).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'margherita-pizza',
    ItemImg: MargheritaPizza,
    ItemName: 'Margherita Pizza',
    ItemIngredients:
      'Pizza dough, tomato sauce, fresh mozzarella, olive oil, basil leaves.',
    ItemPrice: (8).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'bbq-chicken-pizza',
    ItemImg: BBQPizza,
    ItemName: 'BBQ Chicken Pizza',
    ItemIngredients:
      'Rotisserie chicken, pizza dough, bbq sauce, smoked cheddar cheese, mozzarella cheese.',
    ItemPrice: (10).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'alla-pala-pizza',
    ItemImg: AllaPalla,
    ItemName: 'Pizza alla pala',
    ItemIngredients: 'Cheese, cherry tomatoes, arugula, olive oil, yeast.',
    ItemPrice: (12).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'prosciutto-e-funghi-pizza',
    ItemImg: Prosciutto,
    ItemName: 'Prosciutto e Funghi Pizza',
    ItemIngredients:
      'Italian sausage meat, truffle oil, pizza dough, san marzano tomatoes, bocconcini cheese.',
    ItemPrice: (8).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'detroit-style-pizza',
    ItemImg: DetroitStyle,
    ItemName: 'Detroit-Style Pizza',
    ItemIngredients:
      'Pizza dough, pizza sauce, brick cheese, rapid rise yeast, olive oil.',
    ItemPrice: (11).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'garlic-fingers',
    ItemImg: GarlicFingers,
    ItemName: 'Garlic Fingers',
    ItemIngredients:
      'Bread flour, mozzarella cheese, butter, olive oil, instant yeast.',
    ItemPrice: (7).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'st-ouis-style-pizza',
    ItemImg: StLous,
    ItemName: 'St. Louis-Style Pizza',
    ItemIngredients:
      'Liquid smoke, swiss cheese, white cheddar cheese, light corn syrup, pizza sauce.',
    ItemPrice: (13).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'rustica-pizza',
    ItemImg: Rustica,
    ItemName: 'Pizza Rustica',
    ItemIngredients: 'Prosciutto, pepperoni, mozzarella, crust, eggs.',
    ItemPrice: (13).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'pesto-genovese-pizza',
    ItemImg: Genovese,
    ItemName: 'Pizza pesto Genovese',
    ItemIngredients:
      'Pine nuts, baby potatoes, snow pea shoots, lemon, buffalo mozzarella.',
    ItemPrice: (13).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'e-fichi-pizza',
    ItemImg: Efichi,
    ItemName: 'Pizza e fichi',
    ItemIngredients: 'Coconut flour, truffle oil, fig jam, cheese, prosciutto.',
    ItemPrice: (12).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'apizza-pizza',
    ItemImg: Apizza,
    ItemName: 'Apizza',
    ItemIngredients:
      'Ricotta cheese, tomato sauce, fresh basil pesto, fresh mozzarella cheese, semolina flour.',
    ItemPrice: (11).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  }                                  
]
