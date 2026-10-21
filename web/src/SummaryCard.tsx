interface SummaryCardProps {
    label: string;
    value: string;
}

export default function SummaryCard(props: SummaryCardProps) {
    return <div>
        <p>{props.label}</p>
        <p className='numéric'>{props.value}</p>
    </div>;
}