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
    ItemImg: PizzaRomana,
    ItemName: 'Sweet Beans',
    ItemIngredients: 'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
    ItemPrice: (1500).toFixed(2),
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
    ItemName: 'Watermelon (Large)',
    ItemIngredients:
      'Pizza sauce, Onion, Capsicum, Pineapple, Ginger, Hotshot sauce, Coriander, Garlic sauce, Butter sauce, Cheese.',
    ItemPrice: (2500).toFixed(2),
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
    ItemName: 'Tomatoes',
    ItemIngredients:
      'Pizza crust yeast, pepperoni, tomato paste, mozzarella cheese, sugar.',
    ItemPrice: (1000).toFixed(2),
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
    ItemName: 'Onions',
    ItemIngredients:
      'A round or elongated bulb vegetable with a strong, pungent flavor that mellows when cooked.',
    ItemPrice: (1000).toFixed(2),
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
    ItemName: 'Chill Pepper',
    ItemIngredients:
      'Pizza dough, tomato sauce, fresh mozzarella, olive oil, basil leaves.',
    ItemPrice: (1500).toFixed(2),
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
    ItemName: 'Pepper (Rodo)',
    ItemIngredients:
      'Rodo peppers are a type of chili pepper known for their red color and smoky flavor.',
    ItemPrice: (1500).toFixed(2),
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
    ItemName: 'Red Bell Pepper',
    ItemIngredients: 'Redbell peppers are a type of sweet pepper available in various colors, including red, yellow, orange, and green.',
    ItemPrice: (1500).toFixed(2),
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
    ItemName: 'Carrots',
    ItemIngredients:
      'A crunchy, orange root vegetable with a sweet flavor. They can be eaten raw, roasted, boiled, or juiced. Carrots are a good source of Vitamin A.',
    ItemPrice: (1500).toFixed(2),
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
    ItemName: 'Cucumber',
    ItemIngredients:
      'A long, green gourd-like vegetable with watery flesh and mild flavor. There are seedless varieties and ones with small edible seeds. Cucumbers are great for salads, sandwiches, or refreshing dips like raita.',
    ItemPrice: (1000).toFixed(2),
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
    ItemName: 'Cabbage (Medium Ball)',
    ItemIngredients:
      'A pod-shaped vegetable that comes in various shapes, sizes, and spice levels. They range from mild to extremely hot depending on the variety.',
    ItemPrice: (1000).toFixed(2),
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
    ItemName: 'Cabbage (Large Ball)',
    ItemIngredients:
      'A pod-shaped vegetable that comes in various shapes, sizes, and spice levels. They range from mild to extremely hot depending on the variety.',
    ItemPrice: (1500).toFixed(2),
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
    ItemName: 'Green Pepper ',
    ItemIngredients: 'Green peppers are unripe bell peppers and have a grassy flavor.',
    ItemPrice: (4000).toFixed(2),
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
    ItemName: 'Yam (Large)',
    ItemIngredients:
      'Yams are a root vegetable with starchy tubers that can be baked, roasted, or mashed.',
    ItemPrice: (6000).toFixed(2),
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
    ItemName: 'Yam (Medium)',
    ItemIngredients: 'Yams are a root vegetable with starchy tubers that can be baked, roasted, or mashed.',
    ItemPrice: (4000).toFixed(2),
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
