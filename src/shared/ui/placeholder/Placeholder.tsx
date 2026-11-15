type PlaceholderProps = {
  name: string
  description?: string
}

/**
 * Временная заглушка для ещё не свёрстанных блоков.
 * Когда делаете свой блок — просто замените <Placeholder /> на вёрстку.
 */
export const Placeholder = ({ name, description }: PlaceholderProps) => (
  <div className="my-4 rounded-card border-2 border-dashed border-primary/40 bg-primary/5 p-6 text-center">
    <p className="font-semibold text-primary">{name}</p>
    {description && <p className="mt-1 text-sm text-gray">{description}</p>}
  </div>
)
