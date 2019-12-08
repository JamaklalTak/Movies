import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllMovies } from '../Home/store/actions';
import { getAllMovieSelector } from '../Home/store/reducer';
import HeaderStyleContainer from './Header.styled';

const Header = (props) => {
    const [searchedValue, setSearchedValue] = useState('');

    const _handleMovieSearch = () => {
        props.dispatch(getAllMovies({key: searchedValue}));
    };

    return(
        <HeaderStyleContainer>
            <div className='siteName'><Link to='/home'>Movies.com</Link></div>
            <div className='searchMovies'>
                <input
                    className='search'
                    placeholder='Search Movies Here..'
                    type='text'
                    value={searchedValue} 
                    onChange={(e) => setSearchedValue(e.target.value)}
                    />
                    <button className='searchBtn' onClick={_handleMovieSearch}>Search</button>
            </div>
        </HeaderStyleContainer>
    );
}

const mapStateToProps = (state) => ({
    allMovies: getAllMovieSelector(state),
});

export default connect(mapStateToProps)(Header);