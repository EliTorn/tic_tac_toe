import './App.css';
import React from "react";

class App extends React.Component {

    state = {
        values: [['', '', ''], ['', '', ''], ['', '', '']],
        counter: 0,

    }
    cellClick = (rowIndex, cellIndex) => {
        const currentValues = this.state.values;
        let currentCounter = this.state.counter;
        if (currentValues[rowIndex][cellIndex] === '') {
            currentValues[rowIndex][cellIndex] = this.returnCorrectChar();
            currentCounter = currentCounter + 1
            this.setState({
                values: currentValues,
                counter: currentCounter
            })
        }

    }

    Winner() {
        const board = this.state.values
        let win = false;
        // Check rows for a win
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
                win = true
                return (
                    <p>
                        winner: {board[i][0]}, positions: {[i, 0]}, {[i, 1]}, {[i, 2]}
                    </p>


                )
            }
        }

        // Check columns for a win
        for (let i = 0; i < 3; i++) {
            if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
                win = true
                return (
                    <p>
                        winner: {board[0][i]}, positions: {[[0, i], [1, i], [2, i]]}
                    </p>
                );

            }
        }

        // Check diagonals for a win
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') {
            win = true
            return (
                <p>
                    winner:{board[0][0]} , positions: {[[0, 0], [1, 1], [2, 2]]}
                </p>

            );
        }
        if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') {
            win = true
            return (
                <p>
                    winner: {board[0][2]}, positions: {[[0, 2], [1, 1], [2, 0]]} }
                </p>


            );
        }




    }


    returnCorrectChar = () => {
        const countNumber = this.state.counter;
        if (countNumber % 2 === 0) {
            return 'X'
        }
        return 'O'
    }


    render() {
        return (
            <div className="App">
                <table>
                    {
                        this.state.values.map((row, rowIndex) => {
                            return (
                                <tr>
                                    {
                                        row.map((cell, cellIndex) => {
                                            return (
                                                //

                                                <td onClick={() => {
                                                    this.cellClick(rowIndex, cellIndex)

                                                }
                                                }>
                                                    {cell}
                                                </td>


                                            )
                                        })
                                    }

                                </tr>
                            )
                        })
                    }
                </table>
                {this.Winner()}

            </div>


        );
    }
}

export default App;
