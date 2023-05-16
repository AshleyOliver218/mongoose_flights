const React = require('react');
class New extends React.Component {
    render() {
      return (
          <div>
              <h1>New Flights</h1>
              <form action="/flights" method="POST">
                airline: <input type="text" name="airline" /><br/>
                flightNo: <input type="number" name="flightNo" /><br/>
                departs: <input type="datetime-local" name="departs" /><br/>
                a
                <input type="submit" name="" value="Create Flight"/>
              </form>
          </div>);
      }
    }

  module.exports = New;