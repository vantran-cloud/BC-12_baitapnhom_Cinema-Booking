import React, { Component } from 'react';
import Banner from './Banner/Banner';
import MovieList from './MovieList/MovieList';
import Theater from './Theater/Theater';
import './Home.scss';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Banner />
                <MovieList />
                <Theater />
            </div>
        )
    }
}
