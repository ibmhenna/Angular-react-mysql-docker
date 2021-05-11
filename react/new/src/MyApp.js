import React from 'react';

function MyApp() {

    function MyFunction() {
        alert("Like");
    }
    return (

        <div>
            <ol>
                <li><button onClick={MyFunction}>London</button></li>
            <br></br>
                <li><button onClick={MyFunction}>Switzerland</button></li>
               <br></br>
                <li><button onClick={MyFunction}>Paris</button></li>
            </ol>
        </div>
    )
}
export default MyApp