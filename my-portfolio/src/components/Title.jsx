function Title({ children, eyebrow, id }) {
   return (
      <div className="section-heading">
         {eyebrow && <p className="section-kicker">{eyebrow}</p>}
         <h2 className="section-title" id={id}>{children}</h2>
      </div>
   )
}

export default Title;