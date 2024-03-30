import axios from "axios"
const prodUrl = 'https://strapi-store-server.onrender.com/api'

export const customFetch = axios.create({
  baseURL: prodUrl
})

export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency: 'USD'
  }).format(number / 100)
}

export const generateNumbers = (number) => {
  const numbers = Array.from({ length: number }, (_, index) => {
    let item = index + 1;
    return item;
  })
  return numbers;
}