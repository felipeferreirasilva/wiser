import styled from "styled-components";
import { MdClose as Icon } from "react-icons/md";

const _Input = ({ id, type, value, onChange, label, error, required }) => {
  return (
    <div>
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="flex align-items-center mb-10">
        <Input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e)}
          required={required}
          style={error && { border: "1px solid #ff377f" }}
        />
        {error && <Icon style={{ marginLeft: "-30px", color: "#ff377f" }} />}
      </div>
      {error && <Error>{error}</Error>}
    </div>
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
  margin: 8px 0px 8px 0px;
  padding-right: 40px;
  &:focus {
    outline: none;
  }
`;

const Error = styled.span`
  color: #ff377f;
  position: relative;
  top: -12px;
  left: 10px;
  font-size: 10px;
`;

export default _Input;
