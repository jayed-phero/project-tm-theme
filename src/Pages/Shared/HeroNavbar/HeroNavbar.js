import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroNavbar.css';

const HeroNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    // useEffect(() => {
    //     // get elements form the dom


    //     const menuBtn = document.querySelector('.menu-btn');
    //     const menu = document.querySelector('.menu-container');
    //     const dropdowns = document.querySelectorAll(".Herodropdown > div");
    //     const subDropdowns = document.querySelectorAll('.sub-dropdown > div')

    //     // Toggle variable
    //     let menuOpen = false;

    //     // set clisk event to menu button
    //     menuBtn.addEventListener('click', () => {
    //         // toggle mega menu show class
    //         menu.classList.toggle('mega-menu-show')

    //         // if the menu open variable is false
    //         if (menuOpen === false) {
    //             // set the close ison to the menu button
    //             menuBtn.innerHTML = `
    //     <span className='material-symbols-outline' >
    //        close
    //     </span>
    //    `;
    //             //    set menu open to true
    //             menuOpen = true;

    //         } else {
    //             // set the ison to the menu button
    //             menuBtn.innerHTML = `
    //     <span className='material-symbols-outline' >
    //        menu
    //     </span>
    //     `;
    //             // set menu open to flase
    //             menuOpen = false;
    //         }
    //     });

    //     // select al dropdowns 
    //     dropdowns.forEach(dropdown => {
    //         // add clisk event
    //         dropdown.addEventListener('click', (e) => {
    //             // toggle dropdown menu show class
    //             dropdown.nextElementSibling.classList.toggle('menu-show');
    //             // toggle icon rotaed class
    //             dropdown.lastElementChild.classList.toggle('icon-rotated');
    //         })
    //     })

    //     // subDropdowns.forEach(subDropdown => {
    //     //     // add click event 
    //     //     subDropdown.addEventListener('click', (e) => {
    //     //         // toggle sub dropdown menu show class
    //     //         subDropdown.nextElementSibling.classList.toggle('sub-menu-show');
    //     //         // toggle icon rotated class 
    //     //         subDropdown.lastElementChild.classList.toggle('icon-rotated');
    //     //     })
    //     // })
    // }, [])

    const menuToggle = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div>
            <nav className='HeroNavbar'>
                <a href="" className='brand'>Brand</a>
                <div className={`menu-container ${menuOpen && 'menu-open'}`}>
                    <ul className="mega-menu">
                        <li className="HeroDropdown">
                            <div>
                                <span>New Releases</span>
                                <span class="material-symbols-outlined">
                                    chevron_right
                                </span>
                            </div>
                            <ul className="HeroMenu">
                                <li>
                                    <a href="#">New Releases</a>
                                </li>
                                <li className='sub-dropdown'>
                                    <div>
                                        <span>Featured</span>
                                        <span class="material-symbols-outlined">
                                            chevron_right
                                        </span>
                                    </div>
                                    <ul className="sub-menu">
                                        <li>
                                            <a href="#">Featured</a>
                                        </li>
                                        <li>
                                            <a href="#">Shop All New Arrivals</a>
                                        </li>
                                        <li>
                                            <a href="#">SKNRS Launch Calender</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="HeroDropdown">
                            <div>
                                <span>Men</span>
                                <span class="material-symbols-outlined">
                                    chevron_right
                                </span>
                            </div>
                            <ul className="HeroMenu">
                                <li>
                                    <Link>Men</Link>
                                </li>
                                <li className="sub-dropdown">
                                    <div>
                                        <span>Featured</span>
                                        <span class="material-symbols-outlined">
                                            chevron_right
                                        </span>
                                    </div>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link>Featured</Link>
                                        </li>
                                        <li>
                                            <Link>New Releases</Link>
                                        </li>
                                        <li>
                                            <Link>SKNRS Launch calendar</Link>
                                        </li>
                                        <li>
                                            <Link>BestSellers</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-dropdown">
                                    <div>
                                        <span>Shoes</span>
                                        <span class="material-symbols-outlined">
                                            chevron_right
                                        </span>
                                    </div>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link>All Shoes</Link>
                                        </li>
                                        <li>
                                            <Link>Lifestyle</Link>
                                        </li>
                                        <li>
                                            <Link>Jordan</Link>
                                        </li>
                                        <li>
                                            <Link>Running</Link>
                                        </li>
                                        <li>
                                            <Link>Football</Link>
                                        </li>
                                        <li>
                                            <Link>Basketball</Link>
                                        </li>
                                        <li>
                                            <Link>Training and Gym</Link>
                                        </li>
                                        <li>
                                            <Link>Skateboarding</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-dropdown">
                                    <div>
                                        <span>Clothing</span>
                                        <span class="material-symbols-outlined">
                                            chevron_right
                                        </span>
                                    </div>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link>All Clothing</Link>
                                        </li>
                                        <li>
                                            <Link>LyfeStyle</Link>
                                        </li>
                                        <li>
                                            <Link>Tops and T-Shirts</Link>
                                        </li>
                                        <li>
                                            <Link>Hoodies and Sweatchirts</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-dropdown">
                                    <div>
                                        <span>Shop By Sport</span>
                                        <span class="material-symbols-outlined">
                                            chevron_right
                                        </span>
                                    </div>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link>All Sports</Link>
                                        </li>
                                        <li>
                                            <Link>Football</Link>
                                        </li>
                                        <li>
                                            <Link>Basketball</Link>
                                        </li>
                                        <li>
                                            <Link>Training and Gym</Link>
                                        </li>
                                        <li>
                                            <Link>Skateboarding</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="HeroDropdown">
                            <div>
                                <span>Women</span>
                                <span class="material-symbols-outlined">
                                    chevron_right
                                </span>
                            </div>
                            <ul className="HeroMenu">
                                <li>
                                    <Link>All Collections</Link>
                                </li>
                                <li className="sub-dropdown">
                                    <div>
                                        <span>Trending</span>
                                        <span class="material-symbols-outlined">
                                            chevron_right
                                        </span>
                                    </div>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link>All Trending</Link>
                                        </li>
                                        <li>
                                            <Link>Dunk</Link>
                                        </li>
                                        <li>
                                            <Link>Metcon</Link>
                                        </li>
                                        <li>
                                            <Link>Jordan X Paris</Link>
                                        </li>
                                        <li>
                                            <Link>SuperRep Shoes</Link>
                                        </li>
                                        <li>
                                            <Link>FlyEase</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="sub-dropdown">
                                    <div>
                                        <span>Lyfestyle</span>
                                        <span class="material-symbols-outlined">
                                            chevron_right
                                        </span>
                                    </div>
                                    <ul className="sub-menu">
                                        <li>
                                            <Link>All Trending</Link>
                                        </li>
                                        <li>
                                            <Link>Dunk</Link>
                                        </li>
                                        <li>
                                            <Link>Metcon</Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="buttons">
                    <button className="btn">Contact</button>
                    <button className="menu-btn">
                        <span onClick={menuToggle} class="material-symbols-outlined">
                            menu
                        </span>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default HeroNavbar;