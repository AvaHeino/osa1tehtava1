import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
	return (
		<h1>{props.kurssiNimi}</h1>
		)
}

const Osa = (props) => {
	return (
		<p>{props.osa} {props.tehtavia}</p>
	)
}
const Sisalto = (props) => {
	return (
		<div>
			<Osa osa={props.osa1Nimi} tehtavia={props.osa1teht} />
			<Osa osa={props.osa2Nimi} tehtavia={props.osa2teht} />
			<Osa osa={props.osa3Nimi} tehtavia={props.osa3teht} />
		</div>
	)
}

const Yhteensa = (props) => {
	return (
		<p>yhteensa {props.tehtavaSumma} tehtavaa</p>
	)
}
const App = () => {
	const kurssi = 'Half Stack - sovelluskehitys'
	const osa1 = 'Reactin perusteet'
	const tehtavia1 = 10
	const osa2 = 'Tiedonvalitys propseilla'
	const tehtavia2 = 7
	const osa3 = 'Komponenttien tila'
	const tehtavia3 = 14

	return (
		<div>
			<Otsikko kurssiNimi={kurssi} />
			<Sisalto osa1Nimi={osa1} osa2Nimi={osa2} osa3Nimi={osa3}
			 osa1teht={tehtavia1} osa2teht={tehtavia2} osa3teht={tehtavia3} />
			<Yhteensa tehtavaSumma={tehtavia1+tehtavia2+tehtavia3}/>
		</div>
		)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
	)