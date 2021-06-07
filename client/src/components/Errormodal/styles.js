import styled from 'styled-components';

export const ErrorWrapper = styled.div`
	width: 500px;
	height: 400px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 100;
	&:after {
		content: "";
		z-index: -1;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
	}
`;
export const ModalContent = styled.div`
	background: white;
	z-index: 100;
	height: 100%;
	padding: 30px;
	text-align: center;
`;

export const ErrorMessage = styled.p`
	color: red;
	font-size: 20px;
	text-aline: center;
	font-weight: bold;
`;

export const CloseButton = styled.div`
	width: 30px;
	height: 30px;
	position: absolute;
	cursor: pointer;
	right: 10px;
	top: 10px;
	&:before {
		content: "";
		display: block;
		width: 20px;
		height: 2px;
		background: black;
		position: absolute;
		top: 50%;
		transform: translateY(-50%) rotate(45deg);
	}
	&:after {
		content: "";
		display: block;
		width: 20px;
		height: 2px;
		background: black;
		position: absolute;
		top: 50%;
		transform: translateY(-50%) rotate(-45deg);
	}
`;
