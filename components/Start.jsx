import React from "react";
import './start.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function Start(){
    const choices = ["Rock.png", "Paper.png", "Scissors.png"];
    const[userChoice, setUserChoice] = useState(null);
    const[computerChoice, setComputerChoice] = useState(null);
    const[result, setResult] = useState(null);

    function handleClick(value){
        setUserChoice(value)
        const random = Math.floor(Math.random() * 3)
        setComputerChoice(choices[random])
        checkResult()
    }

    useEffect(() => {
        checkResult()
    }, [computerChoice, userChoice])

    function checkResult(){
        if(userChoice == "Rock.png"){
            if(computerChoice == "Scissors.png"){
                setResult("You Win")
            } else if(computerChoice == "Paper.png"){
                setResult("You Lose")
            } else{
                setResult("It's a Draw")
            }
        } else if(userChoice == "Paper.png"){
            if(computerChoice == "Rock.png"){
                setResult("You Win")
            } else if(computerChoice == "Scissors.png"){
                setResult("You Lose")
            } else{
                setResult("It's a Draw")
            }
        } else{
            if(computerChoice == "Paper.png"){
                setResult("You Win")
            } else if(computerChoice == "Rock.png"){
                setResult("You Lose")
            } else{
                setResult("It's a Draw")
            }
        }
   
    }
    return(
        <div className="flex flex-col items-center w-full justify-around">
            <h1 className="uppercase text-3xl font-extrabold mt-4">Let's Play</h1>
            <div className="flex items-center mt-8">
                <div className="flex flex-col items-center">
                    <h1 className="comp text-xl">Computer</h1>
                    <img src={`/images/${computerChoice}`} alt="" className="object-cover w-96 mt-4"/>
                </div>
                <h1 className="font-extrabold text-3xl mt-16">VS</h1>
                <div className="flex flex-col items-center">
                    <h1 className="comp text-xl">You</h1>
                    <img src={`/images/${userChoice}`} alt="" className="w-96 mt-4"/>
                </div>
               
            </div>
            
            <p className="uppercase text-xl font-extrabold">Pick an Option</p>
            <p className="text-xl font-extrabold">{result}</p>
            <div className="flex mt-4">
                {choices.map(
                    (choice, index) => {
                        return(
                            <button key={index} onClick={
                                () => {
                                    handleClick(choice)
                                }
                                } type="button" className="bg-purp rounded-full w-20 h-20 mr-8">
                                <img src={`/images/${choice}`} alt="" />
                            </button>
                        )
                    }
                )}
            </div>

        </div>
    )
}

export default Start