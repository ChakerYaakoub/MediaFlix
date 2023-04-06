import React , { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from "./useFech";
import ActorMediaCarousel from './ActorMediaCarousel';
import './PersonById.css';

const GetPersonById = () => {
  const { _id } = useParams();
  const { data: participant, error, isPending } = useFetch(`http://localhost:3000/Participants/${_id}`);

  const [showMoreText, setShowMoreText] = useState(false);

  return (
    <>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {participant && (
        <div className='maindivPerson'>
          <div className='imgLocation'>
            <img src={`http://localhost:3000/${participant.img}`} alt='Participant' />
          </div>
          <div className='mainParINfo'>
            <p>{participant.firstName}</p>
            <p>{participant.lastName}</p>
            <span>({participant.kind.slice(0, 1).toUpperCase()}{participant.kind.slice(1)})</span>
          </div>
          {showMoreText ? (
            <div className='ParINfo'>
              <p> {participant.info}<button onClick={() => setShowMoreText(false)}>Show less</button></p>
            </div>
          ) : (
            <div className='ParINfo'>
              <p>{participant.info?.substring(0, 550) + '...'}
                <button onClick={() => setShowMoreText(true)}>Show more</button>
              </p>
            </div>
          )}
          <div style={{width:"100%"}}>
            <ActorMediaCarousel actorId={_id} />
          </div>
        </div>
      )}
    </>
  );
};

export default GetPersonById;