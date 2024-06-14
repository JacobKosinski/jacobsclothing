import { Routes, Route } from 'react-router-dom';
import Home from './components/routes/home.component';
import NavigationBar from './components/routes/navigation-bar.component';
import SignIn from './components/routes/sign-in/sign-in.component';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<NavigationBar />}>
				<Route index element={<Home />} />
				<Route path='signIn' element={<SignIn />} />
			</Route>
		</Routes>
	);
};

export default App;
