import React, { useEffect, useState } from 'react'
import './FollowersCard.css'
import { useSelector } from 'react-redux';
import { getAllUser } from '../../API/Userrequest';
import FollowersModel from '../Followersmodel/Followersmodel';
import User from '../../User/User';
const FollowersCard = ({location}) => {
  const [modalOpened, setModalOpened] = useState(false);
  const [persons, setPersons] = useState([]);
  const { user } = useSelector((state) => state.authReducer.authData);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPersons(data);
    };
    fetchPersons();
  }, []);

  return (
    <div className='FollowersCard'>
      <h3>Followers</h3>
      {persons.map((_person, _id) => {
        return (
          <div className="FollowersCard">
            <h3>People you may know</h3>
            {persons.map((person, id) => {
              if (person._id !== user._id) return <User person={person} key={id} />;
            })}
            {!location ? (
              <span onClick={() => setModalOpened(true)}>Show more</span>
            ) : (
              ""
            )}

            <FollowersModel
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
            />
          </div>
        )
      })}
    </div>
  )
}

export default FollowersCard
