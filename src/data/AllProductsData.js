import CheesePizza from '../assets/images/cheese-pizza-375.jpg'
import ExtraCheesePizza from '../assets/images/cheese-pizza-376.jpg'
import VeggiePizza from '../assets/images/veggie-pizza.jpg'
import Tomatoes from '../assets/images/product-images/tomato-medium.jpg'
import MeatPizza from '../assets/images/meat-pizza.jpg'
import SpringOnions from '../assets/images/product-images/spring-onions.jpg'
import BBQPizza from '../assets/images/BBQ-chicken-pizza.jpg'
import AllaPalla from '../assets/images/pizza-alla-pala.jpg'
import Prosciutto from '../assets/images/Prosciutto-e-Funghi-Pizza.jpeg'
import DetroitStyle from '../assets/images/Detroit-Style-pizza.jpeg'
import GarlicFingers from '../assets/images/Garlic-Fingers-pizza.jpeg'
import Cabbages from '../assets/images/product-images/cabbages.jpg'
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
import Carrot from '../assets/images/Carrott.jpeg'
import Rodo from '../assets/images/Rodo.jpeg'
import Cucumber from '../assets/images/Cucumber.jpeg'
import BellPepper from '../assets/images/BellPepper.jpeg'

export const allProductsData = [
  {
    id: 'cheese-pizza',
    ItemImg: PizzaRomana,
    ItemName: 'Sweet Beans',
    ItemIngredients: 'Beans provide protein, fiber,folate,iron and other body aid nutrient',
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
    ItemName: 'Watermelon ',
    ItemIngredients:
      'Body hydrating fruit that improves heart health and adds to healthy digestion',
    ItemPrice: (2500).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'large', value: 'large' },        
        ],
      },
    ],
  },
  {
    id: 'tomatoes',
    ItemImg: Tomatoes,
    ItemName: 'Tomatoes',
    ItemIngredients:
      'Good for several sources of vitamins and mineralsuch as vitamins, pottassium and folate',
    ItemPrice: (1000).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: '1kg', value: '1kg' },
        ],
      },
    ],
  },
  {
    id: 'meat-pizza',
    ItemImg: MeatPizza,
    ItemName: 'Green Bell Pepper',
    ItemIngredients:
      'Veggies used for the preparation of several meal and sauce.',
    ItemPrice: (1000).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: '1kg', value: '1kg' },
        ],
      },
    ],
  },
  {
    id: 'spring-onion',
    ItemImg: SpringOnions,
    ItemName: 'Spring Onion',
    ItemIngredients:
      'Pizza dough, tomato sauce, fresh mozzarella, olive oil, basil leaves.',
    ItemPrice: (1500).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: '1kg', value: '1kg' },
        ],
      },
    ],
  },
  {
    id: 'rodo',
    ItemImg: Rodo,
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
          { id: '1kg', value: '1kg' },
        ],
      },
    ],
  },
  {
    id: 'red-bell-pepper',
    ItemImg: BellPepper,
    ItemName: 'Red Bell Pepper',
    ItemIngredients: 'Redbell peppers are a type of sweet pepper available in various colors, including red, yellow, orange, and green.',
    ItemPrice: (1500).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: '1kg', value: '1kg' },
        ],
      },
    ],
  },
  {
    id: 'carrot',
    ItemImg: Carrot,
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
          { id: '1kg', value: '1kg' },
        ],
      },
    ],
  },
  {
    id: 'cucumber',
    ItemImg: Cucumber,
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
          { id: '1kg', value: '1kg' },
        ],
      },
    ],
  },
  {
    id: 'garlic-fingers',
    ItemImg: GarlicFingers,
    ItemName: 'Cabbage ',
    ItemIngredients:
      'A pod-shaped vegetable that comes in various shapes, sizes, and spice levels. They range from mild to extremely hot depending on the variety.',
    ItemPrice: (1000).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'medium', value: 'medium' },
        ],
      },
    ],
  },
  {
    id: 'cabbages',
    ItemImg: Cabbages,
    ItemName: 'Cabbages ',
    ItemIngredients:
      'A pod-shaped vegetable that comes in various shapes, sizes, and spice levels. They range from mild to extremely hot depending on the variety.',
    ItemPrice: (1500).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'large', value: 'large' },          
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
          { id: '1kg', value: '1kg' },
        ],
      },
    ],
  },
  {
    id: 'pesto-genovese-pizza',
    ItemImg: Genovese,
    ItemName: 'Yam ',
    ItemIngredients:
      'Yams are a root vegetable with starchy tubers that can be baked, roasted, or mashed.',
    ItemPrice: (6000).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'large', value: 'large' },
        ],
      },
    ],
  },
  {
    id: 'e-fichi-pizza',
    ItemImg: Efichi,
    ItemName: 'Yam ',
    ItemIngredients: 'Yams are a root vegetable with starchy tubers that can be baked, roasted, or mashed.',
    ItemPrice: (4000).toFixed(2),
    Category: 'Pizza',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'medium', value: 'medium' },
        ],
      },
    ],
  }                   
]
