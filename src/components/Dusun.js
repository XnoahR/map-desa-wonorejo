export default (props) => {
    return (
        <div className="relative inline-block w-4/5 mt-3">
        <select className="w-full appearance-none text-justify ps-5 bg-gray-300 py-3 rounded-md font-thin text-lg pr-10">
            <option value="">{props.name}</option>
            {props.data.map((item, index) => (
            <option key={index} value={item}>
                {item}
            </option>
            ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
            <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
            />
            </svg>
        </div>
        </div>

        //If selected value
        
    );
    }