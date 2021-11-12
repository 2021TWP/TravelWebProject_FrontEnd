import React, { Component } from 'react';
import {observer} from 'mobx-react'
import BoardStore from '../Stores/BoardStore';
import BoardDetailView from '../Views/BoardDetailView';
import CommentInputContainer from './CommentInputContainer';
import CommentListContainer from './CommentListContainer';
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


class BoardDetailContainer extends Component {
    boardStore = BoardStore;
    render() {
        const {board, boardRemove, boardLike,  boardModify , boardSetProps, goBoardList, goUpdateBoard, goDetailSchedule } = this.boardStore;
        return (
            <div>
                <BoardDetailView 
                board={board}
                boardModify = {boardModify}
                boardRemove={boardRemove}
                boardLike={boardLike} 
                boardSetProps={boardSetProps}
                goUpdateBoard={goUpdateBoard}
                goDetailSchedule={goDetailSchedule}/>

                        <br/><br/>
                <CommentInputContainer/>
                <CommentListContainer /> <br/><br/><br/>
                <CustomButton onClick={() => goBoardList()}>목록으로</CustomButton>

            </div>
        );
    }
}

export default observer(BoardDetailContainer);