import React from 'react';
import { Link } from 'react-router-dom';

export default class Tutors extends React.Component {
    constructor (props) {
    super(props)
    this.state = {
        tutorlist: [],
    }
    this.sortByName = this.sortByName.bind(this)
    this.sortByCity = this.sortByCity.bind(this)
    this.filterByElvis = this.filterByElvis.bind(this)
    this.filterByHowe = this.filterByHowe.bind(this)
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => this.setState({ tutorlist: data }))
    }

    sortByName () {
      const {tutorlist} = this.state
      this.setState(tutorlist.sort((a, b) => (a.name > b.name)? 1 : -1))
    }

    sortByCity () {
      const {tutorlist} = this.state
      this.setState(tutorlist.sort((a, b) => (a.address.city > b.address.city)? 1 : -1))
    }

    filterByElvis = () => {
      const {tutorlist} = this.state
      this.setState({tutorlist: tutorlist.filter(a => a.address.city === 'South Elvis')})
    }

    filterByHowe () {
      const {tutorlist} = this.state
      this.setState({tutorlist: tutorlist.filter(a => a.address.city === 'Howemouth')})
    }

    render() {
        const { tutorlist } = this.state;

        return (
          <div>
            <div className='filter_sort_div'>
              <span>Filter by:</span>
              <button onClick={this.filterByElvis}>Elvis</button>
              <button onClick={this.filterByHowe}>Howemouth</button>
              <span>Sort by:</span>
              <button onClick={this.sortByName}>Name</button>
              <button onClick={this.sortByCity}>City</button>
            </div>
            <div className='tutor_div'>
              {tutorlist.map(tutor => <div key={tutor.id}>
                <img src={process.env.PUBLIC_URL + '/user-photo.png'} alt="tutor"/>
                <Link to={`/tutor/${tutor.id}`} className='link'>{tutor.name}</Link>
                <p>{tutor.email}</p>
                <p>{tutor.address.city}</p>
              </div>)}
            </div>
          </div>
        );
      }
}