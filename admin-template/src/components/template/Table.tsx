import Client from "@/core/client";

interface TableProps {
    clients: Client[]
}

export default function Table(props: TableProps) {
    return (
        <table>
            <tr>
                <th>id</th>
                <th>nome</th>
                <th>idade</th>
            </tr>
        </table>
    )
}