import { render, screen } from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom';
import Cards from '../components/Cards/Cards';
import Header from '../components/Header/Header';

test('It should render the Cards component',()=>{

	const movieData = {title:'testing-movie' ,id:'test1'}
	render(
	<Router>
		<Cards movieData={movieData}/>
	</Router>
	);
	const cardsElements = screen.getByTestId('cards-1')
	 expect(cardsElements).toBeInTheDocument()
	 expect(cardsElements).toHaveTextContent('testing-movie')
});

test('It should render the Header component',()=>{

	localStorage.setItem('user',JSON.stringify({
		displayName: "Ammar Al Hariry",
		email: "hariry49@gmail.com",
		photoURL: "https://lh3.googleusercontent.com/a-/AFdZucryXuAglApNXZpWrdNqvulqr5qewXa1Bc3UXKxJUxc=s96-c"
}))

	render(
	<Router>
		<Header />
	</Router>
	);
	const cardsElements = screen.getByTestId('header-1');
	 expect(cardsElements).toBeInTheDocument();
	 expect(cardsElements).toHaveTextContent('Ammar Al Hariry');
});