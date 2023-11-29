import React from 'react';
import {footerLinks, socialMedia} from "../constants";
import {footerLogo} from "../assets/images";
import {copyrightSign} from "../assets/icons";

const Footer = () => {
    return (
        <footer className="max-container">
            <div className="flex justify between items-start gap-20 flex-wrap max-lg:flex-col"></div>
            <div className="flex flex-col items-start">
                <a href="/">
                    <img src={footerLogo} alt="nike logo" width={150} height={46}/>
                </a>
                <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for
                    the new term at your nearest Nike store. Find
                    Your perfect Size In Store. Get Rewards</p>
                <div className="flex items-center gap-5 mt-8">{socialMedia.map((icon) => (
                    <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                        <a href="">
                            <img src={icon.src} alt={icon.alt} width={24} height={24}/>
                        </a>
                    </div>
                ))}
                </div>
            </div>

            <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mt-4">
                {footerLinks.map((section) => (
                    <div key={section}>
                        <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
                        <ul>
                            {section.links.map((link) => (
                                <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                                    key={link.name}>
                                    <a>{link.name}</a>
                                </li>
                            ))}
                            <li></li>
                        </ul>
                    </div>
                ))}
            </div>

            <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 justify-start items-center gap-2 fornt-montserrat cursor-pointer">
                    <img className="rounded-full m-0" src={copyrightSign} alt="copyright" width={20} height={20}/>
                    <p>Copyright. All rights reserved</p>
                </div>
                <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
            </div>
        </footer>
    );
};

export default Footer;