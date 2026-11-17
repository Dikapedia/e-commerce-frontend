import { useState } from 'react';
import { NewsletterForm } from './NewsletterForm';
import { SubscribedNotice } from './SubscribedNotice';

export function NewsletterSection() {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="py-24 bg-[#0e1118] border-t border-white/10">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-slate-400 font-medium">Private Journal</span>
        <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl text-white mt-3 mb-4">
          Join the TIMELESS Society
        </h2>
        <p className="text-slate-400 text-sm font-light mb-8 max-w-lg mx-auto">
          Receive exclusive access to limited edition releases, private salon invitations, and horological insights.
        </p>

        {subscribed ? (
          <SubscribedNotice />
        ) : (
          <NewsletterForm
            email={emailInput}
            onEmailChange={setEmailInput}
            onSubmit={() => {
              if (emailInput) setSubscribed(true);
            }}
          />
        )}
      </div>
    </section>
  );
}
