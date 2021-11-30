function styles() {
    return {
        column: {
            display: "flex",
            flexDirection: "column",
        },
        row: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
        },
        main: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50vw",
            padding: "0 1em 1em 1em",
        },
        filterBar: {
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            width: "100%",
            margin: "0 0 1em 0",
            padding: ".5em .2em"
        },
        searchInput: {
            margin: "0 0 0 auto",
            outlined: "none"
        },
        msgView: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
        },
        msgRow: {
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            width: "100%",
            marginBottom: "1em"
        },
        personIcon: {
            fontSize: "3em",
            color: "gray",
        },
        msgInfo: {
            display: "flex",
            flexDirection: "column",
            padding: ".5em 0 0 0.3em"
        },
        userName: {
            fontSize: ".9em",
            marginRight: ".5em"
        },
        date: {
            fontSize: ".9em",
        },
        msgBox: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            marginTop: "1em"
        },
        textarea: {
            width: "98%",
            border: "none",
            borderRadius: "5px",
            margin: "0.5em 0 0 0",
            resize: "none",
            outline: "none",
            fontFamily: "arial",
            fontSize: "1em"
        },
        msgBoxUtilsRow: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
        },
        sendBtn: {
            color: "green",
            padding: ".3em .5em",
            "&:hover": {
                cursor: "pointer",
                opacity: ".9"
            },
            margin: "0 0 0 auto"
        },
        sendBtnDisable: {
            color: "gray",
            padding: ".3em .5em",
            margin: "0 0 0 auto"
        },
        toggleBtn: {
            margin: "0 0 2em auto"
        },
        toggleBtnVertical: {
            margin: "0 0 0 auto",
            transform: "rotate(90deg)"

        }
    };
}


export { styles };