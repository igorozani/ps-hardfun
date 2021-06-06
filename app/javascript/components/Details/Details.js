import React from "react"
import SingleElement from '../SingleElement/SingleElement'
import Table from 'react-bootstrap/Table';
import './Details.css';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element:this.props.element,
      colorMap: this.props.colorMap
    }
  }

  goToTable = () => {
    window.location.replace("/table")
  }

  render () {
    const { element, colorMap } = this.state
    return (
      <>
        <div style={{textAlign:"center"}}>
          <button className="button" onClick={() => this.goToTable()}>Voltar para a tabela</button>
        </div>
        <SingleElement 
            element={element} 
            colorMap={colorMap} 
            width={"100px"} 
            height={"100px"}
            marginRight={"auto"}
            marginLeft={"auto"}
            fontSize={15}
        />
        <div style={{ 
                maxWidth:"600px", 
                marginRight:"auto", 
                marginLeft:"auto",
                wordBreak:"break-word",
                marginTop:"20px"
            }}>
            <Table striped bordered variant="dark">
                <tbody>
                    {
                        Object.keys(element).map((detail, index) => {
                            console.log(typeof Object.values(element)[index])
                            return <tr>
                                <td style={{width:"256px"}}>{detail}</td>
                                <td>
                                    {
                                        typeof Object.values(element)[index] === "object" && Object.values(element)[index] !== null
                                        ?
                                        Object.values(element)[index].join(", ")
                                        :
                                        Object.values(element)[index]
                                    }
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
      </>
    );
  }
}

export default Details
