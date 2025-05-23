import './Profile.css';

function Profile({ user }) {
  if (!user) {
    return <p>Please login first.</p>;
  }

  return (
    <div className="account-settings-wrapper">
      <div className="account-card">
        <h2>Account Settings</h2>

        <div className="profile-row">
          <div className="profile-image">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824144_1280.png"
              alt="Profile"
            />
            <div className="camera-icon">
              <img
                src="https://img.icons8.com/fluency-systems-filled/24/ffffff/camera.png"
                alt="Camera Icon"
              />
            </div>
          </div>

          <div className="profile-info">
            <h3>{user.email}</h3>
            <p>You are logged in.</p>
          </div>
        </div>

        <p className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}

export default Profile;
