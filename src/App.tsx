import React from 'react';
import {default as bemCssModules} from 'bem-css-modules'
import {default as AppStyles} from'./App.module.css';
import { Display } from './components/Display/Display';
import { MemoryContainer } from './containers/MemoryContainer';
import { MainKeyboard } from './containers/MainKeyboard';

const style = bemCssModules(AppStyles);

function App() {
	return (
			<div className={style()}>
			<Display />
			<MemoryContainer />
			<MainKeyboard />
			</div>
	);
}

export default App;
