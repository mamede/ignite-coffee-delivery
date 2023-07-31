import latte from '../assets/images/latte.png'
import arabe from '../assets/images/arabe.png'
import cubano from '../assets/images/cubano.png'
import irlandes from '../assets/images/irlandes.png'
import havaiano from '../assets/images/havaiano.png'
import expresso from '../assets/images/expresso.png'
import americano from '../assets/images/americano.png'
import capuccino from '../assets/images/capuccino.png'
import macchiato from '../assets/images/macchiato.png'
import mocaccino from '../assets/images/mochaccino.png'
import cafeGelado from '../assets/images/cafe-gelado.png'
import cafeComLeite from '../assets/images/cafe-com-leite.png'
import expressoCremoso from '../assets/images/expresso-cremoso.png'
import chocolateQuente from '../assets/images/chocolate-quente.png'

const coffees = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    tags: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    image: expresso,
    price: '5,00',
  },
  {
    id: 2,
    name: 'Expresso Americano',
    tags: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    image: americano,
    price: '4,00',
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    tags: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    image: expressoCremoso,
    price: '6,00',
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    tags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    image: cafeGelado,
    price: '7,00',
  },
  {
    id: 5,
    name: 'Café com Leite',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    image: cafeComLeite,
    price: '6,00',
  },
  {
    id: 6,
    name: 'Latte',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Uma dose de café expresso, com o dobro de leite e espuma cremosa',
    image: latte,
    price: '8,00',
  },
  {
    id: 7,
    name: 'Capuccino',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    image: capuccino,
    price: '10,00',
  },
  {
    id: 8,
    name: 'Macchiato',
    tags: ['Tradicional', 'Com Leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    image: macchiato,
    price: '9,00',
  },
  {
    id: 9,
    name: 'Mocaccino',
    tags: ['Tradicional', 'Com Leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    image: mocaccino,
    price: '9,00',
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    tags: ['Especial', 'Com Leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    image: chocolateQuente,
    price: '10,00',
  },
  {
    id: 11,
    name: 'Cubano',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    image: cubano,
    price: '10,00',
  },
  {
    id: 12,
    name: 'Havaiano',
    tags: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    image: havaiano,
    price: '9,00',
  },
  {
    id: 13,
    name: 'Árabe',
    tags: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    image: arabe,
    price: '8,00',
  },
  {
    id: 14,
    name: 'Irlandês',
    tags: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    image: irlandes,
    price: '11,00',
  },
  {
    id: 15,
    name: 'Latte Vegano',
    tags: ['Especial', 'Vegano'],
    description:
      'Uma dose de café expresso com  leite de soja e espuma cremosa',
    image: latte,
    price: '11,00',
  },
  {
    id: 16,
    name: 'Americano Gelado',
    tags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso americano e cubos de gelo',
    image: americano,
    price: '4,00',
  },
]

export default coffees
