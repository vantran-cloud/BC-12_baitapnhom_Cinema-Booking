import React, { Component } from 'react';
import Loading from 'components/Loading/Loading';
import MovieItem from '../MovieItem/MovieItem';
import { actFetchAllMovie } from '../module/actions';
import { connect } from 'react-redux';

class MovieList extends Component {

    render() {

        const { loading, listMovie } = this.props
        if (loading) return <Loading />;
        return (
            <div className="container" style={{ textAlign: 'center'}}>
                <div className="row">
                    <div className="listMovie-btn ml-5">
                        <button className="btn btn-dark" style={{ marginTop: "40px", marginBottom: "10px", width: "150px" }}>Phim đang chiếu</button>{' '}
                        <button className="btn btn-dark" style={{ marginTop: "40px", marginBottom: "10px", width: "150px" }}>Phim sắp chiếu</button>{' '}
                    </div>
                </div>

                <div className="row ml-3">
                    {listMovie.map(movie => {
                        return <MovieItem key={movie.maPhim} movie={movie} />
                    })}
                </div>
            </div>
        )
    };

    componentDidMount() {
        this.props.fetchAllMovie();
    }
}

const mapStateToProps = state => ({
    listMovie: state.movieReducer.listMovie,
    loading: state.movieReducer.loading,
})

const mapDispatchToProps = dispatch => ({
    fetchAllMovie: () => {
        dispatch(actFetchAllMovie());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieList)