import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header2';
import Footer from './Footer';

const sections = [
  { title: '여행일정', url: '#' },
  { title: '게시판', url: '/board/list/' },
  { title: '마이페이지', url: '/mypage/list/' },

];



const theme = createTheme();

export default function home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Travel" sections={sections} />

      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}