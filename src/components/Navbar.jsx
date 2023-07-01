

function Navbar() {
  return (
    <div className="sticky top-0 z-20">
    <nav className="bg-white border  ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8zL_xi9tKRu4egy3x9xsKZSW4ksonX632ici0od_H&s"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            Machine Task
          </span>
        </a>
    
        <div
          className={
           " w-full md:block md:w-auto"
              
          }
        >
        
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Navbar
