function PortfolioItem({ title, imgUrl, stack, link, description }) {
    return (
        <article className="project-card">
            <a className="project-image-link" href={link} target="_blank" rel="noreferrer">
                <img className="project-image" src={imgUrl} alt={`${title} project preview`} />
            </a>
            <div className="project-content">
                <div className="project-topline">
                    <h3>{title}</h3>
                    <a className="project-link" href={link} target="_blank" rel="noreferrer" aria-label={`View ${title} on GitHub`}>
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>
                <p className="project-description">{description}</p>
                <ul className="tag-list" aria-label={`${title} technologies`}>
                    {stack.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
        </article>
    )
}

export default PortfolioItem;