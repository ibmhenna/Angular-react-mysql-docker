import React from "react"

function Header() {
    return (
        <div>
            <header
                style={{
                    backgroundColor: 'green',
                    fontSize: "36px",
                    fontFamily:"arial",
                    height:"100px"
                }}>
                This is header
                    </header>

            <p>This is the text area</p>

            <footer
                style={{
                    backgroundColor: 'red',
                    fontSize: "15px",
                    fontFamily:"TNR",
                    height:"50px"
                }}>
                    Footer
                </footer>
        </div>
    )
}

export default Header
