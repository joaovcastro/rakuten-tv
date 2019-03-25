import styled from 'styled-components';
import PropTypes from 'prop-types';

const MovieCover = styled.div`
  padding-top: 300px;
  padding-bottom: 100px;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-top: -105px;
  background-repeat: no-repeat;
  background-size: 100%;
  line-height: 10px;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 0, 0, 0.15) 60%,
    rgba(0, 0, 0, 0.5) 70%,
    rgba(0, 0, 0, 0.7) 80%,
    #171717 100%
  );

  &:before {
    content: '';
    position: absolute;
    margin-top: 60px;
    z-index: -1;
    height: 680px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url(${props => props.backgroundImage});
    background-position: center top;
    background-attachment: fixed;
  }
`;

MovieCover.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
};

export default MovieCover;
