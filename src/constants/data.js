import icons from "./icons"
import images from "./images"

const stateList = [
   {label: 'Andhra Pradesh', value: '1'},
   {label: 'Arunachal Pradesh', value: '2'},
   {label: 'Assam', value: '3'},
   {label: 'Bihar', value: '4'},
   {label: 'Chhattisgarh', value: '5'},
   {label: 'Goa', value: '6'},
   {label: 'Gujrat', value: '7'},
   {label: 'Haryana', value: '8'},
   {label: 'Himachal Pradesh', value: '9'},
   {label: 'Jharkhand', value: '10'},
   {label: 'Karnataka', value: '11'},
   {label: 'Kerala', value: '12'},
   {label: 'Madhya Pradesh', value: '13'},
   {label: 'Maharashtra', value: '14'},
   {label: 'Manipur', value: '15'},
   {label: 'Meghalay', value: '16'},
   {label: 'Mizoram', value: '17'},
   {label: 'Nagaland', value: '18'},
   {label: 'Odisha', value: '19'},
   {label: 'Punjab', value: '20'},
   {label: 'Rajasthan', value: '21'},
   {label: 'Sikkim', value: '22'},
   {label: 'Tamil Nadu', value: '23'},
   {label: 'Telangana', value: '24'},
   {label: 'Tripura', value: '25'},
   {label: 'Uttar Pradesh', value: '26'},
   {label: 'Uttarakhand', value: '27'},
   {label: 'West Bengal', value: '28'},
  ];

const BrandNameCartList = [
   {
      id: 0,
      image: images.brand1,
   },
   {
      id: 1,
      image: images.brand2,
   },
   {
      id: 2,
      image: images.brand3,
   },
   {
      id: 3,
      image: images.brand4,
   },
   {
      id: 4,
      image: images.brand3,
   },
   {
      id: 5,
      image: images.brand4,
   },
   {
      id: 6,
      image: images.brand1,
   },
   {
      id: 7,
      image: images.brand2,
   },
]

const categoryData = [
   {
      id: 0,
      image: icons.shirt,
      category: "T-shirt",
   },
   {
      id: 1,
      image: icons.bag,
      category: "Bag",
   },
   {
      id: 2,
      image: icons.jacket,
      category: "Jacket",
   },
   {
      id: 3,
      image: icons.pant,
      category: "Pant",
   },
   {
      id: 4,
      image: icons.shirt,
      category: "T-shirt",
   },
   {
      id: 5,
      image: icons.jacket,
      category: "Jacket",
   },

]

const HomeSlider = [
   images.banner1,
   images.banner1,
   images.banner1,
   images.banner1,
   images.banner1,
   images.banner1,
]

const featureData = [
   {
      id: 0,
      image: images.feature1,
   },
   {
      id: 1,
      image: images.feature2,
   },
   {
      id: 2,
      image: images.feature3,
   },
   {
      id: 3,
      image: images.feature4,
   },
]

const category = [
   {
      id: 0,
      image: images.man,
      category: "Men’s",
   },
   {
      id: 1,
      image: images.woman,
      category: "Women’s",
   },
   {
      id: 2,
      image: images.essential,
      category: "Essentials",
   },
   {
      id: 3,
      image: images.electronic,
      category: "Electronics",
   },
   {
      id: 4,
      image: images.makeup,
      category: "Makeup",
   },
   {
      id: 5,
      image: images.stationary,
      category: "Stationary",
   },
   {
      id: 6,
      image: images.kids,
      category: "Kids",
   },
   // {
   //    id: 7,
   //    image: images.kids2,
   // },

]

const productList = [
   {
      id: 0,
      image: images.product1,
      rating: 3,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum pulvinar ultricies ac",
      amount: "₹2800.00",
   },
   {
      id: 1,
      image: images.product2,
      rating: 4,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum pulvinar ultricies ac",
      amount: "₹1500.00",
   },
   {
      id: 2,
      image: images.product1,
      rating: 3,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum pulvinar ultricies ac",
      amount: "₹2800.00",
   },
   {
      id: 3,
      image: images.product2,
      rating: 3,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum pulvinar ultricies ac",
      amount: "₹1500.00",
   },

]

const trending = [
   {
      id: 0,
      image: images.polos,
      category: "Polos",
   },
   {
      id: 1,
      image: images.tshirt,
      category: "T-Shirts",
   },
   {
      id: 2,
      image: images.jeans,
      category: "Jeans",
   },

]

const moreProduct = [
   {
      id: 0,
      image: images.sweatshirts,
      category: "Sweatshirts",
   },
   {
      id: 1,
      image: images.hoodies,
      category: "Hoodies",
   },
   {
      id: 2,
      image: images.jacket,
      category: "Jackets",
   },
   {
      id: 3,
      image: images.blazzer,
      category: "Blazers",
   },
   {
      id: 4,
      image: images.sweater,
      category: "Sweaters",
   },
   {
      id: 5,
      image: images.pullover,
      category: "Pullover",
   },
   {
      id: 6,
      image: images.jeans,
      category: "Jeans",
   },
   {
      id: 7,
      image: images.touser,
      category: "Trouser",
   },
   {
      id: 8,
      image: images.trakpants,
      category: "Trackpants",
   },
   {
      id: 9,
      image: images.shorts,
      category: "Shorts",
   },
   {
      id: 10,
      image: images.pants,
      category: "Pants",
   },
   {
      id: 11,
      image: images.sneakers,
      category: "Sneakers",
   },

]

const clothList = [
   {
      id: 0,
      image: images.cloth1,
      rating: 3,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum pulvinar ultricies ac",
      amount: "₹2800.00",
   },
   {
      id: 1,
      image: images.cloth2,
      rating: 4,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum pulvinar ultricies ac",
      amount: "₹1500.00",
   },
   {
      id: 2,
      image: images.cloth2,
      rating: 3,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum pulvinar ultricies ac",
      amount: "₹2800.00",
   },
   {
      id: 3,
      image: images.cloth1,
      rating: 3,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum pulvinar ultricies ac",
      amount: "₹1500.00",
   },
   {
      id: 4,
      image: images.cloth1,
      rating: 3,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum pulvinar ultricies ac",
      amount: "₹2800.00",
   },
   {
      id: 5,
      image: images.cloth2,
      rating: 4,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum pulvinar ultricies ac",
      amount: "₹1500.00",
   },
   {
      id: 6,
      image: images.cloth2,
      rating: 3,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum pulvinar ultricies ac",
      amount: "₹2800.00",
   },
   {
      id: 7,
      image: images.cloth1,
      rating: 3,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum pulvinar ultricies ac",
      amount: "₹1500.00",
   },
]


const colors = ["#000000", "#CE3E3E", "#76B55A", "#1B52A5", "#B768B9", "#E4D226", "#76B55A", "#1B52A5", "#B768B9", "#E4D226"]
const sizes = [
   {
      id: 1,
      size: "XXS"
   },
   {
      id: 2,
      size: "XS"
   },
   {
      id: 3,
      size: "S"
   },
   {
      id: 4,
      size: "M"
   },
   {
      id: 5,
      size: "L"
   },
   {
      id: 6,
      size: "XL"
   },
   {
      id: 7,
      size: "S"
   },
   {
      id: 8,
      size: "M"
   },
]

const productSlider = [
   images.cloth1,
   images.cloth2,
   images.cloth1,
   images.cloth2,
]

const OrderList = [
   {
      id: 0,
      image: images.orderhist1,
      rating: 3,
      price: '₹2800.00',
      deliveryDate: "26 - Nov - 2021",
      title: "Atomic Habits : An easy and proven way... ",
      deliveryDate: "26 - Nov - 2021",
   },
   {
      id: 1,
      image: images.orderhist1,
      rating: 4,
      price: '₹2300.00',
      title: "Atomic Habits : An easy and proven way... ",
      deliveryDate: "26 - Nov - 2021",
   },
   {
      id: 2,
      image: images.orderhist1,
      rating: 3,
      price: '₹2800.00',
      title: "Atomic Habits : An easy and proven way... ",
      deliveryDate: "26 - Nov - 2021",
   },
   {
      id: 3,
      image: images.orderhist1,
      rating: 3,
      price: '₹1800.00',
      title: "Atomic Habits : An easy and proven way... ",
      deliveryDate: "26 - Nov - 2021",
   },
   {
      id: 4,
      image: images.orderhist1,
      rating: 3,
      price: '₹2800.00',
      deliveryDate: "26 - Nov - 2021",
      title: "Atomic Habits : An easy and proven way... ",
      deliveryDate: "26 - Nov - 2021",
   },
   {
      id: 5,
      image: images.orderhist1,
      rating: 4,
      price: '₹2500.00',
      title: "Atomic Habits : An easy and proven way... ",
      deliveryDate: "26 - Nov - 2021",
   },
   {
      id: 6,
      image: images.orderhist1,
      rating: 3,
      price: '₹2800.00',
      title: "Atomic Habits : An easy and proven way... ",
      deliveryDate: "26 - Nov - 2021",
   },
   {
      id: 7,
      image: images.orderhist1,
      rating: 3,
      price: '₹2800.00',
      title: "Atomic Habits : An easy and proven way... ",
      deliveryDate: "26 - Nov - 2021",
   },
]


const myCart = [
   {
      id: 0,
      image: images.cloth1,
      rating: 3,
      title: "Wildcraft Full Sleeve Solid Men....",
      size: "XL",
      quantity: 1,
      off: "30% Off",
      amount: "₹1800.00",
      oldPrice: "₹2800.00",
   },
   {
      id: 1,
      image: images.cloth1,
      rating: 3,
      title: "Wildcraft Full Sleeve Solid Men....",
      size: "XL",
      quantity: 1,
      off: "30% Off",
      amount: "₹1800.00",
      oldPrice: "₹2800.00",
   },
  
]

const cardMethod = [
   {
      id: 0,
      image: images.dnl,
      amount: "₹15",
      days: "1 to 2 days",
   },
   {
      id: 1,
      image: images.feedex,
      amount: "₹50",
      days: "1 to 2 days",
   },
   {
      id: 2,
      image: images.delivery3,
      amount: "₹25",
      days: "1 to 2 days",
   },
  
]

export default {
   stateList,
   BrandNameCartList,
   HomeSlider,
   categoryData,
   productList,
   featureData,
   category,
   trending,
   moreProduct,
   clothList,
   colors,
   sizes,
   productSlider,
   OrderList,
   myCart,
   cardMethod,
}