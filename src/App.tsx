import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Posts } from './pages/Posts/Posts';
import { Creation } from './pages/Creation/Creation';
import { GlobalStyle } from './styles';

export const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/creation" element={<Creation />} />
        <Route path="*" element={<div>404. Not Found</div>} />
      </Routes>
    </>
  );
};
