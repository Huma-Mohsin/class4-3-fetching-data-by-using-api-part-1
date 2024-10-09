interface PropStructure{
    text:string;
    style?:React.CSSProperties;
}

function Heading(props:PropStructure){
    return(
        <div>
<h1 style= {props.style}>{props.text}</h1>
        </div>
    )
}
export default Heading