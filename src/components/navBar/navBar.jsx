import { Link } from "react-router-dom"
import Style from "./component.module.css"
import {useRef,useState, useEffect } from "react"
import Logo from "../logo/logo"
import InstaIcon from "../logo/instaIcon"









export default function Navbar(props) {

  const [stateLoading, setStateLoading] = useState("start")
  return (
    <nav  className={Style.nav}>
    <Logo></Logo>
    <nav>
    <Link className={Style.Link}    to={'/'}>home</Link> 
    <Link className={Style.Link}    to={'/challenge'}>Challenge</Link> 
    <Link className={Style.Link}    to={'/about'}>About us</Link> 
    <InstaIcon></InstaIcon>
    </nav>
   
    </nav>

  )
}