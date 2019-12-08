import Styled from 'styled-components';

const HomeStyleContainer = Styled.div`
.movieContainer {
    display: flex;
    flex: 1;
    justify-content: center;
    flex-wrap: wrap;
}

.btnGrp{
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    color: #ffffff;
}

.previousBtn {
    padding: 4px;
    background-color: #0c0c0c;
    cursor: ${props => props.count > 1 ? 'pointer' : 'default'};
}

.nextBtn {
    padding: 4px;
    background-color: #0c0c0c;
    cursor: pointer;
}

.movieDetailContainer {
    background-color: #292929;
    margin: 20px;
    cursor: pointer;
}

.movieDetail {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border: 1px solid;
    color: #40d7bc;
}

.moviePoster {
    width: 200px;
    height: 300px;
}

.movieTitle {
    width: 158px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.movieYear {
    display: flex;
}
`;

export default HomeStyleContainer;