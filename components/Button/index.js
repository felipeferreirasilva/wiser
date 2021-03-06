import styled from "styled-components";
import PropTypes from 'prop-types';

const Button = ({ label, type, value, onClick, primary }) => {
  return (
    primary && (
      <PrimaryButton type={type} value={value} onClick={onClick}>
        {label}
      </PrimaryButton>
    )
  );
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
};

Button.defaultProps = {
  primary: true,
}

const PrimaryButton = styled.button`
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  box-shadow: 0px 10px 25px #cf99db;
  border-radius: 8px;
  border: none;
  width: 256px;
  height: 48px;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  margin: 8px 0px;
  outline: none;
  &:active {
    background: linear-gradient(175deg, #383e71 0%, #9d25b0 99.18%);
  }
`;

export default Button;
