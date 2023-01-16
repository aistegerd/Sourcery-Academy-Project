import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SliderNavigationArrow from '~/assets/icons/Icon_arrow_down.svg';
import styles from './SliderNavigationButton.module.scss';

const cn = classNames.bind(styles);

const SliderNavigationButton = forwardRef(
  ({ direction, sliderNavigationHandler }, ref) => {
    const directionIsPrevious = direction === 'previous';

    return (
      <div
        ref={ref}
        className={cn('carousel__nav', {
          'carousel__nav-prev': directionIsPrevious,
          'carousel__nav-next': !directionIsPrevious,
        })}
        onClick={sliderNavigationHandler}
        tabIndex={0}
        role="button"
        aria-label={directionIsPrevious ? 'previous' : 'next'}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            sliderNavigationHandler();
          }
        }}
      >
        <SliderNavigationArrow
          alt={directionIsPrevious ? 'previous' : 'next'}
        />
      </div>
    );
  }
);

SliderNavigationButton.propTypes = {
  direction: PropTypes.oneOf(['previous', 'next']),
  sliderNavigationHandler: PropTypes.func.isRequired,
};

SliderNavigationButton.displayName = 'SliderNavigationButton';
export default SliderNavigationButton;
