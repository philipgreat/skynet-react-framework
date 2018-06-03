import { Upload, Icon, Modal } from 'antd';

export default class ImagePreview extends React.Component {
  state = {
    previewVisible: false,
    previewImage: '',
   
  };




  componentDidMount() {
    

  }
  componentWillReceiveProps(){
    

  }
  handleCancel = () => this.setState({ previewVisible: false })

  handlePreview = (event, imageLocation) => {
    console.log("preview file", imageLocation)
    this.setState({
      previewImage: imageLocation,
      previewVisible: true,
    });
  }

  handleChange = ({ fileList }) => this.setState({ fileList })

  render() {
   
    const {imageLocation,imageTitle,showTitleUnderImage} = this.props;
    const {previewVisible,previewImage} = this.state;
    //const {fileList} = this.state;
    const suffix = " | 图片预览";
    const modalTitle = imageTitle?imageTitle+suffix:suffix;
    

    return (
      <div className="clearfix" style={{textAlign:"center"}}>
        <img
          src={imageLocation}
          style={{height:80, width:80}}
          title={imageLocation}
          alt={imageLocation}
          onClick={(event)=>this.handlePreview(event,imageLocation)}
        >
           
        </img>
        {showTitleUnderImage&&(<span style={{"display": "block"}}>{imageTitle}</span>)}
        <Modal visible={previewVisible} title={modalTitle} footer={null} onCancel={this.handleCancel}>
          <img alt={imageTitle}  style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}