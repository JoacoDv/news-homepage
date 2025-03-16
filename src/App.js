import React, {useRef, useEffect} from "react";
const nav = ["Home","New", "Popular","Trending","Categories"]
import image1 from "./images/image-retro-pcs.jpg"
import image2 from "./images/image-top-laptops.jpg"
import image3 from "./images/image-gaming-growth.jpg"
import imgDesktop from "./images/image-web-3-desktop.jpg"
import imgMenuOpen from "./images/icon-menu.svg"
import imgMenuClose from "./images/icon-menu-close.svg"
const news = [
    {h3: "Hydrogen VS Electric Cars", p: "Will hydrogen-fueled cars ever catch up to EVs?"},
    {h3:"The Downsides of AI Artistry" , p:"What are the possible adverse effects of on-demand AI image generation?" },
    {h3:"Is VC Funding Drying Up?" , p:"Private funding by VC firms is down 50% YOY. We take a look at what that means." }
]
const aside = [
    {img: image1 ,h3: "01", h4: "Reviving Retro PCs", p: "What happens when old PCs are given modern upgrades?"},
    {img: image2 ,h3: "02", h4: "Top 10 Laptops of 2022", p: "Our best picks for various needs and budgets."},
    {img: image3 ,h3: "03", h4: "The Growth of Gaming", p: "How the pandemic has sparked fresh opportunities."},
]


const App = () => {
    const navRender = window.innerWidth >= 800 ? nav.map(a => {
        return <a key={a} href="#">{a}</a>}) : <img src={imgMenuOpen} onClick={openMenu}></img>
    
    const menuRef = useRef(null)
    function openMenu() {
        menuRef.current.classList.remove("hidden")
        document.body.style.overflow = "hidden";

    }
    function closeMenu() {
        menuRef.current.classList.add("hidden")
        document.body.style.overflow = "auto";
    }
    useEffect(e => {
    }, [])
    return (
        <>
            <section className="menu hidden" ref={menuRef} >
                <img src={imgMenuClose} onClick={closeMenu}></img>
                {nav.map(a => {
    return <a key={a} href="#">{a}</a>})}
            </section>
            <nav><h1>W.</h1>{
                navRender
            }</nav>
            
            <main>
                <section className="principal">
                    <img src={imgDesktop}></img>
                    <h1>The Bright Future of Web 3.0?</h1>
                    <div>
                        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>

                        <button>Read more</button>
                    </div>
                </section>
                <section className="news-container">        
                    <h2>New</h2>
                    {news.map(object => {
                        return (<article key={object.h3} className="news-article">
                            <h3>{object.h3}</h3>
                            <p>{object.p}</p>
                        </article>)}
                    )}
                </section>
                    {aside.map((object, index) => {
                        return (<article key={object.h3} className={`blog number${index + 1}`}>
                            <img src={object.img}></img>
                            <section>
                                <h3>{object.h3}</h3>
                                <h4>{object.h4}</h4>
                                <p>{object.p}</p>
                            </section>
                        </article>)
                    })}
            </main>

        </>
    );
};

export default App;
