import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  
  border-radius: 4px;

  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: yellow;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    transition: all .4s ease-in-out;
    z-index: 10;
    transform: scale(1.2);
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
