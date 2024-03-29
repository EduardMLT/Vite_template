import styled from 'styled-components';
import { globalColor } from '../../../styles/root';
import { Field, Form } from 'formik';
import thumbUp from '../../../assets/exercises/thumbUp.png';

export const Input = styled(Field)`
  border: 2px solid gray;
  &:hover {
    border: 2px solid green;
  }
`;

export const Forma = styled(Form)`
`;

export const Label = styled.label`
  text-align: left;
`;

export const ButtonSubmit = styled.button`
  width: 151px;
  height: 42px;
  border: none;
  border-radius: 12px;
  background-color: rgba(230, 83, 60, 1);
  color: rgba(239, 237, 232, 1);
  font-weight: 500;
  font-size: 16px;
  line-height: 1.125;

  @media (min-width: 768px) {
    margin-top: 53px;
    margin-left: 200px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 147px;
  height: 62px;
  color: rgba(239, 237, 232, 0.4);
  background-color: rgba(239, 237, 232, 0.2);
  border: 1px solid rgba(239, 237, 232, 0.05);
  padding: 12px 0px 0px 18px;
  border-radius: 12px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;

  @media (min-width: 768px) {
    width: 168px;
    height: 70px;
  }
`;
export const DetailsSpan = styled.span`
  color: rgba(239, 237, 232, 1);
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis;
`;

export const InfoBlock = styled.div`
  width: 302px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 24px 0px 24px 0px;

  @media (min-width: 768px) {
    width: 350px;
    margin-top: 48px;
    margin-bottom: 254px;
  }
`;

//============================================================================
export const SuccesModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 335px;
  height: 362px;
  background: #10100f;
  overflow: hidden;
  border: 1px rgba(239, 237, 232, 0.2) solid;
  text-align: center;

  @media (max-width: 335px) {
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  @media (min-width: 768px) {
    width: 430px;
    height: 428px;
    padding: 64px;
  }
`;

export const ButtonNextExercise = styled.button`
  cursor: pointer;
  display: block;
  margin: 32px auto 16px;
  width: 157px;
  height: 42px;
  background-color: ${globalColor.colorOrange};
  border-radius: 12px;
  color: ${globalColor.colorWhite};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.125;
  word-wrap: break-word;
  outline: none;
  border: transparent;

  @media (min-width: 768px) {
    height: 52px;
  }

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${globalColor.colorOrange1};
  }
`;

export const ThumbUp = styled.div`
  margin: 0 auto 3px;
  width: 123px;
  height: 97px;

  background: url(${thumbUp});
  background-repeat: no-repeat;

  @media (min-width: 768px) {
    margin-bottom: 19px;
  }
`;

export const TitleModalSucces = styled.h4`
  margin: 0 auto 16px;
  color: ${globalColor.colorWhite};
  font-size: 24px;
  font-weight: 700;
  line-height: 1.33;
  word-wrap: break-word;
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${globalColor.colorInput};
  line-height: 1.2357;
  word-wrap: break-word;
  transition: color 0.3s ease;

  > svg {
    stroke: ${globalColor.colorInput};
    width: 16px;
    height: 16px;
    transition: stroke 0.3s ease;
  }

  &:hover {
    color: ${globalColor.colorOrange1};
    > svg {
      stroke: ${globalColor.colorOrange1};
      width: 16px;
      height: 16px;
    }
  }
`;
//============================================================================
export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
    display: flex;
    width: 694px;
    height: 550px;
    gap: 16px;
  }
`;

export const GifContainer = styled.div`
  width: 270px;
  height: 226px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 48px;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`;

export const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-left: 32px;
  }
`;

export const ModalTextStyle = styled.p`
  color: ${globalColor.colorOrange};
  line-height: 1.2857;
  word-wrap: break-word;
  > span {
    color: rgba(239, 237, 232, 0.3);
  }
`;
export const ModalInfoStyle = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: #e6533c;
  margin-bottom: 24px;
`;

export const ModalBlockFirst = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
  }
`;

export const ModalBlockSecond = styled.div`
  padding: 0px 16px 0px 16px;

  @media (min-width: 768px) {
    padding: 0px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 22px;
  height: 22px;
  padding: 0;
  margin: 0;
  border: none;
  background: transparent;

  @media (min-width: 768px) {
    top: 16px;
    right: 16px;
    width: 26px;
    height: 26px;
  }

  > svg {
    stroke: ${globalColor.colorWhite};
    transition: stroke 0.3s ease;
  }

  &:hover {
    > svg {
      stroke: ${globalColor.colorOrange};
    }
  }
`;
