import React, { useContext } from "react";
import { Context } from "../context/Context";
import { BiUndo, BiRedo } from "react-icons/bi";

const Form = () => {
  const {
    handleFormSubmit,
    setUserName,
    setPhoneNumber,
    setGender,
    userName,
    phoneNumber,
    gender,
    isUpdate,
    handleUndoClick,
    userData,
    handleRedoClick
  } = useContext(Context);
  return (
    <div className="bg-gray-400 w-[20rem] h-[24rem] rounded">
      <div className="flex flex-col justify-center items-center">
        <p className="mt-4 text-2xl border-b-2">Add Contact</p>
        <form
          className="flex flex-col justify-center items-center my-10 space-y-5"
          onSubmit={handleFormSubmit}
        >
          <div>
            <input
              className="px-5 py-2 rounded outline-none focus:bg-gray-200"
              placeholder="Enter username"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              required
            />
          </div>
          <div>
            <input
              className="px-5 py-2 rounded outline-none focus:bg-gray-200"
              placeholder="Enter phonenumber"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              required
            />
          </div>
          <div className="w-full">
            <select
              className="px-5 py-2 w-full rounded outline-none focus:bg-gray-200"
              onChange={(e) => setGender(e.target.value)}
              value={gender ? gender : 0}
              required
            >
              <option hidden disabled value="0">
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-xl hover:bg-blue-300 duration-300 active:scale-90">
            {isUpdate ? "Update User" : "Add User"}
          </button>
          <div className="flex gap-4">
            <button
              className="flex justify-center items-center bg-blue-500 text-white w-[6rem] h-[2.3rem] p-1 rounded-xl active:scale-90"
              onClick={() => handleUndoClick(userData[userData.length - 1])}
            >
              <BiUndo className="text-2xl" /> Undo
            </button>
            <button
              className="flex justify-center items-center bg-blue-500 text-white w-[6rem] h-[2.3rem] p-1 rounded-xl active:scale-90"
              onClick={handleRedoClick}
            >
              <BiRedo className="text-2xl" /> Redo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
