import { useState } from "react";
import axios from "axios";
import Userlist from "../userlist/userlist";

function Userform() { //component, controller
    //model
    const [userform, setUserform] = useState({
        name: "Ram",
        phoneNumber: "1",
    });

    const [users, setUsers] = useState([{ name: 'Henna', mobile: 5656565656 }]);

    const save = function (event) {
        console.log(userform.name);
        axios
            .post("http://localhost:8083/user", userform)
            .then(function (response) {//success handler
                console.log(response);
            })
            .catch(function (error) {//error handler
                console.log(error);
            });
    };

    return (//view, JSX
        <div>
            <input value={userform.name} name='name' onChange={updateState}></input>
            <input value={userform.mobile} name='mobile' onChange={updateState} placeholder='mobile number'></input>
            <button onClick={save}>Save</button>
            <Userlist usersProp={users}></Userlist>
        </div>
    )

    function updateState(event) {
        const current = { ...userform, [event.target.name]: event.target.value };
        console.log(current);
        setUserform(current);

    }
}

export default Userform;