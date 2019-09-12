import React, { Component } from "react";
import EditBikeCard from "./EditBikeCard";

class EditBikeList extends Component {
  render() {
    const { bikes } = this.props;
    return (
      <div className="bike-list section">
        <div className="row">
          {bikes &&
            bikes.map(bike => {
              return (
                <div className="col m6">
                  <EditBikeCard key={bike.id} bike={bike} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default EditBikeList;
