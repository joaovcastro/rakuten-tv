import styled from 'styled-components';
import PropTypes from 'prop-types';

const CarouselContainer = styled.div`
  display: flex;
  margin: 0;
  transition: ${props => (props.sliding ? 'none' : 'transform 1s ease')};
  transform: ${props => {
    if (!props.sliding) return 'translateX(calc(-15% - 20px))';
    if (props.direction === 'prev')
      return 'translateX(calc(2 * (-15% - 20px)))';
    return 'translateX(0%)';
  }};
`;

CarouselContainer.propTypes = {
  sliding: PropTypes.bool,
  direction: PropTypes.string.isRequired,
};

CarouselContainer.defaultProps = {
  sliding: false,
  direction: '',
};

export default CarouselContainer;
