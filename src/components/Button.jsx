

function Button({ lebel, borderColor , bgColor , txtColor }){
    return (
    <button className={`border ${borderColor ? borderColor : "border-blue=400"} ${
        bgColor ? bgColor : "bg-green"
    }  ${txtColor ? txtColor : "text-black"} rounded-md p-3 m-4`}
     > 
     {lebel}
     </button>
    );
}

export default Button;