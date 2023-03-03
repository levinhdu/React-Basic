import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import HobbyList from "../../components/Home/HobbyList";
import { addNewHobby, setActiveHobby } from "../../actions/hobby";

PageRedux.propTypes = {};

function randomNumber() {
  return 1000 + Math.trunc(Math.random() * 9000);
}

function PageRedux(props) {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);

  const dispatch = useDispatch();

  const handleAddHobbyClick = () => {
    const newId = randomNumber();
    const newHobby = {
      id: newId,
      title: `Hobby ${newId}`,
    };

    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  };
  return (
    <div className="page-redux">
      <h1>Redux Hook</h1>
      <button onClick={handleAddHobbyClick}>Ramdom Hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  );
}

export default PageRedux;
