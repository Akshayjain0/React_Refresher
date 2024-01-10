import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {

	return (
		<UserContextProvider>
			<Login/>
			<h1 className='text-3xl font-bold underline'>Chai or React</h1>
			<Profile/>
		</UserContextProvider>
	);
}

export default App;
