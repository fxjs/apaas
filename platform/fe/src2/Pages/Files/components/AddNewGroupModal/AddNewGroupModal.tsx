import React, { FC } from "react";
import { Formik } from "formik";
import axios from "axios";
import { message } from "antd";

import { useModalConetxt } from "@/context";
import { Modal, Form, Input, Button } from "@/components";
import { ModalInjectedProps } from "@/types";

import css from "./AddNewGroupModal.less";

interface AddNewGroupModalProps extends ModalInjectedProps {
  userId: number;
}

interface AddGroupValues {
  name: string;
}

const AddNewGroupModal: FC<AddNewGroupModalProps> = ({
  userId,
  hideModal
}) => {
  return (
    <Modal title="建立新的协作组">
      <Formik<AddGroupValues>
        initialValues={{ name: "" }}
        validate={values => {
          let errors = {} as AddGroupValues;
          if (!values.name.trim()) {
            errors.name = "协作组名称不允许为空";
          }
          return errors;
        }}
        onSubmit={async (values) => {
          const { name } = values;
          const response = (await axios.post("/paas/api/userGroup/create", {
            userId,
            name
          })).data;

          if (response.code === 1) {
            console.log("刷新菜单栏协作组列表")
            hideModal();
            message.success("建立协作组成功");
          } else {
            message.error(response.message);
          }
        }}  
      >
        {({
          values,
          dirty,
          isValid,
          isSubmitting,
          submitForm,
          handleChange
        }) => {
          return (
            <>
              <Modal.Body>
                <Form.Field label="名称" className={css.formField}>
                  <Input
                    name="name"
                    placeholder="请输入协作组名称"
                    value={values.name}
                    onChange={handleChange}
                    error={!isValid}
                  />
                </Form.Field>
              </Modal.Body>
              <Modal.Footer>
                <Button disabled={isSubmitting} onClick={hideModal}>
                  取 消
                </Button>
                <Button
                  type="primary"
                  onClick={submitForm}
                  disabled={!dirty || !isValid}
                  loading={isSubmitting}
                >
                  确 认
                </Button>
              </Modal.Footer>
            </>
          )
        }}
      </Formik>
    </Modal>
  )
}

export default AddNewGroupModal;
