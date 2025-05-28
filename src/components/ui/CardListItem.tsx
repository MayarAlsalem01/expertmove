export default function CardListItem({ text }: { text: string }) {
    return (
        <li className="marker:text-xs font-AeonikTRIALLight">
            {text}
        </li>
    )
}