import React from "react"
import "./SingleElement.css"

class SingleElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element:this.props.element,
      colorMap: this.props.colorMap
    }
  }

  render () {
    const { element, colorMap } = this.state
    const { height, width, marginRight, marginLeft, fontSize } = this.props
    return (
      <>
        {
          element
            ?
          <div style={{
            backgroundColor:colorMap[element.category], 
            border:"1px solid white",
            height: height ? height : "100%",   
            width: width ? width : "",
            marginRight: marginRight ? marginRight : "",
            marginLeft: marginLeft ? marginLeft : ""   
          }}>
            <div style={{
              fontSize: fontSize ? `${fontSize}` : "10px", 
              fontWeight:"bold"
            }}>
              {element.number}
            </div>
            <div style={{
              fontSize:fontSize ? `${fontSize + 3}` : "12px", 
              fontWeight:"bold"
            }}>
              {element.symbol}
            </div>
            <div style={{
              fontSize:fontSize ? `${fontSize}` : "10px"
            }}>
              {element.name}
            </div>
            <div style={{
              fontSize:fontSize ? `${fontSize}` : "10px"
            }}>
              {element.atomic_mass}
            </div>
          </div>
            :
          <>
          </>
        }
      </>
    );
  }
}

export default SingleElement
