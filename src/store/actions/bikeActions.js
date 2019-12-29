//With Thunk, we can return a function instead of an action object (which we do normally)
export const createBike = bike => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //Make async call to database
    const firestore = getFirestore();
    firestore
      .collection("bikes")
      .add({
        ...bike,
        photoURL: bike.photoURL,
        createdAt: new Date(),
        sold: 0
      })
      .then(() => {
        dispatch({ type: "CREATE_BIKE", bike: bike });
      })
      .catch(err => {
        dispatch({ type: "CREATE_BIKE_ERROR", err: err });
      });
  };
};

export const editBike = (bike, bikeId) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("bikes")
      .doc(bikeId)
      .update({
        ...bike,
        photoURL: bike.photoURL,
        createdAt: new Date() //Might want to keep original cration date (delete this)
      })
      .then(() => {
        dispatch({ type: "EDIT_BIKE" });
      })
      .catch(err => {
        dispatch({ type: "EDIT_BIKE_ERROR", err: err });
      });
  };
};

export const deleteBike = bikeId => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    let bike_collection = firestore.collection("bikes");
    bike_collection
      .doc(bikeId)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_BIKE" });
      })
      .catch(err => {
        dispatch({ type: "DELETE_BIKE_ERROR", err: err });
      });
  };
};

export const sellBike = (bike, bikeId) => {
  return (dispatch, getState, { getFirestore }) => {
    bike.sold = 1;

    const firestore = getFirestore();
    firestore
      .collection("bikes")
      .doc(bikeId)
      .update({
        ...bike,
        sold: bike.sold
      })
      .then(() => {
        dispatch({ type: "SELL_BIKE" });
      })
      .catch(err => {
        dispatch({ type: "SELL_BIKE_ERROR", err: err });
      });
  };
};
