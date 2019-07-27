import React from "react";

class ContentsItem extends React.Component {
  constructor(props) {
    super(props);

    this.markdown = {
      item: {classes: "btn btn-outline-dark text-left pl-4 border-0 rounded-0 d-flex justify-content-between"},
    }
  }

  render() {
    return (
      <a className={this.markdown.item.classes} href={"#" + this.props.chapterId}>
        <span>{this.props.chapterPage}</span>
        <span>{this.props.chapterName}</span>
      </a>
    )
  }
}

class Contents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {content_collapse_id: this.props.contentId};

    this.markdown = {
      collapse: {classes: "collapse show", id: this.state.content_collapse_id},
      items_group: {classes: "btn-group-vertical mt-1 mb-3 pl-2 d-flex rounded-0"},
    }
  }

  render() {
    return (
      <div className={this.markdown.collapse.classes} id={this.markdown.collapse.id}>
        <div className={this.markdown.items_group.classes} role="group">{this.props.children}</div>
      </div>
    )
  }
}

class ContentsPane extends React.Component {
  constructor(props) {
    super(props);

    this.markdown = {
      outer_container: {
        classes: "justify-content-start lh-100 d-none d-md-block border-right",
        styles: {position: 'fixed', height: '100%', width: '144pt', boxShadow: '2px 0px 2px #cccccc'}
      },
      inner_container: {
        classes: "d-flex flex-column  d-xs-none"
      },
      button: {
        classes: "btn btn-outline-primary dropdown-toggle font-weight-bold text-left pl-4 border-0 " +
        "border-bottom border-info rounded-0 w-100",

      }
    };

    let chapters = [
      {id: 'chapter1', name: 'chapter 1'},
      {id: 'chapter2', name: 'chapter 2'},
      {id: 'chapter3', name: 'chapter 3'},
      {id: 'chapter4', name: 'chapter 4'},
      {id: 'chapter5', name: 'chapter 5'}
    ];
    this.content_items = [];
    for (let i = 0; i < chapters.length; i++) {
      this.content_items.push(<ContentsItem chapterId={chapters[i]['id']} chapterName={chapters[i]['name']}
                                            chapterPage={i}/>)
    }

  }

  render() {
    return (
      <div className={this.markdown.outer_container.classes} style={this.markdown.outer_container.styles}>
        <div className={this.markdown.inner_container.classes}>
          <button className={this.markdown.button.classes} data-toggle="collapse"
                  data-target="#contentCollapse" aria-expanded="false" aria-controls="contentCollapse">
            Оглавление
          </button>
          <Contents contentId={"contentCollapse"} children={this.content_items}/>
        </div>
      </div>
    )
  }
}

export default ContentsPane;