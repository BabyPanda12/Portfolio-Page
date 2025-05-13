import React from 'react';
import 'font-awesome/css/font-awesome.min.css';


function Footer() {
    return (
        <div className="flex flex-wrap justify-center gap-2">
            <a
                href="https://linkedin.com/in/ivana-stojanova"
                className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
                <i className="fa fa-linkedin"></i> 
                 </a>
            <a
                href="https://github.com/BabyPanda12"
                className="bg-stone-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
                <i className="fa fa-github"></i> 
            </a>
        </div>
    );
}

export default Footer;