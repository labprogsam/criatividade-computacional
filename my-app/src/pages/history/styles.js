import styled from 'styled-components';

export const StyledMainContent = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledTextBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: #D9D9D9;
  padding: 20px 30px;
  box-sizing: border-box;
  z-index: 2;
  position: absolute;
  bottom: 0;

  p {
    height: 70%;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px solid white;
  background-color: #00A3FF;
  padding: 10px 20px;
  margin-left: 15px;
  cursor: pointer;
  border-radius: 5px;
  align-self: flex-end;
  margin-left: auto;
`;