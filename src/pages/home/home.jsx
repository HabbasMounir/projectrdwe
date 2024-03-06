import { Link } from "react-router-dom"
import Navbar from "../../components/navBar/navBar"
import Style from "./page.module.css"
import {useRef,useState, useEffect } from "react"
import SlideRate from "../../components/SlideRate/slide"
import { Carousel } from "../../components/carousel/carousell"
import RateCard from "../../components/rateCard/rateCard"









export default function Home() {

  const [slideper, setSlideper] = useState(0)
  const sliderRef = useRef(null);

  const handleprev = () => {
// console.log(sliderRef)  ;
if (slideper==-50) setSlideper(prev=>prev+50)
};
  const handlenext = () => {
// console.log(sliderRef)  ;
if (slideper==0)  setSlideper(prev=>prev-50)


};
  return (
    <>
    <Navbar/>
        <div  className={Style.page}>
          <section className={Style.hero}>
            <h1>
            Make Yourself Great Again
            </h1>
            <h2>
            Developemnt,Design Marketing-Despline <br />Skillful Work.
            </h2>
            <p>
              رد بالك !! مواقع تواصل قنعوك بلي تقدر ولازم تعيش وحدك. وين فالصح العزلة خطيرة علينا<br /> 
              كامل، لازم تكون فجماعة وين واحد ينافسك ويدعمك وين ميخليكش تحبس الخدمة وديما يعاونك <br />
              بش متقعدش فنفس البلاصة... وعلابيها راكم هنا اليوم.  
            </p>
            <div className={Style.Links}   >
              <Link className={Style.Link}    to={'/challenge'}>Join Challenfe Now</Link> 
              <Link className={Style.Link}    to={'/about'}>Discover TFC</Link> 
            </div>
          </section>
          <section className={Style.rate}>
            <div  className={Style.rate__header}>
            <div className={Style.header}>
           <h1>Our Members Opinions </h1> 
           <h2>Don’t take our word for it. Trust our customers</h2>
            </div>
            <div className={Style.handle}>
            <span onClick={handleprev}
            style={{
              opacity:slideper==0?.5:1
            }}
           >
             <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="12"
      fill="none"
      viewBox="0 0 8 12"
    >
      <path
        fill="#fff"
        d="M7.41 1.41L2.83 6l4.58 4.59L6 12 0 6l6-6 1.41 1.41z"
      ></path>
    </svg>
            
            
            
            
            
            
            
            Previous
           
           
           
           
           
           </span> 
           <span onClick={handlenext}
           style={{
            opacity:slideper==-50?.5:1
          }}
           >Next
           
             <svg
           xmlns="http://www.w3.org/2000/svg"
           width="8"
           height="12"
           fill="none"
           viewBox="0 0 8 12"
         >
           <path
             fill="#fff"
             d="M.59 10.59L5.17 6 .59 1.41 2 0l6 6-6 6-1.41-1.41z"
           ></path>
         </svg>
         </span> 
</div>
           
            </div>
            <div className={Style.SlideRate} ref={sliderRef}> 
            <div className={Style.slider}
              style={{
                translate:`${slideper}%`
              }}
            ref={sliderRef}> 
                          <div className={Style.slideone}>
                          <RateCard rate="2" message={'i want to saygk, sh'} name={'Mounir'}></RateCard>
                          <RateCard rate="5" message={'بيبسيسبك شبسيك كبشككبشككبشككبشككبشككبشككبشككبشككبشككبشككببشككبشككبشك كشبسب '} name={'Mounir'}></RateCard>
                          <RateCard rate="1" message={'i want to sjghay sh'} name={'Mounir'}></RateCard>
                          </div>
                          <div className={Style.slidetwo}>
                          <RateCard rate="1" message={'i want to say sh'} name={'Mounir'}></RateCard>
                          <RateCard rate="1" message={'i want to say sh'} name={'Mounir'}></RateCard>
                          <RateCard rate="1" message={'i want to say sh'} name={'Mounir'}></RateCard>
                          </div>
            </div>

            
            </div>
            <div  className={Style.sliderBalls}> <span onClick={handleprev}
            style={{
              opacity:slideper==-50?.1:1
            }}
           ></span> 
           <span onClick={handlenext}
           style={{
            opacity:slideper==0?.1:1
          }}
           ></span>  </div>

            {/* <SlideRate></SlideRate> */}
          </section>

        </div>
    </>

  )
}
