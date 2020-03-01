import React from "react";
import { Input, Select, Pagination, Form } from "antd";
import CloudRaceItem from "components/CloudRaceItem/index";
import styles from "./list.less";

const Search = Input.Search

class CloudRaceList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  handlePageChange(page, pageSize) {
    const { onPageChange } = this.props;
    onPageChange &&
      onPageChange({
        pageNo: page,
        pageSize
      });
  }

  submit = (e) => {
    e.preventDefault();
    this.formChange()
  }

  onSearch = () => {
    this.formChange()
  }

  formChange = () => {
    const { form, onFormSubmit } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        onFormSubmit && onFormSubmit(values);
      }
    });
  }

  render() {
    const { data, form, onItemClick } = this.props;
    const { list } = data;
    const { getFieldDecorator } = form;
    return (
      <section className={styles["cloud-race-list"]}>
        <div className={styles["filters"]}>
          <Form onSubmit={this.submit}>
            <Form.Item
            >
              {getFieldDecorator("keyWords", {
              })(<Search allowClear={true} onSearch={this.onSearch} className={styles["list__search"]} placeholder="请输入族库名称"/>)}
            </Form.Item>
          </Form>
        </div>
        <div className={styles["list-wrap"]}>
          <ul className={styles["list"]}>
            {(list || []).map((item, index) => {
              return (
                <li key={item.id}>
                  <CloudRaceItem item={item} onClick={onItemClick} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles["pager"]}>
          <Pagination
            simple
            defaultCurrent={1}
            current={data.pageNo}
            total={data.total}
            onChange={this.handlePageChange}
          />
        </div>
      </section>
    );
  }
}

export default Form.create({
  mapPropsToFields(props) {
    const { cloudRaceListSearchForm } = props;
    return {
      keyWords: Form.createFormField({
        value: cloudRaceListSearchForm.keyWords || undefined
      })
    };
  }
})(CloudRaceList);
