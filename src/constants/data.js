import images from './images';

const wines = [
  {
    title: 'Vanilla Bean Classic',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Choco Fudge Swirl',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'Strawberry Delight',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Mint Choco Chip',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Cream Dream',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Mango Tango Sorbet',
    price: '$20',
    tags: 'Mango | Citrus zest | Frozen delight | 30 ml',
  },
  {
    title: 'Caramel Sea Storm',
    price: '$16',
    tags: 'Caramel swirl | Sea salt | Creamy base',
  },
  {
    title: 'Lemon Zest Chill',
    price: '$10',
    tags: 'Lemon | Ice crystals | Sweet sugar touch',
  },
  {
    title: 'Brown Sugar Bliss',
    price: '$31',
    tags: 'Toffee | Brown sugar | Vanilla crunch',
  },
  {
    title: 'Berry Cream Fusion',
    price: '$26',
    tags: 'Strawberry | Blueberry | Whipped cream | Crunchy bits',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Exceptional taste, without the extravagant price.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'A spark on the horizon, destined to shine.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Recognising outstanding service, comfort, and care.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Crafting excellence, one unforgettable dish at a time.',
  },
];

export default { wines, cocktails, awards };