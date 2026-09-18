import type { PropsWithChildren, ReactNode } from "react"

interface CardProps extends PropsWithChildren{
    title : String;
    footer? : ReactNode
}

const Cards = ({children,title,footer}:CardProps) => {
  return (
    <div>
        <h2>{title}</h2>
        <div>{children}</div>
        { footer && <footer>{footer}</footer>}
    </div>
  )
}

export default Cards