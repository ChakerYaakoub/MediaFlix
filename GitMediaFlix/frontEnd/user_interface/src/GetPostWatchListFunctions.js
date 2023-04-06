import axios from "./PostUseFetch";
import { useState, useRef, useContext, useEffect } from "react";

import { OpenSignUpContext } from "./UseContext";
export const PostWatchList = async (myHeartIcon, callback) => {
  try {
    const postWatchList = await axios.post(
      "/watchList",
      {
        watchlist_id: myHeartIcon,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    if (callback && typeof callback === "function") {
      callback();
    }
  } catch (err) {
    console.log(err);
  }
};
export const GetWatchList = async (callback) => {
  //   const { setgetWatchListIdsData } = useContext(OpenSignUpContext);
  try {
    const getWatchList = await axios.get("/watchList", {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
    // console.log(getWatchList.data);
    callback(getWatchList.data);
  } catch (err) {
    console.log(err);
  }
};

export const AddWatchListUserToAnArray = (data) => {
  const arrIdWatchList = [];
  if (data !== []) {
    data.forEach(function (li) {
      arrIdWatchList.push(li._id);
    });
  }
  localStorage.setItem("watchList", JSON.stringify(arrIdWatchList));
};
