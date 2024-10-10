import axios from "axios";
import {
  ADD_STUDENT,
  DELETE_STUDENT,
  GET_STUDENT,
  UPDATE_STUDENT,
} from "./ActionType";

export const AddStudent = (student) => async (dispatch) => {
  try {
    let students = await axios.post("http://localhost:3000/students", student);
    dispatch({
      type: ADD_STUDENT,
      payload: students.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/students/${id}`);
    dispatch({
      type: DELETE_STUDENT,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateStudent = (id, student) => async (dispatch) => {
  try {
    let updatedStudent = await axios.patch(
      `http://localhost:3000/students/${id}`,
      student
    );
    dispatch({
      type: UPDATE_STUDENT,
      payload: updatedStudent.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getStudents = () => async (dispatch) => {
  try {
    let students = await axios.get("http://localhost:3000/students");
    console.log(students)
    dispatch({
      type: GET_STUDENT,
      payload: students.data,
    });
  } catch (error) {
    console.log(error);
  }
};
