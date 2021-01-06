import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { Link } from "react-router-dom";

import { STRIPE_KEY } from "../../utils/config";

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#FFF',
      color: '#fff',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#FFF',
      },
      '::placeholder': {
        color: 'rgba(142, 142, 142, 1)',
      },
    },
    invalid: {
      iconColor: '#FFF',
      color: '#FFF',
    },
  },
};


const CardField = ({ onChange }) => (
  <div className="FormRow">
    <CardElement options={CARD_OPTIONS} onChange={onChange} />
  </div>
);


const Field = ({
  label,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}) => (
    <div className="FormRow">
      <label htmlFor={id} className="FormRowLabel">
        {label}
      </label>
      <input
        className="FormRowInput"
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
    </div>
  );


const SubmitButton = ({ processing, error, children, disabled }) => (
  <button
    className={`SubmitButton ${error ? 'SubmitButton--error' : ''}`}
    type="submit"
    disabled={processing || disabled}
  >
    {processing ? 'Cargando...' : children}
  </button>
);


const ErrorMessage = ({ children }) => (
  <div className="ErrorMessage" role="alert">
    <svg width="16" height="16" viewBox="0 0 17 17">
      <path
        fill="#FFF"
        d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
      />
      <path
        fill="#6772e5"
        d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
      />
    </svg>
    {children}
  </div>
);

const CheckoutForm = ({
  makePayment
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [terminosCondiciones, setTerminosCondiciones] = useState(false);
  const [terminosCondicionesRegañar, setTerminosCondicionesRegañar] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    email: '',
    phone: '',
    name: '',
  });


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!terminosCondiciones) {
      setTerminosCondicionesRegañar(true);
    } else {
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }


      if (error) {
        elements.getElement('card').focus();
        return;
      }


      if (cardComplete) {
        setProcessing(true);
      }


      const payload = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
        billing_details: billingDetails,
      });


      setProcessing(false);


      if (payload.error) {
        setError(payload.error);
      } else {
        makePayment(payload.paymentMethod);
      };
    };
  };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <fieldset className="FormGroup">
        <Field
          label="Nombre"
          id="name"
          type="text"
          placeholder="Nombre completo"
          required
          autoComplete="name"
          value={billingDetails.name}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, name: e.target.value });
          }}
        />
        <Field
          label="Email"
          id="email"
          type="email"
          placeholder="ejemplo@gmail.com"
          required
          autoComplete="email"
          value={billingDetails.email}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, email: e.target.value });
          }}
        />
        <Field
          label="Teléfono"
          id="phone"
          type="tel"
          placeholder="(444) 444-4444"
          required
          autoComplete="tel"
          value={billingDetails.phone}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, phone: e.target.value });
          }}
        />
      </fieldset>
      <fieldset className="FormGroup">
        <CardField
          onChange={(e) => {
            setError(e.error);
            setCardComplete(e.complete);
          }}
        />
      </fieldset>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      <div className="terminos-condiciones-acepto-container">
        <div>
          <input onChange={() => {
            setTerminosCondicionesRegañar(false);
            setTerminosCondiciones(!terminosCondiciones)
          }} type="checkbox" name="Acepto" id="checkbox-stripe-terminos-condiciones" value="Acepto" />
          <label htmlFor="checkbox-stripe-terminos-condiciones">Acepto los términos y condiciones</label>
        </div>
      </div>
      {terminosCondicionesRegañar ? (
        <div className="terminos-condiciones-acepto-container-regaño">
          Debes de aceptar los términos y condiciones
          <br />
          <Link to="/terminos" className="terminos-condiciones-acepto-container-regaño-link" title="Ir a Términos y Condiciones" style={{ cursor: "pointer" }}>
            Ir a Términos y Condiciones
          </Link>
        </div>) : (<></>)}
      <SubmitButton processing={processing} error={error} disabled={!stripe}>
        Pagar $150 mexicanos
      </SubmitButton>
    </form>
  );
};


const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
    },
  ],
};

const stripePromise = loadStripe(STRIPE_KEY);

const App = ({
  makePayment
}) => {
  return (
    <div className="AppWrapper">
      <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
        <CheckoutForm
          makePayment={makePayment}
        />
      </Elements>
    </div>
  );
};

export default App;