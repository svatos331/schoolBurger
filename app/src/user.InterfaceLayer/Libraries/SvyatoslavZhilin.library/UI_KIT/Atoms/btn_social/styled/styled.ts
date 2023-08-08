import styled from "styled-components";

export const svg = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
	width: 36px;
	height: 36px;
	background: none;
	border: none;
	margin: 0;
	padding: 0;
	svg {
		transition: all 0.8s ease;
		cursor: pointer;
		fill: #f86310;
		&:hover {
			fill: #ffab08;
		}
	}
`;
