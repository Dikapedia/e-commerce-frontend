interface NewsletterFormProps {
  email: string;
  onEmailChange: (value: string) => void;
  onSubmit: () => void;
}

export function NewsletterForm({ email, onEmailChange, onSubmit }: NewsletterFormProps) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        onSubmit();
      }}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input
        type="email"
        value={email}
        onChange={event => onEmailChange(event.target.value)}
        placeholder="Enter your email address"
        required
        className="bg-black/40 border border-white/20 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-white flex-1"
      />
      <button
        type="submit"
        className="bg-white text-black px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-slate-200 transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
}
