const UserProfileCard = ({ img, userName, age, location, hobbies }) => {
  return (
    <div>
     
     
      <div className="card" style={{ width: 400 }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name : {userName}</h5>
          <h5 className="card-title">Age : {age}</h5>
          <h5 className="card-title">Hobbies : {...hobbies}</h5>
          <h5 className="card-title">Location : {location}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="button">
          <button className="btn btn-success"> Follow</button>
          <button className="btn btn-danger">Unfollow</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfileCard;
