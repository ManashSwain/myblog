import { useState } from "react";
import Image from "./Image";
import { SignedIn, SignedOut,  UserButton } from "@clerk/clerk-react";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [open , setOpen] = useState(false);
    const showMenu = ()=>{
        setOpen(true);
    }
    const closeMenu =() =>{
     setOpen(false)
    }
  return (
   <>
   <header className="bg-white">
  <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div className="flex lg:flex-1">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only">Your Company</span>
        <Image className={"h-8 w-auto"} src={"profile.jpg"} alt="logo"/>
      </a>
    </div>
    <div className="flex lg:hidden">
     <button onClick={showMenu} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span className="sr-only">Open main menu</span>
        <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div className="hidden lg:flex lg:gap-x-12">
      <div className="relative">
        <button type="button" className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900" aria-expanded="false">
          Product
        </button>        
      </div>

      <a href="#" className="text-sm/6 font-semibold text-gray-900">Home</a>
      <a href="#" className="text-sm/6 font-semibold text-gray-900">Trending</a>
      <a href="#" className="text-sm/6 font-semibold text-gray-900">Most Popular</a>
      <a href="#" className="text-sm/6 font-semibold text-gray-900">About</a>
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    
      <SignedOut>
      <Link to='login' className="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  </nav>
  
{ open ?  <div className="lg:hidden" role="dialog" aria-modal="true">
    <div className="fixed inset-0 z-10"></div>
    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
        </a>
        <button onClick={closeMenu} type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
          <span  className="sr-only">Close menu</span>
          <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/10">
          <div className="space-y-2 py-6">
            <div className="-mx-3">
              <button type="button" className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" aria-controls="disclosure-1" aria-expanded="false">
                Product
               
                <svg className="size-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                  <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
              </button>
             
            </div>
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Home</a>
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Trending</a>
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Most Popular</a>
            <a href="#" className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">About</a>
          </div>
          <div className="py-6">
          <SignedOut>
      <Link to='login' className="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
          </div>
        </div>
      </div>
    </div>
  </div> : <> </> }
</header>

   </>
  )
}

export default Navbar
