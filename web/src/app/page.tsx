import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {name as APP_NAME} from "../../package.json"


// export default function Home() {
//   return (
//         <div classNameNameName="p-3 m-0 border-0 bd-example m-0 border-0">
// 			<NavBar/>
// 			<div
// 				classNameNameName="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
// 			>
// 				<Link
// 					href="/page1"
// 				>
// 					<h2 classNameNameName={`mb-3 text-2xl font-semibold`}>
// 						Learn{' '}
// 						<span classNameNameName="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
// 						-&gt;
// 						</span>
// 					</h2>
// 					<p classNameNameName={`m-0 max-w-[30ch] text-sm opacity-50`}>
// 						Learn about Next.js in an interactive course with&nbsp;quizzes!
// 					</p>
// 				</Link>
// 			</div>
//         </div>
//   )
// }

export default function Home() {
	return (
	<div className="p-3 m-0 border-0 bd-example m-0 border-0">

		
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
		<div className="container-fluid">
			<a className="navbar-brand" href="#">Navbar</a>
			<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav me-auto mb-2 mb-lg-0">
				<li className="nav-item">
				<a className="nav-link active" aria-current="page" href="#">Home</a>
				</li>
				<li className="nav-item">
				<a className="nav-link" href="#">Link</a>
				</li>
				<li className="nav-item dropdown">
				<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					Dropdown
				</a>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#">Action</a></li>
					<li><a className="dropdown-item" href="#">Another action</a></li>
					<li><hr className="dropdown-divider"/></li>
					<li><a className="dropdown-item" href="#">Something else here</a></li>
				</ul>
				</li>
				<li className="nav-item">
				<a className="nav-link disabled" aria-disabled="true">Disabled</a>
				</li>
			</ul>
			<form className="d-flex" role="search">
				<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
				<button className="btn btn-outline-success" type="submit">Search</button>
			</form>
			</div>
		</div>
		</nav>
    
  </div>
	)
}



export enum NavBarOptionVariant {
  "dropdown"
}


export type NavBarOption = {
  title: string,
  variant?: keyof typeof NavBarOptionVariant
}

export type NavBarProps = {
  options?: NavBarOption[]
}





function NavBar(props: NavBarProps) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
		<button
			className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
		>
			<span className="navbar-toggler-icon"></span>
		</button>
		<div className="container-fluid">
			{props.options?.map((item, index) => (
				<li key={index}>{item.title}</li>
			))}
			<a className="navbar-brand" href="#">{APP_NAME.toLocaleUpperCase()}</a>
		</div>
    </nav>
  )
}