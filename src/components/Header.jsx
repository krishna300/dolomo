import { BiSolidHome, BiLogoTailwindCss, BiSearchAlt2 } from 'react-icons/bi'
import MenuItem from './MenuItem'

const Header = () => {
  return (
    <div className="bg-blue-800 p-4 sm:pt-2 sm:pb-0 flex justify-center xsm:justify-between items-center mx-auto pr-10 pl-10 transition-all">
        
        <h2 className='text-3xl arial font-bold text-white'>Dolomo</h2>

        <div className='p-2 hidden xsm:flex items-center bg-white rounded-lg '>
          <BiSearchAlt2 />
          <input 
            type='text'
            placeholder='Search'
            className='bg-transparent ml-2 outline-none'
          />
        </div>
        <div className="header-right hidden sm:flex"> {/* 640px and above width flex applies */}
            <MenuItem Icon={BiSolidHome} title="Home" path='/'/>
            <MenuItem Icon={BiLogoTailwindCss} title="Tailwind"  path='/css' />
        </div>
    </div>
  )
}

export default Header