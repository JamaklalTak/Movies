import Styled from 'styled-components';

const HeaderStyleContainer = Styled.div`
display: flex;
flex-direction: row;
background-color: white;
align-items: center;
padding: 2% 5%;

.siteName {
    font-size: 52px;
    color: #a53773;
    font-weight: 600;
    line-height: 0.28;
    a {
        text-decoration: none;
    }
}

.searchMovies {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
}

.search {
    width: 320px;
    height: 28px;
}

.searchBtn {
    padding: 4px;
    margin-left: 4px;
    font-size: 14px;
    height: 34px;
    width: 78px;
    background-color: #202020;
    color: #ffffff;
    cursor: pointer;
}
`;

export default HeaderStyleContainer;