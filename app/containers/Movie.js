import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserFriends,
  faInfoCircle,
  faFlag,
  faClock,
  faCalendar,
  faCommentAlt,
  faFilm,
  faAward,
  faStar,
  faUser,
  faTheaterMasks,
  faPlayCircle,
  faThumbtack,
} from '@fortawesome/free-solid-svg-icons';
import LazyLoad from 'react-lazyload';
import MovieCover from '../components/MovieCover';
import Genre from '../components/Genre';
import Award from '../components/Award';
import fetchMovie from '../actions/fetchMovie';

const DirectionCasting = styled.div`
  display: flex;
  .element {
    margin-right: 15px;
  }
`;

const MovieDetails = styled.div`
  width: 100%;
  color: black;
`;

const ScoreContainer = styled.div`
  display: flex;
  text-align: center;

  .score {
    margin-left: 15px;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 7px;
`;

const Button = styled.button`
  width: 350px;
  height: 60px;
  font-size: 17px;
  font-weight: 600;
  border-radius: 7px;
  margin: 15px;
  text-transform: uppercase;
  border: 2px solid #ffe300;
  cursor: pointer;
`;

const RoundButton = styled.button`
  border-radius: 100%;
  border: none;
  width: 90px;
  height: 90px;
  outline: none;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
`;

const joinArray = arr => {
  const str = arr && arr.map(elem => `${elem.name}`);
  return str && str.toString().replace(',', ', ');
};

class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.movieId);
  }

  render() {
    const movie = this.props.movie.movie;
    if (!movie) return <div />;
    const countries = joinArray(movie.countries);
    const subtitles = joinArray(
      movie.view_options.private.streams[0].subtitle_languages,
    );

    return (
      <Fragment>
        <LazyLoad height={620}>
          <MovieCover
            className="movie-container"
            backgroundImage={movie.images.snapshot}
          >
            <div className="flex-center">
              <div
                style={{ display: 'block', width: '140px', margin: '0 20px' }}
              >
                <Link to={`/${movie.id}/trailer`}>
                  <RoundButton>
                    <Icon
                      icon={faPlayCircle}
                      size="3x"
                      style={{ color: 'white', marginLeft: '5px' }}
                    />
                  </RoundButton>
                </Link>
                <p>Trailer</p>
              </div>
              <div
                style={{ display: 'block', width: '140px', margin: '0 20px' }}
              >
                <RoundButton className="round-btn">
                  <Icon
                    icon={faThumbtack}
                    size="3x"
                    style={{ color: 'white', marginLeft: '5px' }}
                  />
                </RoundButton>
                <p style={{ lineHeight: '1.2em' }}>Añadir a Quiero Ver</p>
              </div>
            </div>

            <div className="flex-center">
              <h2 className="yellow score">
                <Icon icon={faStar} />
                {movie.scores[0].score}
              </h2>
              <h2 className="grae score">
                <Icon icon={faUser} />
                {movie.scores[0].formatted_amount_of_votes}
              </h2>
            </div>
            <h1 className="big">{movie.title}</h1>

            <Button className="regular">
              {`Ver Ahora - ${movie.order_options[0].price}`}
            </Button>
            <Button className="inverted">Canjear cupón</Button>
          </MovieCover>
        </LazyLoad>

        <MovieDetails>
          <div className="col-70 detail-container">
            <div className="tech-details">
              <Icon icon={faUserFriends} />
              {movie.classification.age}
              <span className="margin-right-sm" />
              <Icon icon={faClock} />
              {movie.duration}
              <span className="margin-right-sm" />
              <Icon icon={faCalendar} />
              {movie.year}
              <span className="margin-right-sm" />
              <Icon icon={faFlag} />
              {countries}
              <span className="margin-right-sm" />
              <Icon icon={faInfoCircle} />
              Titulo original: {movie.original_title}
            </div>
            <p style={{ margin: '30px 30px 30px 0px', lineHeight: '2.2em' }}>
              {movie.plot}
            </p>
            <h3>
              <Icon icon={faCommentAlt} /> Idiomas y subtítulos
            </h3>
            <div className="audio">
              {movie.view_options.private.streams[0].audio_languages.map(
                language => (
                  <div
                    style={{ display: 'flex', padding: '0' }}
                    key={language.name}
                  >
                    <p style={{ width: '75px' }}>{language.name}</p>
                    <p style={{ marginLeft: '30px', color: 'grey' }}>
                      {subtitles}
                    </p>
                  </div>
                ),
              )}
            </div>

            <h3>
              <Icon icon={faFilm} />
              Dirección y reparto
            </h3>
            <DirectionCasting className="slider no-margin">
              {movie.directors.map(director => (
                <div
                  key={director.name}
                  className="element slide small"
                  style={{ textAlign: 'center', lineHeight: '5px' }}
                >
                  <LazyLoad height={300}>
                    <img src={director.photo} width="70" />
                  </LazyLoad>

                  <p> {director.name} </p>
                  <p style={{ fontSize: '12px', fontWeight: 'bold' }}>
                    DIRECTOR
                  </p>
                </div>
              ))}
              {movie.actors.map(actor => (
                <div
                  className="element slide small"
                  key={actor.name}
                  style={{ textAlign: 'center', lineHeight: '5px' }}
                >
                  <LazyLoad height={300}>
                    <img src={actor.photo} width="70" />
                  </LazyLoad>
                  <p> {actor.name} </p>
                </div>
              ))}
            </DirectionCasting>
            <h3>
              <Icon icon={faAward} />
              Prémios
            </h3>
            {movie.awards.map(award => (
              <Award
                key={name}
                name={award.name}
                category={award.category}
                result={award.result}
              />
            ))}
            <div className="grid">
              <div className="col-50">
                <h3>
                  <Icon icon={faStar} />
                  Puntuaciones
                </h3>
                <ScoreContainer>
                  {movie.scores.map(score => (
                    <div
                      className="score"
                      style={{ width: '100px' }}
                      key={`${score.site}${score.site}`}
                    >
                      <div
                        className={`c100 p${Math.floor(
                          (score.score / score.site.scale) * 100,
                        )} medium`}
                      >
                        <span>{score.score}</span>
                        <div className="slice">
                          <div className="bar" />
                          <div className="fill" />
                        </div>
                      </div>
                      <p> {score.site.name} </p>
                    </div>
                  ))}
                </ScoreContainer>
              </div>
              <div className="col-50">
                <h3>
                  <Icon icon={faTheaterMasks} />
                  Géneros
                </h3>
                {movie.genres.map(genre => (
                  <Genre
                    key={genre.name}
                    name={genre.name}
                    icon={genre.additional_images.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </MovieDetails>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movie,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMovie: function(movieId) {
      dispatch(fetchMovie(movieId));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movie);
