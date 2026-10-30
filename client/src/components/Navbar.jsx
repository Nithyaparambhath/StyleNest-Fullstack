import React from 'react'
import { FiShoppingCart,FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  return (
    <nav className="relative flex items-center justify-between px-6 py-5 md:px-12">
  <Link to="/" className="text-2xl font-bold tracking-wide">
    Style<span className="text-[#a87952]">Nest</span>
  </Link>

  <div className="hidden items-center gap-8 md:flex">
    <Link to="/">Home</Link>
    <Link to="/shop">Shop</Link>
    <Link to="/contact">Contact</Link>
  </div>
<div className="hidden items-center gap-2 rounded-full border border-[#e8e0d6] bg-white px-4 py-2 md:flex">
  <FiSearch size={18} className="text-[#756e65]" />

  <input
    type="search"
    placeholder="Search products..."
    className="w-36 bg-transparent text-sm outline-none placeholder:text-[#a39a90] focus:w-44 transition-all"
  />
</div>
  <div className="flex items-center gap-3">
    <button
  type="button"
  className="flex items-center gap-2 rounded-full border border-[#29251f] px-4 py-2 transition hover:bg-[#29251f] hover:text-white"
>
  <FiShoppingCart size={20} />
  <span>{cartCount}</span>
</button>

    <button
      type="button"
      onClick={() => setMenuOpen(!menuOpen)}
      className="rounded-lg border px-3 py-2 md:hidden"
      aria-label="Toggle navigation menu"
      aria-expanded={menuOpen}
    >
      {menuOpen ? '✕' : '☰'}
    </button>
  </div>

  {menuOpen && (
    <div className="absolute left-0 top-full z-50 flex w-full flex-col gap-4 border-t border-[#e8e0d6] bg-[#faf8f4] px-6 py-5 shadow-lg md:hidden">
      <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
      <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
      <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
    </div>
  )}
</nav>
  )
}

export default Navbar