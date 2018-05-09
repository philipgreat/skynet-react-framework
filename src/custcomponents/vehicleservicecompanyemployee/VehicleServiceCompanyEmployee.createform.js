import React, { Component } from 'react'
import {
  Card,
  Button,
  Form,
  Icon,
  Col,
  Row,
  DatePicker,
  TimePicker,
  Input,
  Select,
  Popover,
  Switch,
} from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar'
import ImageUpload from '../../components/ImageUpload'
import styles from './VehicleServiceCompanyEmployee.createform.less'
import { mapBackToImageValues, mapFromImageValues } from '../../axios/tools'
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  employeeName: '员工姓名',
  profileImage: '证件照片',
  companyName: '商户名称',
  mobileNumber: '手机号码',
  gender: '性别',
  availableState: '工作状态',
  innocentEvidenceImage: '无犯罪记录证明',
  identityCardNumber: '身份证号码',
  company: '商户',
  inspectionStation: '检测站',
  availableMoveCar: '是否可以移车',
  availableInspectionCar: '是否可以检车',
  availableRepairCar: '是否可以修车',
  qualification: '资格认定',
  serving: '服务状态',
  termination: '服务终止',
  currentStatus: '当前状态',
}

const testValues = {
  employeeName: '冯琪惠',
  companyName: 'vehicle_service_company',
  mobileNumber: '13812345678',
  gender: '男',
  availableState: '正常',
  identityCardNumber: '510124199012010000',
  availableMoveCar: '1',
  availableInspectionCar: '1',
  availableRepairCar: '1',
  companyId: 'VSC000001',
  inspectionStationId: 'IS000001',
}

const imageURLPrefix = '//localhost:2090'

const imageKeys = ['profileImage', 'innocentEvidenceImage']

class VehicleServiceCompanyEmployeeCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    setFieldsValue(testValues)
  }
  shouldComponentUpdate() {
    return true
  }
  handlePreview = file => {
    console.log('preview file', file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  handleChange = (event, source) => {
    console.log('get file list from change in update change:', source)

    const { fileList } = event
    const { convertedImagesValues } = this.state

    convertedImagesValues[source] = fileList
    this.setState({ convertedImagesValues })
    console.log('/get file list from change in update change:', source)
  }

  render() {
    const { form, dispatch, submitting } = this.props
    const { convertedImagesValues } = this.state

    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form
    const submitCreateForm = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }

        const { owner } = this.props
        const imagesValues = mapBackToImageValues(convertedImagesValues)

        const parameters = { ...values, ...imagesValues }
        dispatch({
          type: `${owner.type}/addVehicleServiceCompanyEmployee`,
          payload: {
            id: owner.id,
            type: 'vehicleServiceCompanyEmployee',
            parameters,
          },
        })
      })
    }
    const submitCreateFormAndContinue = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }

        const { owner } = this.props
        const imagesValues = mapBackToImageValues(convertedImagesValues)

        const parameters = { ...values, ...imagesValues }
        dispatch({
          type: `${owner.type}/addVehicleServiceCompanyEmployee`,
          payload: {
            id: owner.id,
            type: 'vehicleServiceCompanyEmployee',
            parameters,
            continueNext: true,
          },
        })
      })
    }

    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'vehicleServiceCompanyEmployee' },
      })
    }
    const errors = getFieldsError()
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length
      if (!errors || errorCount === 0) {
        return null
      }
      // eslint-disable-next-line no-unused-vars
      const scrollToField = fieldKey => {
        const labelNode = document.querySelector('label[for="${fieldKey}"]')
        if (labelNode) {
          labelNode.scrollIntoView(true)
        }
      }
      const errorList = Object.keys(errors).map(key => {
        if (!errors[key]) {
          return null
        }
        return (
          <li
            key={key}
            className={styles.errorListItem}
            onClick={() => scrollToField(key)}
          >
            <Icon type="cross-circle-o" className={styles.errorIcon} />
            <div className={styles.errorMessage}>{errors[key][0]}</div>
            <div className={styles.errorField}>{fieldLabels[key]}</div>
          </li>
        )
      })
      return (
        <span className={styles.errorIcon}>
          <Popover
            title="表单校验信息"
            content={errorList}
            overlayClassName={styles.errorPopover}
            trigger="click"
            getPopupContainer={trigger => trigger.parentNode}
          >
            <Icon type="exclamation-circle" />
          </Popover>
          {errorCount}
        </span>
      )
    }
    return (
      <PageHeaderLayout
        title="新建一个商户员工"
        content="新建一个商户员工"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.employeeName}>
                  {getFieldDecorator('employeeName', {
                    rules: [{ required: true, message: '请输入员工姓名' }],
                  })(<Input placeholder="请输入请输入员工姓名string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.companyName}>
                  {getFieldDecorator('companyName', {
                    rules: [{ required: true, message: '请输入商户名称' }],
                  })(<Input placeholder="请输入请输入商户名称string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.mobileNumber}>
                  {getFieldDecorator('mobileNumber', {
                    rules: [{ required: true, message: '请输入手机号码' }],
                  })(
                    <Input placeholder="请输入请输入手机号码string_china_mobile_phone" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.gender}>
                  {getFieldDecorator('gender', {
                    rules: [{ required: true, message: '请输入性别' }],
                  })(<Input placeholder="请输入请输入性别string_gender" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableState}>
                  {getFieldDecorator('availableState', {
                    rules: [{ required: true, message: '请输入工作状态' }],
                  })(<Input placeholder="请输入请输入工作状态string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.identityCardNumber}>
                  {getFieldDecorator('identityCardNumber', {
                    rules: [{ required: true, message: '请输入身份证号码' }],
                  })(<Input placeholder="请输入请输入身份证号码string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableMoveCar}>
                  {getFieldDecorator('availableMoveCar', {
                    rules: [{ required: true, message: '请输入是否可以移车' }],
                  })(<Input placeholder="请输入请输入是否可以移车bool" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableInspectionCar}>
                  {getFieldDecorator('availableInspectionCar', {
                    rules: [{ required: true, message: '请输入是否可以检车' }],
                  })(<Input placeholder="请输入请输入是否可以检车bool" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableRepairCar}>
                  {getFieldDecorator('availableRepairCar', {
                    rules: [{ required: true, message: '请输入是否可以修车' }],
                  })(<Input placeholder="请输入请输入是否可以修车bool" />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <Card title="设置" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableMoveCar}>
                  {getFieldDecorator('availableMoveCar', {
                    rules: [{ required: true, message: '请输入是否可以移车' }],
                    valuePropName: 'checked',
                  })(
                    <Switch
                      checkedChildren="是"
                      unCheckedChildren="否"
                      placeholder="请输入是否可以移车bool"
                    />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableInspectionCar}>
                  {getFieldDecorator('availableInspectionCar', {
                    rules: [{ required: true, message: '请输入是否可以检车' }],
                    valuePropName: 'checked',
                  })(
                    <Switch
                      checkedChildren="是"
                      unCheckedChildren="否"
                      placeholder="请输入是否可以检车bool"
                    />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableRepairCar}>
                  {getFieldDecorator('availableRepairCar', {
                    rules: [{ required: true, message: '请输入是否可以修车' }],
                    valuePropName: 'checked',
                  })(
                    <Switch
                      checkedChildren="是"
                      unCheckedChildren="否"
                      placeholder="请输入是否可以修车bool"
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <Card title="附件" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="证件照片"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'profileImage')
                  }
                  fileList={convertedImagesValues.profileImage}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="无犯罪记录证明"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'innocentEvidenceImage')
                  }
                  fileList={convertedImagesValues.innocentEvidenceImage}
                />
              </Col>
            </Row>
          </Form>
        </Card>

        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.company}>
                  {getFieldDecorator('companyId', {
                    rules: [{ required: true, message: '请输入商户' }],
                  })(<Input placeholder="请输入请输入商户" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionStation}>
                  {getFieldDecorator('inspectionStationId', {
                    rules: [{ required: false, message: '请输入检测站' }],
                  })(<Input placeholder="请输入请输入检测站" />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <FooterToolbar>
          {getErrorInfo()}
          <Button
            type="primary"
            onClick={submitCreateForm}
            loading={submitting}
            htmlType="submit"
          >
            提交
          </Button>
          <Button
            type="primary"
            onClick={submitCreateFormAndContinue}
            loading={submitting}
          >
            提交并建下一个
          </Button>
          <Button type="danger" onClick={goback} loading={submitting}>
            放弃
          </Button>
        </FooterToolbar>
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
}))(Form.create()(VehicleServiceCompanyEmployeeCreateForm))
