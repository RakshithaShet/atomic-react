import React from 'react';
import PropTypes from 'prop-types';
import Panel from '../../share/molecules/Panel';
import Recommendation from '../../share/organisms/Recommendation';

const Recommendations = ({ recommendations }) => (
  <Panel title="Recommendations">
    {recommendations.map((recommendation) => (
      <Recommendation recommendation={recommendation} key={recommendation.id} />
    ))}
  </Panel>
);

Recommendations.propTypes = {
  recommendations: PropTypes.shape({
    id: PropTypes.string,
    summary: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  }),
}

export default Recommendations;
