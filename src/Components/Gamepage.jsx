import React, { useEffect, useState } from 'react'

function Gamepage() {

    const [box, setBox] = useState(["_", "_", "_", "_", "_", "_", "_", "_", "_"]);
    const [isX, setIsX] = useState("X");
    const [player, setPlayer] = useState(1);
    const [player1, setPlayer1] = useState([]);
    const [player2, setPlayer2] = useState([]);
    const [winner, setWinner] = useState("");
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const btnHandler = (index) => {
        const tempArray = [...box];
        if (isX == "X" && tempArray[index] == "_") {
            tempArray[index] = isX;
            let plyTempArray = [...player1, index];
            setPlayer1(plyTempArray);
            setIsX("o");
            setPlayer(2)
        }
        else if (tempArray[index] == "_" && isX == "o") {
            tempArray[index] = isX;
            let plyTempArray = [...player2, index];
            setPlayer2(plyTempArray);
            setIsX("X");
            setPlayer(1);
        }
        setBox(tempArray);
    }

    const resetHandler = () => {
        setBox(["_", "_", "_", "_", "_", "_", "_", "_", "_"]);
        setPlayer1([]);
        setPlayer2([]);
        setIsX("X");
        setPlayer(1);
        setWinner("");
    }

    useEffect(() => {
        // console.log(player1);
        // console.log(player2);
        for (let i = 0; i < winningCombinations.length; i++) {
            const [x, y, z] = winningCombinations[i];
            if (player1.includes(x) && player1.includes(y) && player1.includes(z)) {
                setWinner(1);
            }
            if (player2.includes(x) && player2.includes(y) && player2.includes(z)) {
                setWinner(2);
            }
        }
    }, [player1, player2])



    return (
        <div className='container d-flex flex-column vh-80 vw-100 justify-content-center align-items-center'>
            {winner == "" &&
                <div className='display-6 m-5'>Player {player}'s turn</div>
            }
            <></>
            {winner != "" &&
                <>
                    <div className='display-6 fw-bolder'> Player {winner} won the Match</div>
                </>
            }
            <></>
            {winner == "" &&
                <div className="border border-5 rounded p-3 border-dark bg-dark">
                    <div>
                        <button className='btn btn-lg btn-success m-1' onClick={() => btnHandler(0)}>{box[0]}</button>
                        <button className='btn btn-lg btn-success m-1' onClick={() => btnHandler(1)}>{box[1]}</button>
                        <button className='btn btn-lg btn-success m-1' onClick={() => btnHandler(2)}>{box[2]}</button>
                    </div>
                    <div className=''>
                        <button className='btn btn-lg btn-success m-1' onClick={() => btnHandler(3)}>{box[3]}</button>
                        <button className='btn btn-lg btn-success m-1' onClick={() => btnHandler(4)}>{box[4]}</button>
                        <button className='btn btn-lg btn-success m-1' onClick={() => btnHandler(5)}>{box[5]}</button>
                    </div>
                    <div className=''>
                        <button className='btn btn-lg btn-success m-1' onClick={() => btnHandler(6)}>{box[6]}</button>
                        <button className='btn btn-lg btn-success m-1' onClick={() => btnHandler(7)}>{box[7]}</button>
                        <button className='btn btn-lg btn-success m-1' onClick={() => btnHandler(8)}>{box[8]}</button>
                    </div>
                </div>

            }
            <button className='btn btn-danger mt-5' onClick={() => resetHandler()}>Reset</button>
        </div>
    )
}

export default Gamepage