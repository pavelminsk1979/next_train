import {ReactNode} from "react";

export default function BlogLayout({children}: {
    children: ReactNode
}) {
    return <>
        <div>{children}</div>
        <div>чтото внизу написал чтоб понимал это в layout который не основной а который для папки (rote2)</div>
    </>
}