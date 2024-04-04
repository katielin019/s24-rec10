import React from 'react';
import { Cell } from './game';

interface Props {
  cell: Cell
}

class BoardCell extends React.Component<Props> {
  render(): React.ReactNode {
    const playable = this.props.cell.playable ? 'playable' : '';
    return (
      <div className={`cell ${playable}`}>
        <p>{this.props.cell.text}</p>
        <div className="stacks">
          <div className="rectangle1"></div>
        </div>
      </div>
    )
  }
}

export default BoardCell;