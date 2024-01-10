import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvide } from "./context/theam";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
	const [themeMode, setThemeMde] = useState('light');
	const darkTheme = ()=>{
		setThemeMde('dark')
	}
	const lightTheme = ()=>{
		setThemeMde('light')
	}

	useEffect(()=>{
		document.querySelector('html').classList.remove('light', 'dark')
		document.querySelector('html').classList.add(themeMode)
	}, [themeMode])

	return (
		<ThemeProvide value={{themeMode, darkTheme, lightTheme}}>
			<div className='flex flex-wrap min-h-screen items-center'>
				<div className='w-full'>
					<div className='w-full max-w-sm mx-auto flex justify-end mb-4'><ThemeBtn/></div>

					<div className='w-full max-w-sm mx-auto'><Card/></div>
				</div>
			</div>
		</ThemeProvide>
	);
}

export default App;
