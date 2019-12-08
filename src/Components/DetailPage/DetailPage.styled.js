import Styled from 'styled-components';

const DetailPageStyleContainer = Styled.div`

display: flex;
flex: 1;
flex-direction: row;
justify-content: space-between;

.movie-detail-container {
    margin: 24px;
    color: #ffffff;
}

.movieName {
    display: flex;
    justify-content: center;
    font-size: 52px;
}

.movie-release-time {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 4px;
}

.movie-release {

}

.movie-time {

}

.movie-director-genre {
    display: flex;
    flex: 1;
    justify-content: space-between;
    padding: 4px;
}

.movie-director {

}

.movie-genre {

}

.movie-cast {
display: flex;
flex: 1;
padding: 4px;
}

.movie-story {
display: flex;
flex: 1;
padding: 4px;
}

.movie-language-ratings {
display: flex;
flex: 1;
justify-content: space-between;
padding: 4px;
}

.movie-language {

}

.movie-ratings {

}

.text {
    color: #40d7bc;
}
`;

export default DetailPageStyleContainer;