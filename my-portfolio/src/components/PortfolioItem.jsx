import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
    return (
        <a className="border-2 border-stone-900 rounded-md overflow-hidden"

            href={link}
            target="_blank"
            
        >
            <img
                src={imgUrl} alt="project image"
                className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />

            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {stack.map(item => (
                        <span className="inline-bloc px-2 py-1 font-semibold border-2 border-stoen-900 rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
            </a>
            )
}

            export default PortfolioItem;