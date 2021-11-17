import React from "react";
import { FaUserAlt, FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { useForm } from "react-hook-form";

import { FormStyle, ButtonSubmit } from "./styles";
import { Input } from "../../ui/Input";
import { Row } from "../../layout";

const FormSubmit = () => {
  const { register, handleSubmit } = useForm({});
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)} id="form">
      <Row className="mx-4 my-2 row">
        <Input
          placeholder="Họ và tên"
          name="name"
          type="text"
          required
          ref={register}
        />
        <FaUserAlt
          className="absolute text-yellow-1"
          size={20}
          style={{ right: "8px" }}
        />
      </Row>
      <Row className="mx-4 my-2 row">
        <Input
          placeholder="Email"
          name="email"
          type="email"
          required
          ref={register}
        />
        <MdEmail
          className="absolute right-0 text-yellow-1"
          size={20}
          style={{ right: "8px" }}
        />
      </Row>
      <Row className="mx-4 my-2 row">
        <Input
          placeholder="Số điện thoại"
          name="phone"
          type="tel"
          minlength="9"
          maxlength="14"
          pattern="[0-9]*"
          required
          ref={register}
        />
        <FaPhone
          className="absolute right-0 text-yellow-1"
          size={20}
          style={{ right: "8px" }}
        />
      </Row>
      <Row className="mx-4 my-2 row">
        <Input
          placeholder="Địa chỉ"
          name="address"
          type="text"
          required
          ref={register}
        />
        <MdLocationOn
          className="absolute right-0 text-yellow-1"
          size={20}
          style={{ right: "8px" }}
        />
      </Row>
      <ButtonSubmit type="submit" className="mx-4 my-2">
        <div className="btn-front">Gửi ngay</div>
        <div className="btn-back flex items-center justify-center">
          <FiSend className="mr-1" />
          Gửi ngay
        </div>
      </ButtonSubmit>
    </FormStyle>
  );
};

export default FormSubmit;
