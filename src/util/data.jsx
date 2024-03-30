import { nanoid } from "nanoid";

export const currencies = [
  { id: nanoid(), text: 'USD' },
  { id: nanoid(), text: 'PLN' },
  { id: nanoid(), text: 'EUR' },
  { id: nanoid(), text: 'GHC' }
]

export const navMenu = [
  { id: nanoid(), url: '', text: 'home' },
  { id: nanoid(), url: 'products', text: 'products' },
  { id: nanoid(), url: 'cart', text: 'cart' },
  { id: nanoid(), url: 'checkout', text: 'checkout' },
  { id: nanoid(), url: 'orders', text: 'orders' },
  { id: nanoid(), url: 'about', text: 'about' },
]

export const products = [
  { id: nanoid(), url: 'products', text: 'company' },
  { id: nanoid(), url: 'products', text: 'Brand' },
  { id: nanoid(), url: 'products', text: 'trend now' },
]

export const information = [
  { id: nanoid(), url: 'about', text: 'about us' },
  { id: nanoid(), url: 'about', text: 'new collections' },
  { id: nanoid(), url: 'about', text: 'best sellers' },
  { id: nanoid(), url: 'about', text: 'privacy' },
  { id: nanoid(), url: 'about', text: 'terms and conditions' },
]

export const carousel = [
  { id: 1, img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww', href: '1' },
  { id: 2, img: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D', href: '2' },
  { id: 3, img: 'https://media.istockphoto.com/id/1442837467/pl/zdj%C4%99cie/projekt-wn%C4%99trza-nowoczesnego-mieszkania-salonu-z-sof%C4%85-i-stolikami-kawowymi-rendering-3d.jpg?s=612x612&w=0&k=20&c=6XXXIjWx2EWt3Cclzp4VwbeaFgmGb3DGSv8GT0wExQg=', href: '2' },
  { id: 4, img: 'https://media.istockphoto.com/id/1475903176/pl/zdj%C4%99cie/klasyczne-wn%C4%99trze-salonu.jpg?s=612x612&w=0&k=20&c=UCUaMWPFMVw2IKeR8gao3MmvrNCfEmex0kP3bnqMHEc=', href: '2' }

]

