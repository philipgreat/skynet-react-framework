import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'
const { Option } = Select

export default class SelectObject extends React.Component {
  state = {
    candidateValues: [],
    
  }

  executeSearch = (filterKey) =>{

    
    const {targetType, requestFunction} = this.props
    const id = "";//not used for now
    const pageNo = 1;
    const future = requestFunction(targetType, id, filterKey, pageNo)
    console.log(future);
    
    

    future.then(data=>{
      const candidateValues = data.candidates
      if(this._isMounted){
        this.setState({
        candidateValues
      })}

    })

  }	 
  handleSearch = (value) => {
    this.executeSearch(value)
  }

  componentDidMount() {
    this._isMounted = true
    this.executeSearch("")
  }
  componentWillUnmount() {
    this._isMounted = true;
  }
  componentWillReceiveProps(nextProps) {
    // Should be a controlled component.
    if(!this._isMounted){
      return 
    }
    if ('value' in nextProps) {
      const value = nextProps.value;
      this.setState({value});
    }
  }

  handleChange = (currentValue) => {
    if(!this._isMounted){
      return 
    }

    console.log("current value", currentValue)
    const value = currentValue
    
    if (!('value' in this.props)) {
      this.setState({ value });
    }

    const onChange = this.props.onChange;
    if (onChange) {
      onChange(value);
    }
  }


  render() {
    

    const {candidateValues,placeholder} = this.state
    const {value,disabled} = this.props
    if(!candidateValues){
      return (<div>正在载入候选项......</div>)
    }
    const valueOf = (value, candidateValues)=>{
      if(value&&value.length!=0){
        return value
      }
      if(candidateValues.length==1){
        return candidateValues[0].id
      }
    }
    

    return (
      <AutoComplete
              value={valueOf(value,candidateValues)}
                    dataSource={candidateValues}
                    onSearch={this.handleSearch}
                    placeholder="请输入平台"
                    disabled={disabled}
                    onChange={(value)=>this.handleChange(value)}
                  >
                  {candidateValues.map(item=>{
                return (<Option key={item.id}>{`${item.id} - ${item.name}`}</Option>);
            })}
      </AutoComplete>
    )
  }
}