import React from "react";
import { Button, Header, MediaTable } from "../components";
import { useStateContext } from "../contexts/ContextProvider";
import { useState } from "react";
import Modal from "./Participants/createPreModal";
import useFetch from "./Participants/useFech";
import ParList from "./Participants/ParList";


const Casts = () => {
  const [openModal, setOpenModal] = useState(false);
  const { currentColor } = useStateContext();
  const { error, isPending, data: Participants } = useFetch('http://localhost:3000/Participants')

  return (
    <div>
      <div className="m-1 md:m-2 mt-14 p-1 md:p-4  bg-white rounded-3xl ">
        <Header category="MEDIA TOOLS" title="Films Tools" />

        <div className="text-right m-5 mr-10 ">
          <Button
            color="white"
            bgColor={currentColor}
            text="Add A New Participants"
            borderRadius="10px"
            size="xl"
            onClick={() => {
              setOpenModal(openModal === false ? true : false);
            }}
          />
          <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
          />
        </div>
      </div>

      <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      {/* blogs={blogs} 3am eb3at lprops list */}
      { Participants && <ParList Participants={Participants} /> }
      
    </div>
    </div>
  );
};

export default Casts;
