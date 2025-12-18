export interface CreateInvoice {
  invoice_code?: string;
  sender_invoice_no: string;
  invoice_receiver_code: string;
  invoice_description: string;
  amount: number;
  callback_url: string;
}

export interface DeepLink {
  name: string;
  description: string;
  logo: string;
  link: string;
}

export interface QPayCreateInvoiceResponse {
  invoice_id: string;
  qr_text: string;
  qr_image: string;
  qPay_shortUrl: string;
  urls: DeepLink[];
}
