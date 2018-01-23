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
	const osat = props.osatTaulukko;

	return (
		<div>
			<Osa osa={osat[0].nimi} tehtavia={osat[0].tehtavia} />
			<Osa osa= {osat[1].nimi} tehtavia={osat[1].tehtavia}  />
			<Osa osa= {osat[2].nimi} tehtavia={osat[2].tehtavia} />
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
	const osat = [
	{
		nimi: 'Reactin perusteet',
		tehtavia: 10
	},
	{
		nimi: 'Tiedonvalitys propseilla',
		tehtavia: 7
	},
	{
		nimi: 'Komponenttien tila',
		tehtavia: 14
	}
	]
	return (
		<div>
			<Otsikko kurssiNimi={kurssi} />
			<Sisalto osatTaulukko = {osat} />
			<Yhteensa tehtavaSumma={osat[0].tehtavia + osat[1].tehtavia + osat[2].tehtavia }/>
		</div>
		)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
	)