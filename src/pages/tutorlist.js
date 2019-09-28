import React from 'react';

export default class Tutors extends React.Component {
    constructor (props) {
    super(props)
    this.state = {
        tutorlist: [],
    }
    // preserve the initial state in a new object
     
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => this.setState({ tutorlist: data }))
    }

    sortByName = () => {
      const {tutorlist} = this.state
      this.setState(tutorlist.sort((a, b) => (a.name > b.name)? 1 : -1))
    }
    
    sortByCity = () => {
      const {tutorlist} = this.state
      this.setState(tutorlist.sort((a, b) => (a.address.city > b.address.city)? 1 : -1))
    }

    filterByLocation = (word) => {
      this.setState(this.baseState)
      // const {tutorlist} = this.state
      this.setState((prevState) => ({tutorlist: prevState.tutorlist.filter(a => a.address.city === word)}))
    }

    render() {
        const { tutorlist } = this.state;

        return (
          <div className='tutorlist_div'>
            <div className='filter_sort_div'>
              <span>Filter by:</span>
              <button onClick={() => this.filterByLocation('South Elvis')}>Elvis</button>
              <button onClick={() => this.filterByLocation('Howemouth')}>Howemouth</button>
              <span>Sort by:</span>
              <button onClick={this.sortByName}>Name</button>
              <button onClick={this.sortByCity}>City</button>
            </div>
            <div className='tutor_div'>
              {tutorlist.map(tutor => <div key={tutor.id}>
                <img src={process.env.PUBLIC_URL + '/user-photo.jpg'} alt="tutor"/>
                <p className='tutor'>{tutor.name}</p>
                <p>City</p>
                <span>{tutor.address.city}</span>
                <h4>Students so far</h4>
                <img className='student_img' src={process.env.PUBLIC_URL + '/student-photo.jpg'} alt="students"/>
                <img className='student_img' src={process.env.PUBLIC_URL + '/student-photo.jpg'} alt="students"/>
                <img className='student_img' src={process.env.PUBLIC_URL + '/student-photo.jpg'} alt="students"/>
                <img className='student_img' src={process.env.PUBLIC_URL + '/student-photo.jpg'} alt="students"/>
              </div>)}
            </div>
          </div>
        );
      }
}