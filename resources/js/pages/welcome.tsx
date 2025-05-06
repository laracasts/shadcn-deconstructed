import { MyTable, MyTableBody, MyTableCaption, MyTableCell, MyTableHead, MyTableHeading, MyTableRow } from '@/components/ui/my-table';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const invoices = [
    {
        invoice: 'INV001',
        paymentStatus: 'Paid',
        totalAmount: '$250.00',
        paymentMethod: 'Credit Card',
    },
    {
        invoice: 'INV002',
        paymentStatus: 'Pending',
        totalAmount: '$150.00',
        paymentMethod: 'PayPal',
    },
    {
        invoice: 'INV003',
        paymentStatus: 'Unpaid',
        totalAmount: '$350.00',
        paymentMethod: 'Bank Transfer',
    },
    {
        invoice: 'INV004',
        paymentStatus: 'Paid',
        totalAmount: '$450.00',
        paymentMethod: 'Credit Card',
    },
    {
        invoice: 'INV005',
        paymentStatus: 'Paid',
        totalAmount: '$550.00',
        paymentMethod: 'PayPal',
    },
    {
        invoice: 'INV006',
        paymentStatus: 'Pending',
        totalAmount: '$200.00',
        paymentMethod: 'Bank Transfer',
    },
    {
        invoice: 'INV007',
        paymentStatus: 'Unpaid',
        totalAmount: '$300.00',
        paymentMethod: 'Credit Card',
    },
];

const puppies = [
    ['T-Rex', '2 yrs old', 'Corgi'],
    ['Frisket', '8 yrs old', 'Corgi'],
    [<Guest name="Bobby" />, '1 yr old', 'Corgi'],
];

function Guest({ name }: { name: string }) {
    return (
        <div className="flex items-center gap-4">
            <p>{name}</p>
            <div className="rounded-full bg-yellow-200 px-3 text-sm text-yellow-800">guest</div>
        </div>
    );
}

export default function TableDemo() {
    return (
        <div className="mx-auto flex max-w-4xl flex-col gap-20 p-8">
            <MyTable>
                <MyTableCaption>Puppies currently living in my house.</MyTableCaption>
                <MyTableHead>
                    <MyTableRow>
                        <MyTableHeading>Name</MyTableHeading>
                        <MyTableHeading>Age</MyTableHeading>
                        <MyTableHeading className="text-right">Breed</MyTableHeading>
                    </MyTableRow>
                </MyTableHead>
                <MyTableBody>
                    {puppies.map((puppy, index) => (
                        <MyTableRow key={index}>
                            <MyTableCell>{puppy[0]}</MyTableCell>
                            <MyTableCell>{puppy[1]}</MyTableCell>
                            <MyTableCell className="text-right">{puppy[2]}</MyTableCell>
                        </MyTableRow>
                    ))}
                </MyTableBody>
            </MyTable>
            {/* <MyTable
                caption="Puppies currently living in my house."
                columns={[
                    { label: 'Name', align: 'left' },
                    { label: 'Age', align: 'center' },
                    { label: 'Breed', align: 'right' },
                ]}
                data={puppies}
            />
            <MyTable
                caption="Invoices"
                columns={[
                    { label: 'Invoice', align: 'left' },
                    { label: 'Status', align: 'center' },
                    { label: 'Method', align: 'right' },
                    { label: 'Amount', align: 'right' },
                ]}
                data={invoices.map((invoice) => [invoice.invoice, invoice.paymentStatus, invoice.paymentMethod, invoice.totalAmount])}
            /> */}
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Method</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                            <TableCell className="font-medium">{invoice.invoice}</TableCell>
                            <TableCell>{invoice.paymentStatus}</TableCell>
                            <TableCell>{invoice.paymentMethod}</TableCell>
                            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
}
