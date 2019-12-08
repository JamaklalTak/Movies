import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { getAllMovies } from './store/actions';
import { getAllMovieSelector } from './store/reducer';

import HomeStyleContainer from './Home.styled';

const Home = (props) => {
    const [movies, setMovies] = useState([]);
    const defaultValue = 'all';
    const [count, setCount] = useState(1);
    const history = useHistory();

    useEffect(() => {
        props.dispatch(getAllMovies({key: defaultValue, page: count}));
    }, []);

    useEffect(() => {
        if(props.allMovies && props.allMovies[0] && props.allMovies[0].Search){
            setMovies(props.allMovies[0].Search);
        }
    }, [props.allMovies]);

    const _handleMovieClick = (id) => {
        history.push(`/detail/${id}`);
    };

    const _handleNextClick = () => {
        setCount(count + 1);
        props.dispatch(getAllMovies({key: 'all', page: count + 1}));
    };

    const _handlePreviousClick = () => {
        if(count > 1){
            setCount(count - 1);
            props.dispatch(getAllMovies({key: 'all', page: count - 1}));
        }
    };

    return(
        <HomeStyleContainer count={count}>
            <div className='btnGrp'>
                <div className='previousBtn' onClick={_handlePreviousClick}>Previous</div>
                <div className='nextBtn' onClick={_handleNextClick}>Next</div>
            </div>
               <div className='movieContainer'>
               {movies.map(data => {
                    return (
                    <div onClick={() => _handleMovieClick(data.imdbID)} className='movieDetailContainer' key={data.imdbID} id={data.imdbID}>
                        <img className='moviePoster' src={data.Poster} alt='poster' />
                        <div className='movieDetail'>
                            <div className='movieTitle'>{data.Title}</div>
                            <div className='movieYear'>{data.Year}</div>
                        </div>
                    </div>
                )})}
                </div>
            <div className='btnGrp'>
                <div className='previousBtn' onClick={_handlePreviousClick}>Previous</div>
                <div className='nextBtn' onClick={_handleNextClick}>Next</div>
            </div>
        </HomeStyleContainer>
    );
};

const mapStateToProps = (state) => ({
    allMovies: getAllMovieSelector(state),
});

export default connect(mapStateToProps)(Home);