import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4">
        <p className="text-center">© {new Date().getFullYear()} SPA Project. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer