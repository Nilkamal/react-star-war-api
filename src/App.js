import React, {Component} from 'react';
import 'tachyons';
import SearchInput from './SearchInput';
import Scroll from './Scroll';
import PeopleList from './PeopleList';
import './App.css';

class App extends Component {
    
    constructor() {
        super();
        this.state = {
            people: [],
            searchField: ''
        }
    }

    componentDidMount() {
     fetch('https://swapi.co/api/people/')
                    .then(resp=>resp.json())
                    .then(data=>{
                        console.log(data);
                        this.setState({
                            people: data.results
                        });                   
                    });
    }

    onSearchChange = (e) => {
        this.setState({
            searchField: e.target.value
        })
    }
    render() {
        const filteredPeople = this.state.people.filter((person) => {
            return person.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })

        if(this.state.people.length === 0) {
            return (<h1>LOADING</h1>);
        } else {
        return (
             <div className='tc'>
                <h1>Star War People API</h1>
                <SearchInput onSearchChange={this.onSearchChange} />
                <Scroll>
                    <PeopleList persons={filteredPeople}/>
                </Scroll>
            </div>
        );
        }
    }
}

export default App;