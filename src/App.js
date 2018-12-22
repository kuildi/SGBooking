import React from 'react';
import ReactDOM from 'react-dom';
import Article from './Article';
import Button from './Button';
import Footer from './Footer';
import Navbar from './Navbar';

class App extends React.Component {
	render() {

		return <div className="center">
			<Navbar></Navbar>
			<h3 className="teal-text">Найди свое поле у нас</h3>
			<Article></Article>
			<Footer></Footer>
		</div>
	}
}

ReactDOM.render(<App />, document.getElementById('root'));