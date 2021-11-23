import React, {PropsWithChildren} from "react";

type Props = {}

const Hover:React.FC<{ onHover:React.ReactNode, children:PropsWithChildren<Props> }> = (props) => (
    <div style={{height:"100%"}} className="hover">
        <div className="hover__no-hover">{props.children}</div>
        <div className="hover__hover">{props.onHover}</div>
    </div>
)

export default Hover