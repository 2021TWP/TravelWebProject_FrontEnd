import * as React from 'react';
import { Component } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';


const CustomButtonRoot = styled('span')(`
  background-color: #007fff;
  padding: 15px 20px;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #0059b2;
  }

  &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`);

function CustomButton(props) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
  }

function updateBoard(id) {
  window.location.href = `/board/update/${id}`;
}


class BoardDetailView extends Component {
  detailSchedule(id){
    console.log(id);
    window.location.href =`/schedules/detail/${id}`;
  }

    render() {
        const {board, boardRemove, boardSetProps } = this.props;
        let board_date = this.props.board.date;
        let category_id = this.props.board.category_id
        return (
            <div> 
              <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <Box sx={{ m: 2 }}>
                  <Typography gutterBottom variant="h5" component="div">
                  {board.title}
                  </Typography>

                  <Typography gutterBottom variant="h6" component="div">
                  {function(){
                    if (category_id === 1) return ("자유게시판");
                    if (category_id === 2) return ("여행 일지");
                    if (category_id === 3) return ("번개모임");
                    }
                  } 
                  자유게시판
                  </Typography>

                  <Typography variant="body1">
                  {board.user_id} 
                  </Typography>

                  <Typography color="text.secondary" variant="body2">
                  {moment(board_date).format(('YYYY. MM. DD. HH:mm'))} | 조회수 {board.hit}
                  </Typography>
                </Box>

                <Divider variant="middle" />

                <Box sx={{ m: 2 }}>
                    <Typography variant="body1">
                    {/* {board.imgUrl} */}
                    imagesss 
                    </Typography>


                    <Typography variant="body1">
                    <br/>
                    {board.board_content}
                    </Typography>

                    <Typography variant="body1">
                    <Button size="small" onClick={()=>this.detailSchedule(board.schedule_id)}>스케줄보기</Button>
                    schedule_idddd
                    </Typography>
                </Box>
              </Box>

                {
                (function() {
                  if (category_id === 1) return ("자유게시판");
                  if (category_id === 2) return ("여행 일지");
                  if (category_id === 3) return ("번개모임");
                })
                } 

                {/* <button>좋아요 {board.like} </button>  &nbsp;&nbsp; */}
                {/* onClick={()=>boardLike()} */}

              <div>
              {/* {function Greeting(props) {
                const isLoggedIn = props.isLoggedIn;
                if (isLoggedIn) {
                  return <UserGreeting />;
                }
                return <GuestGreeting />;
                }
              } */}
                <Stack spacing={2} direction="row">
                  <CustomButton onClick={() => updateBoard(board.id)} boardSetProps={boardSetProps()} board = {board}>수정</CustomButton>
                  <CustomButton onClick={()=>boardRemove()}>삭제</CustomButton>
                </Stack>
              </div>
            </div>
        );
    }
}

export default BoardDetailView;