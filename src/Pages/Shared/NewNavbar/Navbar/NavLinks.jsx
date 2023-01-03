import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";

const NavLinks = ({ menuToggle }) => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (

    <>
      {links.map((link) => (
        <div>
          <div className=" text-left md:cursor-pointer group">
            <h1 onClick={menuToggle}>
              <h1
                className="flex justify-between items-center md:pr-0 pr-5 group hover:text-regal-orange border border-regal-orange md:border-none my-2 md:my-0 px-4 py-1 md:px-3 md:py-0"
                onClick={() => {
                  heading !== link.name ? setHeading(link.name) : setHeading("");
                  setSubHeading("");
                }}
              >
                {link.name}
                <span className="text-xl md:hidden inline hover:text-regal-orange">
                  <ion-icon
                    name={`${heading === link.name ? "chevron-up" : "chevron-down"
                      }`}
                  ></ion-icon>
                </span>
                <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                  <ion-icon name="chevron-down"></ion-icon>
                </span>
              </h1>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-11 hidden group-hover:md:block hover:md:block z-50">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"
                    ></div>
                  </div>
                  <div className="bg-white shadow-xl p-5">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="font-semibold bg-regal-orange px-3 py-1.5 text-white rounded">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-600 my-2.5">
                            <Link
                              to={slink.link}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className=" font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 my-1.5 border border-regal-orange py-1.5 w-full px-3 inline-block"
                  >
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                          }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                      }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="ml-5 my-1.5 border border-regal-orange py-1.5 w-full px-3 inline-block">
                        <Link to={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
