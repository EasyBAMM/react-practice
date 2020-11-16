import React, { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { scrollHeight, clientHeight } = this.box;
    this.box.scrollTop = scrollHeight - clientHeight;
  };

  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };
    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white, black)",
    };

    return (
      <div
        style={style}
        ref={(ref) => {
          this.box = ref;
        }}
      >
        <div style={innerStyle}></div>
      </div>
    );
  }
}

{
  /* 
    부모 컴포넌트에서 자식 컴포넌트 메서드 사용
    <div>
    <ScrollBox ref={(ref)=>{this.scrollBox=ref}}/>
    <button onClick={()=>{this.scrollBox.scrollToBottom()}}>맨 밑으로</button>
    </div> 
*/
}

export default ScrollBox;
