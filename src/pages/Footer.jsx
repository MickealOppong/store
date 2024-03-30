import Links from "../components/Links";
import { NewsLetter } from "../components/index";
import { information, products } from "../util/data";

const Footer = () => {

  const currentYear = () => {
    return new Date().getFullYear();
  }
  return <footer className="bg-secondary py-12">
    <div className="max-w-5xl mx-auto flex">
      <div className="flex gap-x-4 lg:flex-cols">
        <Links title="shop" data={products} />
        <Links title="information" data={information} />
        <Links title="customer service" data={information} />
      </div>
      <div className="flex w-full ">
        <NewsLetter />
      </div>
    </div>
    <div className="max-w-5xl mx-auto flex justify-center mt-8 border-t border-base-100 py-4">
      <p className="text-base-300">&#169; <span>{currentYear()}</span> SeaHorse.
        All Rights Reserved. Ecommerce Software by Mike Oppong.</p>
    </div>

  </footer>
}

export default Footer;