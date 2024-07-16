import { useState } from 'react';

const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("Rahul Sutradhar");

    const options = ['Apple', 'Banana', 'Chips'];

    return (
        <div className='relative z-50'>
            <div onClick={() => setIsOpen(!isOpen)} className="flex items-center rounded-xl bg-white px-3 py-2 border cursor-pointer">
                <h1 className="font-medium text-gray-600">{selectedValue}</h1>
                <svg className={`${isOpen ? '-rotate-180' : 'rotate-0'} duration-300 ml-2`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g></svg>
            </div>

            {/* dropdown items  */}
            <div className={`absolute left-0 right-0 mt-2 bg-white border rounded-xl shadow-md duration-300 transition-all ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                {options.map((option, idx) => (
                    <div key={idx} onClick={() => { setSelectedValue(option); setIsOpen(false);}} className="px-6 py-2 text-gray-500 hover:bg-gray-100 cursor-pointer">
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserProfile;
