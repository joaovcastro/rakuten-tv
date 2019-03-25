import styled from 'styled-components';
import PropTypes from 'prop-types';

const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 15%;
  margin-right: 20px;
  order: ${props => props.order};
`;

CarouselSlot.propTypes = {
  order: PropTypes.number.isRequired,
};

export default CarouselSlot;
