import React from 'react';
import { Link } from 'react-router-dom';

export default class Tutors extends React.Component {
    constructor (props) {
    super(props)
    this.state = {
        tutorlist: [],
        photos: [],
    }
    this.sortByName = this.sortByName.bind(this)
    this.sortByCity = this.sortByCity.bind(this)
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => this.setState({ tutorlist: data }))

        // fetch('https://jsonplaceholder.typicode.com/photos')
        // .then(res => res.json())
        // .then(data => this.setState({ photos: data }))
    }

    sortByName () {
      const {tutorlist} = this.state
      this.setState(tutorlist.sort((a, b) => (a.username > b.username)? 1 : -1))
    }

    sortByCity () {
      const {tutorlist} = this.state
      this.setState(tutorlist.sort((a, b) => (a.address.city > b.address.city)? 1 : -1))
    }

    render() {
        const { tutorlist, photos } = this.state;
        
        return (
          <div>
            <div>
            <span>Sort by:</span>
            <button onClick={this.sortByName}>Name</button>
            <button onClick={this.sortByCity}>City</button>
            </div>
          <div className='tutor_div'>
            {/* {photos.filter(photo => photo.id <=8).map(photo => <div key={photo.id}>
                <img src={photo.thumbnailUrl} alt="tutor"/>
                <p>{photo.title}</p>
                </div>)} */}
            {tutorlist.filter(tutor => tutor.id <=8).map(tutor => <div key={tutor.id}>
                <img src={process.env.PUBLIC_URL + '/02.png'} alt="tutor"/>
                <Link to={`/tutor/${tutor.id}`} className='link'>{tutor.username}</Link>
                <p>{tutor.email}</p>
                <p>{tutor.address.city}</p>
              </div>)}
          </div>
          </div>
        );
      }
}