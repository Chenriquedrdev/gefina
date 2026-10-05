import type { InvoiceStatus } from './InvoiceType.ts';

export default function statusLabel(status: InvoiceStatus) {
    return status === 'paid' ? 'Pago' : 'Pendente';
}
    