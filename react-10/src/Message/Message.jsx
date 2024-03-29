import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { gmAction, gnAction } from '../Redux/Message/message.action'
// '../above the directory level'
const Message = () => {
    let message = useSelector((state) => {
        return state.msg
    })
    // how to dispatch an action / redux action?
    // using useDispatch-hook
    
    let dispatch = useDispatch()
    let gmHandler = () => {
        dispatch(gmAction())
    }
    let gnHandler = () => {
        dispatch(gnAction())
    }
    return (
        <div>
            <h1>Message Component:{message}</h1>
            <button onClick={gmHandler}>G M</button>
            <button onClick={gnHandler}>G N</button>
        </div>
    )
}
export default Message