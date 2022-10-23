import Image from 'next/image'
import Link from 'next/link'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs'
import { useState } from 'react'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)

  const handleOpenMenu = () => {
    return setShowMenu(true)
  }

  const handleCloseMenu = () => {
    return setShowMenu(false)
  }

  return (
    <>
      <div className="bg-transparent">
        <div className="flex items-center justify-between mx-auto p-3 max-w-7xl ">
          <Image
            src="/logon.png"
            alt="logo ricardo"
            width="200"
            height="50"
          />
          <BiMenuAltRight
            onClick={handleOpenMenu}
            className="w-8 h-7 text-primary-blue sm:hidden cursor-pointer"
          />
          <nav className="hidden sm:flex">
            <ul className="flex items-center gap-8 text-gray-300 font-normal cursor-pointer">
              <Link href="/">
                <li className='hover:text-primary-blue ease-in-out duration-300'>Início</li>
              </Link>
              <Link href="/sobre">
                <li className='hover:text-primary-blue ease-in-out duration-300'>Sobre</li>
              </Link>
              <Link href="/contato">
                <li className='hover:text-primary-blue ease-in-out duration-300'>Contato</li>
              </Link>
            </ul>
          </nav>
          <button className="hidden sm:flex text-primary-blue border border-primary-blue rounded px-4 py-2">
            Fale comigo
          </button>
        </div>
        <div
          className="bg-gray-800 block sm:hidden top-0 z-10 absolute w-full h-screen text-gray-300 text-lg cursor-pointer transition-all"
          style={{ display: showMenu ? 'block' : 'none' }}
        >
          <div className="flex justify-between items-center p-3 gap-4 ">
            <Image
              src="/logobrancaOk.png"
              alt="logo ricardo"
              width="200"
              height="50"
            />
            <AiOutlineClose
              onClick={handleCloseMenu}
              className="w-6 h-6 mr-3"
            />
          </div>
          <div className="text-center leading-10 font-semibold ">
            <ul>
              <Link href="/">
                <li className="py-3">Início</li>
              </Link>
              <Link href="/sobre">
                <li className="py-3">Sobre</li>
              </Link>
              <Link href="/contato">
                <li className="py-3">Contato</li>
              </Link>
            </ul>
            <button className="bg-gray-300 rounded text-zinc-700 text-lg px-12 py-3">
              Fale comigo
            </button>
            <div className="flex items-center text-gray-300 justify-center mt-5 gap-4">
              <BsInstagram className="w-5 h-5" />
              <BsFacebook className="w-5 h-5" />
              <BsYoutube className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
