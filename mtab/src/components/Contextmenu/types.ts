export interface ContextmenuItem {
    text?: string
    subText?: string
    divider?: boolean
    handler?: (el: HTMLElement) => void
}

export interface Axis {
    x: number
    y: number
}