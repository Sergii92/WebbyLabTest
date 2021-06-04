import styled from 'styled-components';

export const HomeContainer = styled.div`
	width: 70%;
	max-width: 1400px;
	margin: 0px;
	margin: 0 auto;
	min-height: 100vh;
	background: #a4adbf;
`;

export const Header = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 10px 40px;
`;

export const Main = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const Aside = styled.div`
	width: 30%;
	height: 100%;
`;

export const Section = styled.div`
	width: 70%;
	padding: 50px;
	display: flex;
	justify-content: space-around;
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
