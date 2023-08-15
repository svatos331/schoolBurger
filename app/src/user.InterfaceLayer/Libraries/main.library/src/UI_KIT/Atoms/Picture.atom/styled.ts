import styled from "styled-components";

export const Picture = styled.picture<{radius?: string}>`
  display: inline-flex;
  border-radius: ${ props => props.radius };
  overflow: hidden;
`;

export const Source = styled.source``;

export const Image = styled.img`
  display: flex;
  object-fit: cover;
`;
