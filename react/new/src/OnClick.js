import React from 'react';

function MyApp() {

    function MyFunction() {
        alert("Like");
    }
    return (
        <div>
                <button onClick={MyFunction}>London</button>
        </div>
    )
}
export default MyApp