//We need a initState to pass in the first time around
const initState = {
  bikes: [
    {
      id: "1",
      bikeName: "some bike",
      description: "blah blah blah",
      price: 100,
      photoURL: "test.com"
    },
    {
      id: "2",
      bikeName: "Trek",
      description: "blah blach blah",
      price: 200,
      photoURL: "test.com"
    }
  ]
};

const bikeReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_BIKE":
      console.log("created bike", action.bike);
      return state;
    case "CREATE_BIKE_ERROR":
      console.log("create bike error", action.err);
      return state;

    case "DELETE_BIKE":
      return state;

    case "DELETE_BIKE_ERROR":
      return state; //not sure about this. might want to return the error

    case "EDIT_BIKE":
      return state;

    case "EDIT_BIKE_ERROR":
      return state; //not sure about this. might want to return the error

    default:
      return state;
  }
};

export default bikeReducer;
