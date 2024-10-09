import Heading from "../../../components/heading";

const Userlist=async ()=>{
const url:string="https://jsonplaceholder.typicode.com/users"  ;
const fetchData=await fetch(url);
const response=await fetchData.json();
console.log(response); //response is an object.
console.log(" Data At Index 3",response[3].name);
return(
    <div>
        <Heading style={{color:"blueviolet",fontSize:"50px",textAlign:"center",fontWeight:"bold",textDecoration:"underline",padding:"20px",margin:"30px"}} text="Fetching Users List Through API...."/>
<ul>
    <li  style={{color:"crimson",fontSize:"25px",textAlign:"justify"}}>{response[1].name}</li>  {/* we are fetching data one by one through index and causes a problem to handle when users exceed.*/}
    <br/>
    
    <li style={{color:"crimson",fontSize:"25px",textAlign:"justify"}}>{response[7].name}</li>
    <br/>
    
    <li style={{color:"crimson",fontSize:"25px",textAlign:"justify"}}>{response[0].name}</li>
    <br/>
    
    <li style={{color:"crimson",fontSize:"25px",textAlign:"justify"}}>{response[4].name}</li>
    <br/>
    
    <li style={{color:"crimson",fontSize:"25px",textAlign:"justify"}}>{response[9].name}</li>
    <br/>
</ul>

    </div>
)




}

export default Userlist