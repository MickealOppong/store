import { useState } from "react";
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useLoaderData } from "react-router-dom";
import { ProductGrid, ProductList } from '../components/index';

const ProductsContainer = () => {
  const { products, meta } = useLoaderData();
  const [layout, setLayout] = useState('grid');
  const productTotals = meta.pagination.total;


  const activeStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${pattern === layout ? 'btn-primary text-primary-content' : 'btn-ghost text-based-content'}`
  }
  return <section>

    <header className="max-w-6xl mx-auto flex justify-between items-center border-b border-base-300 py-4 mt-8">
      <h2 className="text-gray-700">{productTotals} product{productTotals > 1 ? 's' : ''}</h2>
      <div className="hidden md:flex gap-x-4 text-2xl">
        <button type="button" onClick={() => setLayout('grid')} className={activeStyles('grid')} ><BsFillGridFill /></button>
        <button type="button" onClick={() => setLayout('list')} className={activeStyles('list')}><BsList /></button>
      </div>
    </header>
    <div className="max-w-6xl mx-auto flex justify-between items-center py-4 mt-8">
      {
        layout === 'grid' ? <ProductGrid /> : <ProductList />
      }
    </div>
  </section >
}
export default ProductsContainer;