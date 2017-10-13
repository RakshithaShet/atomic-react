import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({user}) => (
  <div>
    #{user.id} {user.name} {user.email}
  </div>
);

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
  }),
}

export default UserItem;