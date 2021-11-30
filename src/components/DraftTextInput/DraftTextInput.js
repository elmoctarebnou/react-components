import React, {
    ReactElement,
    useCallback,
    useMemo,
    useRef,
    useState,
} from 'react';
import { EditorState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin, {
    defaultSuggestionsFilter,
} from '@draft-js-plugins/mention';
import mentions from './Mentions';

import makeStyles from "@mui/styles/makeStyles";
import { Paper } from '@mui/material';

import '@draft-js-plugins/mention/lib/plugin.css';
import { styles } from "./DraftTextInput.style";



export default function DraftTextInput(props) {

    // const { mentions, callback } = props;

    const ref = useRef(null);
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
    const [open, setOpen] = useState(false);
    const [suggestions, setSuggestions] = useState(mentions);

    const classes = makeStyles(styles())();
    const { MentionSuggestions, plugins } = useMemo(() => {
        const mentionPlugin = createMentionPlugin();
        const { MentionSuggestions } = mentionPlugin;
        const plugins = [mentionPlugin];
        return { plugins, MentionSuggestions };
    }, []);

    const onOpenChange = useCallback((_open) => {
        setOpen(_open);
    }, []);
    const onSearchChange = useCallback(({ value }) => {
        setSuggestions(defaultSuggestionsFilter(value, mentions));
    }, []);

    return (
        <Paper className={classes.main}  onClick={() => ref.current.focus()}>
            <Editor
                editorKey={'editor'}
                editorState={editorState}
                onChange={setEditorState}
                plugins={plugins}
                ref={ref}
            />
            <MentionSuggestions
                open={open}
                onOpenChange={onOpenChange}
                suggestions={suggestions}
                onSearchChange={onSearchChange}
                onAddMention={() => {
                    // get the mention object selected
                }}
            />
        </Paper>
    );
}