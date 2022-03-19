// cara render
// ReactDOM.render(<p>Ini paragraph</p>, document.getElementById("root"))


// render element dengan child nya sekaligus
// ReactDOM.render(
//   <ul>
//     <li>List Item 1</li>
//     <li>List Item 2</li>
//   </ul>
//   , document.getElementById("root"))

// ReactDOM.render(
//   <ul>
//     <li>List Item 3</li>
//     <li>List Item 4</li>
//   </ul>
//   , document.querySelector(".root2"))

// cara render elemen html dari function
// function Navbar() {
//   return (
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//       <div class="container-fluid">
//         <a class="navbar-brand" href="#">Navbar</a>
//         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//             <li class="nav-item">
//               <a class="nav-link active" aria-current="page" href="#">Home</a>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link" href="#">Link</a>
//             </li>
//             <li class="nav-item dropdown">
//               <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                 Dropdown
//               </a>
//               <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <li><a class="dropdown-item" href="#">Action</a></li>
//                 <li><a class="dropdown-item" href="#">Another action</a></li>
//                 <li><hr class="dropdown-divider" /></li>
//                 <li><a class="dropdown-item" href="#">Something else here</a></li>
//               </ul>
//             </li>
//             <li class="nav-item">
//               <a class="nav-link disabled">Disabled</a>
//             </li>
//           </ul>
//           <form class="d-flex">
//             <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
//             <button class="btn btn-outline-success" type="submit">Search</button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   )
// }

// function MainContent() {
//   return (
//     <h1>This is main content</h1>
//   )
// }

// // render navbar dari bootstrap
// ReactDOM.render(
//   // bisa tulis dengan closing tag terpisah
//   // <Navbar></Navbar>
//   // closing tag versi react
//   <div>
//     <Navbar />
//     <MainContent />
//   </div>
//   ,
//   document.getElementById("root")
// )

// declarative yang artinya cukup kasih tau mau ngelakuin apa,
// nanti reactnya yang mikirin caranya
// ReactDOM.render(<h1 class="header">Hello World</h1>, document.getElementById("root"))
// cara imperative, artinya penulisan program step by step secara detail
// const h1 = document.createElement("h1")
// h1.textContent = "Hello World"
// h1.className = "header"
// document.getElementById("root").append(h1)



// apa itu jsx
// const h1 = document.createElement("h1")
// h1.textContent = "Hello World"
// h1.className = "header"

// console.log(h1)

// bentuk jsx
// jsx = javascript xml
// const elementJSX = <h1 class="header">Ini h1</h1>
// modul react gunanya untuk mengubah element jsx menjadi object js
// {
//   "type": "h1",
//     "key": null,
//       "ref": null,
//         "props": {
//     "class": "header",
//       "children": "Ini h1"
//   },
//   "_owner": null,
//     "_store": { }
// }
// reactdom fungsinya untuk baca js diatas dan dirubah bentuknya menjadi
// vanilla html untuk create element
// kemudian babel convert hasil js dari reactdom jadi kompatibel ke
// browser yang lama yang tidak support es6
// console.log(elementJSX)
// contoh salah, tidak bisa render dua tag sekaligus
// ReactDOM.render(
// <h1>this is h1</h1>
// <p>This is paragraph</p>
//   , document.getElementById('root'))

// contoh benar
// untuk render dua element gunakan wrapper div agar cuma jadi 1 tag
// ReactDOM.render(
//   <div>
//     <h1>this is h1</h1>
//     <p>This is paragraph</p>
//   </div>
//   , document.getElementById('root'))

// penulisan menggunakan function
// const page = (
//   <div>
//     <h1>this is h1</h1>
//     <p>This is paragraph</p>
//   </div>
// )
// ReactDOM.render(
//   page
//   , document.getElementById('root'))

// cara masukin gambar di jsx
// const page = (
//   <div>
//     <img src="./react-logo.png" width="40px"></img>
//     <h1>Fun Facts about react</h1>
//     <ul>
//       <li>React direlease pada tahun 2013</li>
//       <li>React didevelop oleh facebook</li>
//       <li>React digunakan oleh banyak programmer di dunia</li>
//       <li>React punya banyak follower di github</li>
//       <li>React development sangat mudah</li>
//     </ul>
//   </div>
// )

// ReactDOM.render(page, document.getElementById('root'))
// function di dalam jsx yang return html element disebut dengan komponen
// komponen react harus pakai pascalcase atau huruf capital di hurup pertamanya
// const Page = () => {
//   return (
//     <div>
//       <img src="./react-logo.png" width="40px"></img>
//       <h1>Fun Facts about react</h1>
//       <ul>
//         <li>React direlease pada tahun 2013</li>
//         <li>React didevelop oleh facebook</li>
//         <li>React digunakan oleh banyak programmer di dunia</li>
//         <li>React punya banyak follower di github</li>
//         <li>React development sangat mudah</li>
//       </ul>
//     </div>
//   )
// }

// ReactDOM.render(<Page />, document.getElementById('root'))

// paradigma pemisahan komponen pada react
// urutan component sesuai susunan mana duluan komponen yang di render
// const nav = document.getElementById('nav')
// nav.className = "nav"

// const Navbar = () => {
//   return (
//     <nav id="nav" className="nav">
//       <img src="./react-logo.png" className="nav-logo"></img>
//       <ul className="nav-items">
//         <li>Home</li>
//         <li>About</li>
//         <li>Login</li>
//       </ul>
//     </nav>
//   )
// }
// content
// const MainContent = () => {
//   return (
//     <div>
//       <h1>Fun Facts about react</h1>
//       <ul>
//         <li>React direlease pada tahun 2013</li>
//         <li>React didevelop oleh facebook</li>
//         <li>React digunakan oleh banyak programmer di dunia</li>
//         <li>React punya banyak follower di github</li>
//         <li>React development sangat mudah</li>
//       </ul>
//     </div>
//   )
// }

// const Footer = () => {
//   return (
//     <footer>
//       <p>©2022 Zoom Video Communications, Inc.All rights reserved. </p>
//     </footer>
//   )
// }

ReactDOM.render(
  <div>
    <Navbar />
    <MainContent />
    <MainContent />
    <Footer />
  </div>, document.getElementById('root')
)