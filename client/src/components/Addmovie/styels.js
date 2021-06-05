import styled from 'styled-components';
import { Form, Field } from 'formik';

export const AddForm = styled(Form)``;
export const FormInput = styled(Field)`
	height: 30px;
	width: 100%;
	padding-left: 20px;
	
`;

export const InputWrapper = styled.div`
	margin-bottom: 30px;
	position: relative;
`;

export const ErrorMessage = styled.span`
	color: red;
	font-size: 12px;
	line-height: 1;
	position: absolute;
	top: -12px;
	left: 0;
`;
