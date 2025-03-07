import { TailSpin } from "react-loader-spinner";
import { HashLoader } from "react-spinners";

const LoaderComp =()=>{
    return(
        <div 
        style={{
            position:"absolute",
            height:"100vh",
            width:"100vw",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
        }}
        >
        <HashLoader
        size="70"
        color="gray"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        /></div>
    )
}
export default LoaderComp;