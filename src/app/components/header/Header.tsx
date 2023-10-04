"use client"
import { GithubLogo } from "phosphor-react"

function Header() {
  return (
    <div className="flex justify-center bg-gray-c2 py-6 fixed top-0 w-full ">
        <GithubLogo size={24}/>
        <strong>blog</strong>
    </div>
  )
}

export default Header