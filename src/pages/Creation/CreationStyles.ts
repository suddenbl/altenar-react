import styled from 'styled-components'
import { container } from '../../styles/mixins'
import { DisplayBackgroundTypes } from './Creation'

export const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  padding-top: 1px;
  /* background-color: $grey-300; */
  background-color: #e0e0e0;
`

export const Section = styled.section`
  ${container}
`

export const SectionContainer = styled.div`
  width: 37%;
  overflow-y: scroll;
  height: 65vh;
  padding: 0 2px;
`

export const CreationInput = styled.input`
  width: 100%;
  padding: 10px 5px;
`

export const SectionBlock = styled.div`
  display: flex;
  width: 95%;
  flex-direction: column;
  /* gap: 10px; */
  margin-bottom: 20px;
`

export const SectionBlockFolder = styled.div``

export const SectionBlockTitle = styled.h4`
  color: #000000;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
`

export const SectionBlockDescription = styled.p`
  /* color: $text-secondary; */
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 23px;
  /* font-size: $font-size-normal; */
  font-size: 14px;
  line-height: 20px;
`

export const FormSpan = styled.span`
  position: relative;
  display: inline-block;
  width: 100%;
`

export const FormInput = styled.input`
  width: 100%;
  padding: 17px 11px;
  border: none;
  /* border: 1px solid $grey-300; */
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  &:hover {
    outline: 1px solid #2196f3;
  }
`

export const DownloadLabel = styled.label`
  position: relative;
  /* border: 1px dashed $text-disabled; */
  border: 1px dashed #e0e0e0;
  padding: 35px 37px 30px;
  display: flex;
  gap: 16px;
`

export const DownloadInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  outline: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 100;
`

export const DownloadTextFirst = styled.p`
  font-size: 14px;
  line-height: 20px;
`

export const DownloadTextSecond = styled.span`
  /* color: $primary-main; */
  color: #2196f3;
`

export const DownloadTextThird = styled.p`
  font-size: 12px;
  /* color: $text-secondary; */
  color: rgba(0, 0, 0, 54);
`

export const ColorInput = styled.input`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 48px;
  background-color: transparent;

  &::-webkit-color-swatch {
    border-radius: 48px;
  }

  &::-moz-color-swatch {
    border-radius: 48px;
  }

  &:active {
    outline: 1px solid #c4c4c4;
  }
`

export const SwitchBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 32px;
`

export const SwitchBlockLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 23px;
`

export const SwitchBlockText = styled.span`
  color: #000;
  font-size: 12px;
  letter-spacing: 0.4px;
`

export const SwitchBlockTextSecond = styled.span`
  color: rgba(0, 0, 0, 0.38);
  font-size: 12px;
  letter-spacing: 0.4px;
`

export const SwitchBlockInput = styled.input`
  display: none;
`

export const SwitchBlockInputSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: $grey-900; */
  background-color: #212121;
  border-radius: 33px;
  cursor: pointer;

  &::before {
    position: absolute;
    content: '';
    height: 17px;
    width: 17px;
    left: 3px;
    bottom: 3px;
    /* background-color: $white; */
    background-color: white;
    border-radius: 17px;
    transition: transform 0.3s ease-in-out;
  }
`

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 17px;
`

export const FormLabelSpan = styled(FormSpan)`
  img {
    position: absolute;
    top: 16px;
    left: 10px;
  }
`

export const FormInputWithSVG = styled(FormInput)`
  padding-left: 40px;
`

export const SectionBlockLast = styled(SectionBlock)`
  gap: 16px;
  align-items: center;
`

export const LastButton = styled.button`
  width: 100%;
  padding: 8px 22px;
  /* background-color: $primary-main; */
  background-color: #2196f3;
  /* color: $white; */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.3px;
  cursor: pointer;
  transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0b79d0;
  }
`

export const LastDescription = styled.p`
  margin-bottom: 30px;
  max-width: 80%;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.4px;
  /* color: $text-secondary; */
  color: rgba(0, 0, 0, 0.54);
  text-align: center;
`
export const Preview = styled.section`
  position: fixed;
  top: 16px;
  right: 17px;
  width: 59%;
  max-width: 1080px;
  /* background-color: $grey-900; */
  background-color: #212121;
  border-radius: 14px;
`

export const PreviewContainer = styled.div`
  ${container}
  display: flex;
  max-width: 355px;
  height: 92.7vh;
  align-items: center;
`

export const PreviewContent = styled.div<DisplayBackgroundTypes>`
  width: 100%;
  height: 73.4%;
  background: ${(props) =>
    props.color.length > 0
      ? `linear-gradient(180deg, rgba(0, 0, 0, 0) 51%, ${props.color} 80.4%, ${props.color} 100%)`
      : 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #9197A3 22.4%, #9197A3 100%);'};
  border-radius: 40px 40px 48px 48px;
`

export const ContentDisplay = styled.div<DisplayBackgroundTypes>`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 19px;
  border: 13px solid #e4e4e4;
  border-radius: 47px;
  background-image: ${(props) =>
    props.background
      ? `url(${props.background})`
      : 'url(../../assets/images/photo.svg)'};
  /* background-size: cover; */
  background-size: 100% 55%;
  background-repeat: no-repeat;
`

export const DisplayTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const DisplayTopTime = styled.p<DisplayBackgroundTypes>`
  /* color: $white; */
  color: ${(props) => (props.readable ? 'white' : 'black')};
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transition: color 0.3s ease-in-out;
`
export const DisplayTopIndicators = styled.div<DisplayBackgroundTypes>`
  display: flex;
  gap: 5px;

  img {
    transition: filter 0.3s ease-in-out;
    filter: ${(props) =>
      props.readable
        ? 'invert(100%) sepia(0%) saturate(0%) hue-rotate(240deg) brightness(102%) contrast(105%)'
        : 'invert(0%) sepia(91%) saturate(7462%) hue-rotate(27deg) brightness(95%) contrast(109%)'};
  }
`

export const DisplayBottom = styled.div`
  width: 100%;
  border-radius: 0px 0px 40px 40px;
`

export const DisplayBottomTitle = styled.p<DisplayBackgroundTypes>`
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 500;
  line-height: 32px;
  color: ${(props) => (props.readable ? 'white' : 'black')};
  transition: color 0.3s ease-in-out;
`

export const DisplayBottomDescription = styled.p<DisplayBackgroundTypes>`
  display: inline-block;
  width: 100%;
  height: 184px;
  /* font-size: $font-size-normal; */
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${(props) => (props.readable ? 'white' : 'black')};
  transition: color 0.3s ease-in-out;
`
