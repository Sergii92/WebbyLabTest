import styled from 'styled-components';

export const CardWrapper = styled.div`
	width: calc(100% / 3 - 30px);
	background-color: black;
	text-align: center;
	margin-bottom: 20px;
	margin-left: 30px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const CardTitle = styled.h4`
	font-size: 20px;
	color: white;
	margin: 0;
	height: 120px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
export const ButtonBlock = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const CardButton = styled.button`
	width: 150px;
	height: 30px;
`;
