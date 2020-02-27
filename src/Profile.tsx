import React from 'react';

type ProfileProps = {
  username: String;
  name: String;
};

const Profile: React.FC<ProfileProps> = ({ username, name }) => {
  return (
    <div>
      <b>{username}</b>&nbsp;
      <span>({name})</span>
    </div>
  );
};

export default Profile;
