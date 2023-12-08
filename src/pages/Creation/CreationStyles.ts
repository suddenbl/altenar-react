import styled from 'styled-components'
import { container } from '../../styles/mixins'

export const SectionDivider = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 10px;
  padding-top: 1px;
  /* background-color: $grey-300; */
  background-color: #e0e0e0;
`

export const Section = styled.section`
  ${container}
`

export const CreationInput = styled.input`
  width: 100%;
  padding: 10px 5px;
`

export const SectionBlock = styled.div`
  display: flex;
  width: 35%;
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

export const SectionForm = styled.form`
  display: flex;
  margin-bottom: 35px;
  flex-direction: column;
  gap: 18px;
`

export const FormSpan = styled.span`
  position: relative;
  display: inline-block;
  width: 100%;
`

export const FormInput = styled.input`
  width: 94%;
  padding: 17px 11px;
  border: none;
  /* border: 1px solid $grey-300; */
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  &:hover {
    outline: 1px solid #2196f3;
  }
`

export const FormTextArea = styled.textarea`
  padding: 17px 11px;
  border: none;
  /* border: 1px solid $grey-300; */
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  resize: none;
  &:hover {
    outline: 1px solid #2196f3;
  }
`

export const FormInputDescription = styled.span`
  position: absolute;
  top: 20px;
  right: 17px;
  color: rgba(0, 0, 0, 0.54);
  /* color: $text-secondary; */
  /* outline: 1px solid $primary-main; */
`

export const DownloadLabel = styled.label`
  position: relative;
  border: 1px dashed $text-disabled;
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
  margin-bottom: 32px;
  border: none;
  border-radius: 48px;
  background-color: transparent;

  &:active {
    outline: 1px solid #c4c4c4;
  }
`
