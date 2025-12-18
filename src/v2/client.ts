import { CreateInvoice } from "./types";
import AuthState from "./auth";
import axios, { AxiosRequestConfig } from "axios";

export default class QPayClient {
  private invoiceCode = "";
  private username = "";
  private password = "";
  private readonly url = "";
  private authState = new AuthState();
  private client = new axios.Axios({
    baseURL: this.url,
  });

  private async authenticate() {
    this.client.post();
  }

  private async getAccessToken() {
    if (this.authState.accessToken) {
      return this.authState.accessToken;
    } else {
      return await this.authenticate();
    }
  }

  async createInvoice(createInvoiceRequest: CreateInvoice) {
    const requestConfig: AxiosRequestConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await this.getAccessToken()}`,
      },
    };

    const invoiceCreateData = {
      ...createInvoiceRequest,
      invoice_code: this.invoiceCode,
    };

    const response = await this.client.post(
      "/",
      invoiceCreateData,
      requestConfig
    );

    console.log(response);
  }
}
