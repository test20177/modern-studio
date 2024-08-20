import React from 'react';
import { ContactFormWrapper } from './ContactForm.styles';
import { HighlightedHeading } from '../HighlightedHeading/HighlightedHeading';
import { StyledButton } from  '../../assets/styles/pages/homepage.styles';
import { useForm, ValidationError } from '@formspree/react';

export const ContactForm = () => {

  const [ state, handleSubmit ] = useForm('xdknlonq');

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <HighlightedHeading>Napisz do nas</HighlightedHeading>
      <label htmlFor="email">Adres e-mail</label>
      <input type="text" name="email" id="email" placeholder="Adres e-mail" />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">Treść</label>
      <textarea name="message" id="message" placeholder="Wiadomość" />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      {state.errors?.length ? state.errors.map( e =>
        <p key={e.message}>{(e.code === 'EMPTY') && 'Uzupełnij pola przed wysłaniem wiadomości'}</p>
      ) : null }
      { state.succeeded
          ? <p>Dziękujemy za wiadmość!</p>
          : null
      }
      <StyledButton type="submit" disabled={state.submitting}>Wyślij</StyledButton>
    </ContactFormWrapper>
  )
}