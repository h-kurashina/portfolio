const technologyIcons: Record<string, string> = {
  TypeScript: 'typescript',
  Python: 'python',
  Go: 'go',
  Rust: 'rust',
  React: 'react',
}

export function TechnologyList({ names }: { names: string[] }) {
  return <ul className="technology-list">
    {names.map(name => {
      const icon = technologyIcons[name]
      return <li key={name} className="technology-card" data-technology={icon}>
        {icon && <img src={`/images/technologies/${icon}.svg`} alt="" width="44" height="44" loading="lazy" />}
        <span>{name}</span>
      </li>
    })}
  </ul>
}
