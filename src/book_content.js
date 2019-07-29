import React from "react";
import LoremIpsum from './loremipsum';

class BookContent extends React.Component {
  constructor(props) {
    super(props);
    ;
  }

  render() {
    return (
      <div className="">
        <LoremIpsum/>
      </div>
    )
  }
}

export default BookContent;