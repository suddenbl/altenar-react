import { FC, useState } from 'react';
import {
  DownloadLabel,
  DownloadInput,
  DownloadTextFirst,
  DownloadTextSecond,
  DownloadTextThird,
  ErrorSpan,
  DownloadModalWindow,
  ModalImg,
  ModalTextBlock,
  ModalTextFirst,
  ModalTextSecond,
  ModalCancelButton,
  ProgressBarContainer,
} from './DownloadComponentStyles';
import { useFormStore } from '../../zustand/formDataStore';
import downloadButton from '../../assets/images/download.svg';
import cancelButton from '../../assets/images/cancel.svg';

interface DownloadComponentProps {
  name: string;
}

export const DownloadComponent: FC<DownloadComponentProps> = ({ name }) => {
  const values = useFormStore();

  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [widthImg, setWidthImg] = useState('');
  const [heightImg, setHeightImg] = useState('');

  const [progress, setProgress] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const allowedMinSize = 1242;

    if (file) {
      const reader = new FileReader();

      reader.onprogress = (event: ProgressEvent) => {
        const percentageLoad = (event.loaded / event.total) * 100;
        setProgress(percentageLoad);
      };
      reader.onloadend = () => {
        const image = new Image();
        image.src = reader.result as string;

        image.onload = () => {
          const { width, height } = image;

          setWidthImg(width.toString());
          setHeightImg(height.toString());

          if (width < allowedMinSize || height < allowedMinSize) {
            setIsError(true);
            setIsSuccess(false);
            setErrorMsg('Слишком маленький размер изображения');
          } else {
            values.setImage(reader.result as string);
            setIsError(false);
            setIsSuccess(true);
            setErrorMsg('');
          }
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const handleModalCancel = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    values.setImage('');
    setIsSuccess(false);
    setProgress(0);
  };

  return (
    <>
      <DownloadLabel $error={isError}>
        <DownloadInput
          type="file"
          accept="image/*"
          name={name}
          onChange={(e) => handleFileChange(e)}
        />
        <img src={downloadButton} alt="Download" />
        <div>
          <DownloadTextFirst>
            Перетащите файл или
            <DownloadTextSecond> загрузите с компьютера</DownloadTextSecond>
          </DownloadTextFirst>
          <DownloadTextThird>Соотношение 1:1. Минимальный размер 1242х1242 px</DownloadTextThird>
        </div>
        {progress > 0 && progress < 100 && (
          <ProgressBarContainer>
            <progress value={progress} max={100}></progress>
          </ProgressBarContainer>
        )}
        {isError && <ErrorSpan>{errorMsg}</ErrorSpan>}
        {isSuccess && (
          <DownloadModalWindow>
            <ModalImg src={values.image} />
            <ModalTextBlock>
              <ModalTextFirst>Файл</ModalTextFirst>
              <ModalTextSecond>
                Размер: {widthImg}x{heightImg}
              </ModalTextSecond>
            </ModalTextBlock>
            <ModalCancelButton onClick={(e) => handleModalCancel(e)}>
              <img src={cancelButton} alt="Cancel" />
            </ModalCancelButton>
          </DownloadModalWindow>
        )}
      </DownloadLabel>
    </>
  );
};
