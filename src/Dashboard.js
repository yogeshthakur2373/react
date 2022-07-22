import React, { useState ,  useEffect } from 'react'
import Dash from './Dash'





export default function Dashboard(){
  const [btnText, updatebtnText] = useState()
  
  const loadDataOnlyOnce = () => {
    updatebtnText(<Dash/>)
  }
    
  // This function will called only once
  useEffect(() => {
    loadDataOnlyOnce();
  }, [])           
    
  return (
    <div >
            <Dash/>
    </div>
  );
}   
  







// export default function Dashboard() {
//      const element = {
         
//      }
//     // const [  ]


//     // useEffect(() => {
//     //     Handler();


//     // }, [])
//     // function Handler() {
//     //     return (
//     //         <div onClick={() => { alert("wofjhb") }}>
//     //             <Dash />
//     //         </div>
//     //     )
//     // }




//     // function one() {



//     return (

//         <div onClick={() => { Handler() }}>
//             {Handler()}
//         </div>
// 
//     )


// }
// //}

