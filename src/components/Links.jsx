import { Link } from "react-router-dom";

const Links = ({ title, data }) => {
  return <div className="flex flex-col w-56 gap-y-4">
    <h2 className="uppercase text-base-100">{title}</h2>
    <ul>
      {
        data.map((item) => {
          const { id, url, text } = item;
          return <li key={id}><Link to={url} className="capitalize text-gray-300">{text}</Link></li>
        })
      }
    </ul>
  </div>
}
export default Links;