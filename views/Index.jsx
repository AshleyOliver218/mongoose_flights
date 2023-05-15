const React = require('react');

class Index extends React.Component {
    render() {
        const { flights } = this.props;
        return (
            <div>
                <h1>Flights</h1>
                <ul>
                    {flights.map((flight, i) => {
                        return (
                            <li>
                                <a href={`/flights/${flight.id}`}>
                                    {flight.airline}
                                </a>{' '}
                                {flight.flightNo} <br></br>
                                {flight.departs}
                                <br />
                            </li>
                        );
                    })}
                </ul>
                <nav>
                    <a href="/flights/new">Create a New Flight</a> <br></br>
                </nav>
            </div>
        );
    }
}
module.exports = Index;