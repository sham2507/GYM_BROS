export default function Button({text , onClick = null}){
    return(
        <button onClick={() => {
            onClick();
        }} className=" mx-auto px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 blueShadow duration-200">
            <p>{text}</p>
        </button>
    );
}