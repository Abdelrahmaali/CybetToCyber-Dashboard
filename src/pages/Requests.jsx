import React, { useState } from 'react';
import Postreq from './Postreq';
import Verficationreq from './Verficationreq';
import { useStateContext } from '../contexts/ContextProvider';

const Requests = () => {
    const { currentColor, currentMode } = useStateContext();
    const [selectedComponent, setSelectedComponent] = useState('first');

    const handleButtonClick = (selectedOption) => {
        setSelectedComponent(selectedOption);
    };

    return (
        <>
            <div className=" flex flex-col items-center justify-center md:flex-row md:justify-center  mt-20 ">

                <button
                    className={`dark:text-gray-200  px-4 py-2  rounded-md  hover:drop-shadow-xl ${selectedComponent === 'first' ? `bgcover  hover:drop-shadow-xl text-white` : ''}`}
                    onClick={() => handleButtonClick('first')}
                >
                    job post
                </button>
                <button
                    className={`dark:text-gray-200 p-2 rounded-md  hover:drop-shadow-xl ${selectedComponent === 'second' ? `bgcover  hover:drop-shadow-xl text-white` : ''}`}
                    onClick={() => handleButtonClick('second')}
                >
                    verification
                </button>
            </div>


            <div className="mt-4">
                {selectedComponent === 'first' && <Postreq />}
                {selectedComponent === 'second' && <Verficationreq />}
            </div>
        </>
    );
};

export default Requests;
