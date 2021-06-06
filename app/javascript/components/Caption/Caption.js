import React from "react"

class Caption extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            captions:this.props.colorMap
        }
    }
  render () {
      const { captions } = this.state
    return (
      <dl className="caption-table" style={{
          display:"grid", 
          gridAutoFlow:"column",
          width:"400px",
          marginLeft:"auto",
          marginRight:"510px"
        }}>
            {
                Object.values(captions).map((caption,index) => {
                    return (
                        <dd 
                            key={index}
                            style={{
                                gridRowEnd:"span 5", 
                                writingMode:"vertical-rl", 
                                width:"35px", 
                                margin:"0",
                                paddingTop:"4px",
                                backgroundColor:caption,
                                border:"1px solid white"
                            }}
                        >
                            {Object.keys(captions)[index]}
                        </dd>
                    )
                })
            }
      </dl>
    );
  }
}

export default Caption
