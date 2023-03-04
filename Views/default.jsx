const React = require('react')

function Def(html) {
	return (
		<html>
			<head>
				<title>Title</title>
				<link rel="stylesheet" href="/css/style.css" />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
				<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css" rel="stylesheet"/>
			</head>
			<body>
				<nav>
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/places">Places</a>
						</li>
						<li>
							<a href="/places/new">Add Place</a>
						</li>
					</ul>
				</nav>
			<div id="wrapper">
               <div className="main-content">{html.children}</div>
               <footer className="footer"><a href="" target="blank" rel="noopener noreferrer">Connect with me on LinkedIn</a></footer>
				{/* {html.children} */}
			</div>	
			</body>
		</html>
	)
}

module.exports = Def