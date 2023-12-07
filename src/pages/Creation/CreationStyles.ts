import styled from 'styled-components'
import { container } from '../../styles/mixins'

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
