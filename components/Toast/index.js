import PropTypes from 'prop-types';
import styled from "styled-components";

const _Toast = ({ message }) => {
  return <Toast>{message}</Toast>;
};

_Toast.propTypes = {
  message: PropTypes.string,
}

const Toast = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 40px;
  right: 0px;
  width: 300px;
  height: 60px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: #130525bf;
  z-index: 3;
  animation: fadein 1s;
  color: #fff;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  padding-left: 20px;
  white-space: nowrap;
  overflow: hidden;

  @keyframes fadein {
    from {
      opacity: 0;
      width: 0px;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export default _Toast;
