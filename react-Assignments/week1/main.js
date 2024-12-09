const cities = [
    {
        name: 'Paris',
        country: 'France',
        language: 'French',
        currency: 'Euro'
    },
    {
        name: 'Tokyo',
        country: 'Japan',
        language: 'Japanese',
        currency: 'Yen'
    },
    {
        name: 'New York',
        country: 'USA',
        language: 'English',
        currency: 'Dollar'
    },
    {
        name: 'Sydney',
        country: 'Australia',
        language: 'English',
        currency: 'Australian Dollar'
    }
];


const City = ({ name, country, language, currency }) => {
    return <li className="city">{name} - {country} - {language} - {currency}</li>;
};


const CityList = ({ cities }) => {
    return (
        <div className="cityList">
            <h3 className="cityTitle">Cities</h3>
            <ol className="cities-list">
                {cities.map(place => (<City name={place.name} country={place.country} language={place.language} currency={place.currency}/>
                ))}
            </ol>
        </div>
    );
};

const root = document.getElementById('root');
ReactDOM.render(<CityList cities={cities} />, root);
