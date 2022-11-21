import React, {useState, useEffect} from "react";

import { Responsive, WidthProvider } from "react-grid-layout";

import { Paper } from "@mui/material";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = (props) => {

    const [breakpoint, setBreakpoint] = useState(null);
    const [layouts, setLayouts] = useState({
        lg: [
            {
              w: 8,
              h: 1,
              x: 0,
              y: 0,
              i: "a"
            },
            {
              w: 4,
              h: 1,
              x: 8,
              y: 0,
              i: "b"
            },
            {
              w: 5,
              h: 1,
              x: 0,
              y: 0,
              i: "c"
            },
            {
              w: 3,
              h: 1,
              x: 5,
              y: 0,
              i: "d"
            },
        ],
        md: [
            {
              w: 6,
              h: 1,
              x: 0,
              y: 0,
              i: "a"
            },
            {
              w: 4,
              h: 1,
              x: 6,
              y: 0,
              i: "b"
            },
            {
              w: 3,
              h: 1,
              x: 0,
              y: 0,
              i: "c"
            },
            {
              w: 3,
              h: 1,
              x: 3,
              y: 0,
              i: "d"
            },
        ],
        sm: [
            {
                "w": 6,
                "h": 1,
                "x": 0,
                "y": 0,
                "i": "a",
            },
            {
                "w": 6,
                "h": 1,
                "x": 0,
                "y": 1,
                "i": "b",
            },
            {
                "w": 6,
                "h": 1,
                "x": 0,
                "y": 2,
                "i": "c",
            },
            {
                "w": 6,
                "h": 1,
                "x": 0,
                "y": 3,
                "i": "d",
            }
        ],
        xs: [
            {
                "w": 4,
                "h": 1,
                "x": 0,
                "y": 0,
                "i": "a",
            },
            {
                "w": 4,
                "h": 1,
                "x": 0,
                "y": 1,
                "i": "b",
            },
            {
                "w": 4,
                "h": 1,
                "x": 0,
                "y": 2,
                "i": "c",
            },
            {
                "w": 4,
                "h": 1,
                "x": 0,
                "y": 3,
                "i": "d",
            }
        ]
    })

    useEffect(() => {
        console.log({breakpoint})
    }, [breakpoint])

    const onLayoutChange = (currentLayout) => {
        if(!breakpoint) return null
        console.log({currentLayout})
        setLayouts(prev => {
            const newState = {...prev};
            newState[breakpoint] = currentLayout;
            return newState
        })
    }

    return (
        <div style={{width: '100%'}}>
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                breakpoints={{ lg: 1280, md: 992, sm: 767, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                isDraggable
                isRearrangeable
                isResizable
                onLayoutChange={onLayoutChange}
                onResizeStop={onLayoutChange}
                onBreakpointChange={(newBreakpoint) => setBreakpoint(newBreakpoint)}
            >
                <Paper key="a" style={{backgroundColor: 'red'}}>a</Paper>
                <Paper key="b" style={{backgroundColor: 'blue'}}>b</Paper>
                <Paper key="c" style={{backgroundColor: 'green'}}>c</Paper>
                <Paper key="d" style={{backgroundColor: 'yellow'}}>d</Paper>
            </ResponsiveGridLayout>
        </div>
    )
}

export default Dashboard;

