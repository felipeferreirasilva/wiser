import styled from "styled-components";

const _Input = ({ id, type, value, onChange, label, required }) => {
  return (
    <>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
        required={required}
      />
    </>
  );
};

const Label = styled.label`
  font-weight: 400;
  color: #383e71;
  font-size: 10px;
  text-transform: uppercase;
  display: block;
  margin-left: 8px;
`;

const Input = styled.input`
  border: 1px solid #989fdb;
  background: #faf5ff;
  border-radius: 8px;
  min-width: 256px;
  min-height: 48px;
  color: #989fdb;
  font-size: 10px;
  padding: 17px;
  box-sizing: border-box;
  display: block;
  margin: 8px 0px 16px 0px;
  &:focus {
    outline: none;
  }
  &:focus:required:invalid {
    border: 1px solid #ff377f;
  }
`;

export default _Input;
