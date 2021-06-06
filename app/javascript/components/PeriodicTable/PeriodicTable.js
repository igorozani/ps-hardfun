import React from "react"
import "./PeriodicTable.css"
import SingleElement from "../SingleElement/SingleElement"
import Caption from "../Caption/Caption"

class PeriodicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements:JSON.parse(this.props.elements),
      colorMap: {
        "noble gas": "#9900cc",
        "alkaline earth metal": "#cccc00",
        "diatomic nonmetal": "#006600",
        "polyatomic nonmetal":"#33CC33",
        "alkali metal": "#b36b00",
        "transition metal": "#cc0000",
        "post-transition metal": "#0066cc",
        "lanthanide": "#660033",
        "metalloid": "#009999",
        "actinide":"#33ccff",
        "unknown":""
      }
    }
  }

  showDetails = (element) => {
    window.location.replace(`/table/${element.name.toLowerCase(0)}`)
  }
  

  render () {
    const { elements, colorMap } = this.state
    return (
      <>
        <Caption colorMap={colorMap}/>
        <div className="periodic-table" style={{marginTop:"80px"}}>
          {Object.values(elements).map((element,index) => {
            if(index !== 0) {
              return (
                <div
                  className="single-element" 
                  key={index}
                  style={{
                    gridColumn: element.xpos,
                    gridRow: element.ypos
                  }}
                  onClick={() => this.showDetails(element)}
                >
                  <SingleElement element={element} colorMap={colorMap} />
                </div>
              )
            }
          })}
        </div>
      </>
    );
  }
}

export default PeriodicTable
