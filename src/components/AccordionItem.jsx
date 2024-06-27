import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const AccordionItem = ({ title, icon, content, isOpen, onClick, links }) => {
    return (
        <div className="">
            <div className="flex items-center gap-2 p-[15px] lg:px-[40px] lg:py-[20px] cursor-pointer" onClick={onClick}>
                <span className='text-5xl md:text-6xl text-betpink stroke-current font-poppins font-bold'>{icon}</span>
                <h3 className={isOpen ? 'text-betpink text-lg lg:text-[20px]' : 'text-white text-lg lg:text-[20px]'}>{title}</h3>
            </div>
            <motion.div
                className="overflow-hidden p-[15px]"
                initial={false}
                animate={{ height: isOpen ? 'auto' : 4 }}
                transition={{ duration: 1.0 }}
            >
                {isOpen && (
                    <div className='p-[15px] lg:px-[40px] lg:py-[20px] text-white text-[14px] md:text-lg leading-[150%] flex flex-col'>
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                        {links.length > 0 && (
                            <ul className="mt-4">
                                {links.map((link, index) => (
                                    <li key={index} className="mt-2">
                                        {link.socialMedia} {link.name}
                                        <a href={link.link} target="_blank" rel="noopener noreferrer" className="text-betpink">
                                            {link.link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </motion.div>
            <div className='border-b border-b-gray15' />
        </div>
    );
};

AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    content: PropTypes.node,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
        socialMedia: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    })),
};

AccordionItem.defaultProps = {
    links: [],
};

export default AccordionItem;
