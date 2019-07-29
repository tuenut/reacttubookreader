import React from "react";

class ContentsItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a className="btn btn-outline-dark text-left pl-4 border-0 rounded-0 d-flex justify-content-between"
         href={"#" + this.props.chapterId}>
        <span>{this.props.chapterName}</span>
        <span/>
      </a>
    )
  }
}

class Contents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {content_collapse_id: this.props.contentId};
  }

  render() {
    return (
      <div className="btn-group-vertical mt-1 mb-3 pl-2 d-flex rounded-0" role="group">

        {this.props.children}
      </div>
    )
  }
}

class ContentsPane extends React.Component {
  constructor(props) {
    super(props);

    this.chapters = [
      {id: 'chapter1', name: 'chapter 1'},
      {id: 'chapter2', name: 'chapter 2'},
      {id: 'chapter3', name: 'chapter 3'},
      {id: 'chapter4', name: 'chapter 4'},
      {id: 'chapter5', name: 'chapter 5'},
    ];
  }

  render() {
    return (
      <div className="col-12 col-md-3 col-xl-2 border-right d-md-block d-none "
           style={{position: 'sticky', height: "calc(100vh - 4rem)", top: '4rem', zIndex: 1000, order: 0}}>
        <nav className="">
          <button className="btn btn-outline-primary font-weight-bold text-left pl-4 border-0 rounded-0 w-100">
            Оглавление
          </button>
          {
            this.chapters.map( item => (
              <ContentsItem chapterId={item.id} chapterName={item.name}/>
            ))
          }
        </nav>
      </div>
    )
  }
}

export default ContentsPane;