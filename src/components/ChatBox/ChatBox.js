import React, { useState, useEffect, useRef } from "react";

import makeStyles from "@mui/styles/makeStyles";
import {
    Button,
    Paper,
    TextareaAutosize,
    TextField, 
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';

import BubbleChat from "../BubbleChat/BubbleChat";
import * as SERVICE from "./ChatBoxService";

import { styles } from "./ChatBox.style";

const messageList = [
    {
        "content": "Craig & Debbie Waldron prefer to follow the bucket strategy in their investment approach. They are willing to accept the risk in the account they wish to pass along to heirs and would like to maintain a mid-term time horizon for their balanced account and income, thus a more conservative approach in their capital preservation account. Acct#1950 - SC20, Acct#1951 - NMA500, and Acct1952 - SMA20.",
        "date": "2021-10-25T22:11:07.748057Z",
        "created_by": "Jonathan",
    },
    {
        "content": "Talk to Doug",
        "date": "2021-10-29T15:53:11.542368Z",
        "created_by": "Dylan",
    },
    {
        "content": "Craig and Debbie Waldron are moderately conservative to balanced in their investment tolerance. They are pulling some income from their portfolio and will plan on passing on the rest to their heirs. With their current health and time horizon they are looking at no major financial obligations in the short-term. They are willing to accept the minor volatility of a balanced allocation. SB1000\n\nPLEASE DO NOT APPROVE UNTIL I'VE CONFIRMED WITH TEAM",
        "date": "2021-10-29T17:59:04.225183Z",
        "created_by": "Jonathan",
    }
]

const ChatBox = (props) => {

    const { name, callback, messages } = props;

    const [msgList, setMsgList] = useState(null);
    const [displayMsg, setDisplayMsg] = useState(null);
    const [message, setMessage] = useState("");
    const [taggedUsers, setTaggedUsers] = useState(null);
    const [filterMessage, setFilterMessage] = useState("");
    const [isFiltering, setIsFiltering] = useState(false);
    const [toggleMsgsWindow, setToggleMsgsWindow] = useState(true);
    const [isTyping, setIsTyping] = useState(true);

    const classes = makeStyles(styles())();

    useEffect(() => {
        if(messageList){
            setMsgList(messageList);
        }
    }, [messages]);

    useEffect(() => {
        if(filterMessage.length > 0 && displayMsg){
            setDisplayMsg((prevState) => {
                let searchData = prevState.length > 0 
                    ?   prevState 
                    :   JSON.parse(JSON.stringify(msgList))
                let newState = SERVICE.filterMessagesByText(searchData, filterMessage);
                return newState
            })
        }
        else setDisplayMsg(msgList);
    }, [msgList, filterMessage])


    const submitMessage = () => {
        let newMsg = {
            "created_by": "Moctar", 
            "content": message,
            "tagged_users": taggedUsers
        }
        callback(newMsg);
        setMessage("");
    }

    const resetFilter = () => {
        setFilterMessage("");
        setIsFiltering(false)
    }


    const handleChange = e => {
        const { name, value } = e.currentTarget;
        if(name === "new-message") setMessage(value);
        if(name === "filter-text") {
            setFilterMessage(value);
            setIsFiltering(value.length > 0 ? true : false);
        }
    }

    const handleClick = e => {
        const { name, value } = e.currentTarget;
        if(name === "send-msg") submitMessage();
        if(name === "toggle-msg-window") {
            setToggleMsgsWindow(!toggleMsgsWindow);
        }
    }

    const renderFilterBar = () => {
        return (
            <div className={classes.filterBar}>
                <TextField
                    name="filter-text"
                    label="Search messages"
                    variant="outlined"
                    size="small"
                    className={classes.searchInput}
                    onChange={handleChange}
                />
            </div>
        )
    }

    const renderMessageRow = (msg, i) => {
        return (
            <div key={i} className={classes.msgRow}>
                <PersonIcon className={classes.personIcon}/>
                <div className={classes.msgInfo}>
                    <div className={classes.row} style={{margin: "0 0 .3em 0"}}>
                        <span className={classes.userName}>
                            <b>{msg["created_by"]}</b>
                        </span>
                        <span className={classes.date}>
                            {msg["date"]}
                        </span>
                    </div>
                    {msg["content"].split(`\n`).map((p, i) => {
                        return(
                            <p key={i} style={{margin: 0}}>
                                {p}
                            </p>
                        )
                    })}
                </div>
            </div>
        )
    }

    const renderMessagesView = () => {
        return (
            <div className={classes.msgView}>
                {displayMsg.map((msg, i) => {
                    return renderMessageRow(msg, i)
                })}
            </div>
        )
    }

    const renderMessageBox = () => {
        return (
            <Paper variant="outlined" className={classes.msgBox}>
                <TextareaAutosize
                    name="new-message"
                    minRows={3}
                    placeholder={name}
                    className={classes.textarea}
                    value={message}
                    onChange={handleChange}
                />
                <div className={classes.msgBoxUtilsRow}>
                    <span 
                        name="send-msg"
                        className={message.length === 0 
                            ? classes.sendBtnDisable
                            : classes.sendBtn
                        }
                        disabled={message.length === 0 ? true : false}
                        onClick={handleClick}
                    >
                        <SendIcon />
                    </span>
                </div>
            </Paper>
        )
    }

    const renderMsgWindow = () => {
        if(toggleMsgsWindow === true){
                if(displayMsg){
                    return (
                        <Paper className={classes.main}>
                            {renderFilterBar()}
                            {renderMessagesView()}
                            {<BubbleChat message="Moctar is typing"/>}
                            {renderMessageBox()}
                        </Paper>
                    )
                }
        }
    }

    return (
        <div className={classes.column}>
            <Button
                variant="contained"
                name="toggle-msg-window"
                endIcon={<ForumIcon/>}
                onClick={handleClick}
                className={classes.toggleBtn}
            >
                <b>Messages</b>
            </Button>
            {renderMsgWindow()}
        </div>
    )
};

export default ChatBox;