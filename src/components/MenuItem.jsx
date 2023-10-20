import { Link, useLocation } from "react-router-dom"
const MenuItem = ({ Icon, title, path }) => {
  const location = useLocation();
  return (
    <Link to={path} activeClassName='border-b-2 border-white' >
      <div className={`pb-2 mr-5 flex 
        flex-col justify-center items-center text-gray-300
        hover:text-white border-b-2 border-transparent
        hover:border-white transition-all cursor-pointer
        ${location.pathname === path ?' border-white text-white': null }
        `}>
          <p style={{ fontSize: '19px'}}>{title}</p>
          <Icon size={25} />
      </div>
    </Link>
  )
}

export default MenuItem