import React, { Component } from 'react';
import RecepNavbar from '../../components/receptionalist/RecepNavbar';
import RecepSidebar from '../../components/receptionalist/RecepSidebar';
import RecepDashboard from './RecepDashboard';

class Receptionalist extends Component {  
    render() {  
        return (
            <div className="container">
                <RecepNavbar />
                <RecepSidebar />
                <RecepDashboard />
            </div>
        );
    }
}

export default Receptionalist;

// import React, {useState, useEffect} from 'react';
// import firebase from '../../Firebase.js';

// export default function Edit() {
//     const [doctors,setdoctors] = useState([]);

//     const ref = firebase.firestore().collection("doctors");

//     const getDoctor = async() => {
//         // ref.onSnapshot((querySnapshot) => {
//         //     const item = [];
//         //     querySnapshot.forEach((doc) => {
//         //         item.push(doc.data());
                
//         //     });
//         //     console.log(item[0].nic);
//         // })
//         const item = [];
//         const doctor = await ref.where('nic', '==', '956676543v').get();
//         if(doctor.empty){
//             console.log("not found");
//         }
//         doctor.forEach((doc) => {
//             item.push(doc.data());
//         });
//         console.log(item[0].name);
//     }
//     useEffect(() => {
//         getDoctor();
//     }, []);


//     return (
//         <main className="main-container">
//             <div className="register-card">
//                 <div className="form-container">
//                     <form className="form">
//                         <div className="form-input">
//                             <div className="form-label"><label>Doctor ID</label></div>
//                             <div><input type="text" name="id" onChange="" className="input" /></div>
//                             <div className="form-input-button"><input type="submit" value="Submit" /></div>
                                
//                         </div>
//                     </form>
                
//                 </div>
//                 <div className="form-container"></div>
            
//             </div>
//         </main>
//     )
// }
// export default Edit;
