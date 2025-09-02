// import React, { useEffect, useState } from "react"
// import Link from "next/link"

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

//     useEffect(() => {
//         window.addEventListener("resize", () => {
//             if (window.screen.width > 700) {
//                 setIsMenuOpen(false)
//             }
//         })
//     }, [])

//     useEffect(() => {
//         document.body.style.position = isMenuOpen ? "fixed" : "relative"
//     }, [isMenuOpen])

//     return (
//         <header className="header" style={{ width: "100%" }}>
//             <div className="nav"
//                 style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     paddingTop: "0rem",
//                     paddingBottom: "0",
//                     fontWeight: "bold",
//                     fontSize: "5rem",
//                 }}>
//                 {/* Micah Ondiwa */}
//             </div>
//         </header>
//     )
// }

// export default Header
