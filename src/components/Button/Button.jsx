import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    border: none;
    border-radius: 0.125rem;
    width: 170px;
    height: 38px;
    background: #efefef;
    padding: 0 15px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 18px;
    font-weight: normal;
    line-height: 1;
    color: #444444;
    cursor: pointer;

    &:hover {
        background: #d3d3d3;
    }

    &:disabled,
    &.disabled {
        background: #efefef;
        color: #888;
        cursor: default;

        &:hover {
            background: #efefef;
            color: #888;
        }
    }
`;

export const PrimaryButton = styled(Button)`
  background: darkblue;
  color: #ffffff;

  &:hover {
    background: #014067;
  }
`;

export default Button;
