import styled from 'styled-components';

export const HomeContainer = styled.div`
	width: 70%;
	max-width: 1400px;
	margin: 0px;
	margin: 0 auto;
	min-height: 100vh;
	background: white;
`;

export const Header = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 10px 40px;
	background: black;
`;
export const Logo = styled.a`
	font-size: 20px;
	font-weight: bold;
	color: white;
	text-decoration: none;
	line-height: 40px;
`;

export const Main = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const Aside = styled.div`
	width: 30%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const UploadForm = styled.form`
	background: black;
	padding: 20px 40px;
	color: white;
	margin: 30px 0;
`;
export const Label = styled.label``;

export const UploadInput = styled.input`
	outline: none;
	margin-top: 10px;
`;
export const UploadButton = styled.button`
	width: 150px;
	height: 30px;
`;

export const Section = styled.div`
	width: 70%;
	padding-top: 30px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	height: 100%;
`;

export const LoadingWrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 10;
	&:before {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100vw;
		height: 100vh;
		transform: translate(-50%, -50%);
		z-index: -1;
		background: rgba(0, 0, 0, 0.6);
	}
	> div > div {
		background: white;
	}
`;

export const ButtonBlock = styled.div`
	display: flex;
	justify-content: space-between;
	background: black;
	padding: 20px 40px;
	color: white;
`;

export const SubmitBlock = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 30px;
`;
