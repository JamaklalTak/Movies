import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getMovieDetail } from '../Home/store/actions';
import { getMovieDetailSelector } from '../Home/store/reducer';

import DetailPageStyleContainer from './DetailPage.styled';

const DetailPage = (props) => {
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        setDetail(props.movieDetail);
    }, [props.movieDetail]);

    useEffect(() => {
        const id = props.match && props.match.params && props.match.params.id ? props.match.params.id : null;
        props.dispatch(getMovieDetail({id}));
    }, []);

    return(
        <DetailPageStyleContainer>
        {detail && detail[0] &&
        <>
        <img src={detail[0].Poster} alt='poster'/>
        <div className='movie-detail-container'>
            <div className='movieName'>{detail[0].Title}</div>
            <div className='movie-release-time'>
                <div className='movie-release'><span className='text'>RELEASED: </span>{detail[0].Released}</div>
                <div className='movie-time'><span className='text'>DURATION: </span>{detail[0].Runtime}</div>
            </div>
            <div className='movie-director-genre'>
                <div className='movie-director'><span className='text'>DIRECTOR: </span>{detail[0].Director}</div>
                <div className='movie-genre'><span className='text'>GENRE: </span>{detail[0].Genre}</div>
            </div>
            <div className='movie-language-ratings'>
                <div className='movie-language'><span className='text'>LANGUAGE: </span>{detail[0].Language}</div>
                <div className='movie-ratings'><span className='text'>IMDB-RATINGS: </span>{detail[0].imdbRating}</div>
            </div>
            <div className='movie-cast'><span className='text'>CAST: </span>{detail[0].Actors}</div>
            <div className='movie-story'><span className='text'>STORY: </span>{detail[0].Plot}</div>
        </div>
        </>}
        </DetailPageStyleContainer>
    );
};

const mapStateToProps = (state) => ({
    movieDetail: getMovieDetailSelector(state)
});

export default connect(mapStateToProps)(DetailPage);