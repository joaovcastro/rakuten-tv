import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import ControlButton from './ControlButton';
import CarouselContainer from './CarouselContainer';
import CarouselSlot from './CarouselSlot';

const Wrapper = styled.div`
  width: 90%;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
`;

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
    };
  }

  nextSlide() {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length || 1;
    this.doSliding('next', position === numItems - 1 ? 0 : position + 1);
  }

  prevSlide() {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length;
    this.doSliding('prev', position === 0 ? numItems - 1 : position - 1);
  }

  doSliding(direction, position) {
    this.setState({
      sliding: true,
      direction,
      position,
    });
    setTimeout(() => {
      this.setState({
        sliding: false,
      });
    }, 5);
  }

  getOrder(itemIndex) {
    const { position } = this.state;
    const { children } = this.props;
    const numItems = children.length || 1;
    if (itemIndex - position < 0) {
      return numItems - Math.abs(itemIndex - position);
    }
    return itemIndex - position;
  }

  render() {
    const { children } = this.props;
    return (
      <Content>
        <ControlButton onClick={() => this.prevSlide()}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </ControlButton>
        <Wrapper>
          <CarouselContainer
            sliding={this.state.sliding}
            direction={this.state.direction}
          >
            {children &&
              children.map((child, index) => (
                <CarouselSlot key={index} order={this.getOrder(index)}>
                  {child}
                </CarouselSlot>
              ))}
          </CarouselContainer>
        </Wrapper>
        <ControlButton onClick={() => this.nextSlide()}>
          <FontAwesomeIcon icon={faChevronRight} />
        </ControlButton>
      </Content>
    );
  }
}

Carousel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Carousel;
