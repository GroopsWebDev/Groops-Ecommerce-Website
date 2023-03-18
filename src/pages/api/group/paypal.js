import axios from "axios";
export const getAccessToken = async () => {
  try {
    let basicAuth = btoa(
      "Ac10w7nB1ajnCTJaCXeynxFdKTxZ4AkSkr834dFwKhGjvXRXIlKsvXKX-VdShQwAxr3wZyLrM5sR1HSB",
      "EMeevOopxMwhHpFa8XXkRhKUINRHoshugz6E3Am74q52dv1vqe--GdA5It8d4gTVZWtAJ8bRVDCEY2iU"
    );
    const response = await axios.post(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      "grant_type=client_credentials",
      {
        auth: {
          username:
            "Ac10w7nB1ajnCTJaCXeynxFdKTxZ4AkSkr834dFwKhGjvXRXIlKsvXKX-VdShQwAxr3wZyLrM5sR1HSB",
          password:
            "EMeevOopxMwhHpFa8XXkRhKUINRHoshugz6E3Am74q52dv1vqe--GdA5It8d4gTVZWtAJ8bRVDCEY2iU",
        },
        headers: {
          Authorization: "Basic " + basicAuth,
          "content-type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(response.data.access_token);
    return response.data.access_token;
  } catch (err) {
    console.error(err);
  }
};
export const refundAmount = async (paymentId, discountAMt, accessToken) => {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + accessToken);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      amount: {
        value: discountAMt,
        currency_code: "USD",
      },
      invoice_id: "INVOICE-159",
      note_to_payer: "Defective product",
    });

    const response = await fetch(
      "https://api.sandbox.paypal.com/v2/payments/captures/" +
        paymentId +
        "/refund",
      {
        method: "POST",
        body: raw,
        headers: myHeaders,
        redirect: "follow",
      }
    );
    console.log(response);
  } catch (err) {
    console.error(err);
  }
};
