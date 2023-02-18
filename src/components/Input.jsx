import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function InputText({placeholder}){
    return(
        <input type="text" placeholder={placeholder} className="py-3 px-5 border-2 w-full border-primary rounded-full" />
    );
}

function InputSearch({placeholder}){
    return(
        <div className="py-3 px-5 border-2 border-primary rounded-full text-lg flex items-center gap-3 overflow-hidden ">
            <button><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button>
            <input type="text" placeholder={placeholder} className="focus:outline-none" />
        </div>
    );
}

export {InputText, InputSearch};