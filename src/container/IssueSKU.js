import React, { Component } from 'react'
import { Accordion,Button,Modal,WingBlank,Toast} from 'antd-mobile'
import validate from 'validate.js';

export default class IssueSKU extends Component {
  constructor (props) {
    super(props)
    this.deleteTask = this.deleteTask.bind(this)
    this.state = {
        sku:{
          unit:'JIN'
        },
        errorMsg:null,
        modal:false
    }
  }

  deleteTask () {
    this.props.deleteTask(this.props.id)
  }

 onClose = key => () => {
    this.setState({
      modal: false,
    });
  }

  handleChange = (e) => {
      this.state.sku[e.target.name] = e.target.value;
      this.setState({
        modal:false
      })
  }

  _validate = () => {
       var constraints = {
           "sku":{ presence: {message:'^sku is required'}},
           "origin":{ presence: {message:'^origin is required'}},
           "specName":{ presence: {message:'^specName is required'}},
           "number":{ presence: {message:'^number is required'}},
           "weight":{presence: {message:'^weight is required'}},
         }
       var sku = this.state.sku;
       var attributes = {
           "sku":sku.sku,
           "origin":sku.origin,
           "specName":sku.specName,
           "number":sku.number,
           "weight":sku.weight,
       };
       var errors = validate(attributes,constraints);
       if (errors) {
           var result = "",attr;
           for(attr in errors) {
               result = result + "<li><span>"+errors[attr]+"</span></li>";
           }
           result = result + "";
           return (<div style={{textAlign:'left'}} dangerouslySetInnerHTML={{__html:result}}></div>)
       }
       var newSku = {};
       newSku.sku = sku.sku;
       newSku.origin = sku.origin;
       newSku.specName = sku.specName;
       newSku.number = sku.number;
       newSku.weight = sku.weight;
       newSku.unit = sku.unit;
       this.newSku = newSku;
       return false;
   }


   onSubmit = () => {
     var errorMsg = this._validate();
     if (errorMsg) {
         this.setState({
           modal:true,
           errorMsg:errorMsg
         })
     } else {
         this.props.toggleComplete(this.props.id,this.newSku)
         Toast.success('Save success !!!', 1);
         console.log(this.newSku)
     }
   }

  render () {
    return(
    <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Accordion id={this.props.id}  defaultActiveKey="0" className="my-accordion" onChange={this.onChange}>
          <Accordion.Panel header={`sku`}>
             
              <div className="am-list-item am-input-item am-list-item-middle">
                <label className="am-list-line" htmlFor="borring">
                    <span className="am-input-label am-input-label-5">SKU</span>
                    <div className="am-input-control">
                        <input id="borring" className="form-input" type="text" name="sku"
                           value={this.state.sku.sku||''} 
                           placeholder="sku is required" 
                           onChange={this.handleChange}/>
                    </div>
                </label>
              </div>
              <div className="am-list-item am-input-item am-list-item-middle">
                <label className="am-list-line" htmlFor="borring">
                    <span className="am-input-label am-input-label-5">Origin</span>
                    <div className="am-input-control">
                        <input id="borring" className="form-input" type="text" name="origin"
                           value={this.state.sku.origin||''} 
                           placeholder="origin is required" 
                           onChange={this.handleChange}/>
                    </div>
                </label>
              </div>
              <div className="am-list-item am-input-item am-list-item-middle">
                <label className="am-list-line" htmlFor="borring">
                    <span className="am-input-label am-input-label-5">SpecName</span>
                    <div className="am-input-control">
                        <input id="borring" className="form-input" type="text" name="specName"
                           value={this.state.sku.specName||''} 
                           placeholder="specName is required" 
                           onChange={this.handleChange}/>
                    </div>
                </label>
              </div>
              <div className="am-list-item am-input-item am-list-item-middle">
                <label className="am-list-line" htmlFor="borring">
                    <span className="am-input-label am-input-label-5">Number Of Pieces</span>
                    <div className="am-input-control">
                        <input id="borring" className="form-input" type="text" name="number"
                           value={this.state.sku.number||''} 
                           placeholder="number is required" 
                           onChange={this.handleChange}/>
                    </div>
                </label>
              </div>
              <div className="am-list-item am-input-item am-list-item-middle">
                <label className="am-list-line" htmlFor="borring">
                    <span className="am-input-label am-input-label-5">Unit Weight</span>
                    <div className="am-input-control">
                        <input id="borring" className="form-input" type="text" name="weight"
                           value={this.state.sku.weight||''} 
                           placeholder="weight is required" 
                           onChange={this.handleChange}/>
                    </div>
                    <div className="am-input-control">
                        <select className="forss" name="unit" style={{textAlign:'center'}} value={this.state.sku.unit||''}
                            onChange={this.handleChange}>
                        <option value='JIN'>&nbsp;&nbsp;JIN</option>
                        <option value='KG'>&nbsp;&nbsp;KG</option>
                        <option value='TON'>&nbsp;&nbsp;Ton</option>
                    </select>
                    </div>
                </label>
              </div>
              <WingBlank style={{textAlign:'right'}}>
                <Button type="primary" inline size="small" onClick={this.onSubmit} >
                  <i className="fa fa-plus" ></i>&nbsp;&nbsp;SAVE
                </Button>
                <Button type="warning" inline size="small"  onClick={this.deleteTask} >
                  <i className="fa fa-remove" ></i>&nbsp;&nbsp;delate sku
                </Button>
              </WingBlank>
              </Accordion.Panel>              
        </Accordion>
        
        

        <Modal
          visible={this.state.modal}
          transparent
          maskClosable={false}
          onClose={this.onClose('modal')}
          title="Title"
          footer={[{ text: 'Ok', onPress: () => { this.onClose('modal')(); } }]}
        >
          <div style={{ height: 100, overflow: 'scroll' }}>
            {
             this.state.errorMsg
            }
          </div>
        </Modal>
      </div>
    )
    
  }
}
