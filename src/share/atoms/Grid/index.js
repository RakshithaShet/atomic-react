import React from 'react';
import PropTypes from 'prop-types';
import { getStyle } from './style.js';

const Grid = ({ children, direction, justify }) => (
  <div className={getStyle(direction, justify)}>{children}</div>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.string,
}

Grid.defaultProps = {
  direction: 'row',
  justify: 'flex-start' // flex-start | flex-end | center | space-between | space-around | space-evenly
};

export default Grid;
