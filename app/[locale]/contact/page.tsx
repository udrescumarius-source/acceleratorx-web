"use client";
import {useState} from 'react';

export default function ContactPage() {
  const [state, setState] = useState<'idle'|'submitting'|'success'|'error'>('idle');
  const [error, setError] = useState<string>('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    setState('submitting');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error('Request failed');
      setState('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setState('error');
      setError('A apărut o eroare. Încercați din nou.');
    }
  }

  return (
    <section className="max-w-xl space-y-4">
      <h1 className="text-2xl font-semibold">Contact</h1>
      <form onSubmit={onSubmit} className="space-y-3">
        <input name="name" required placeholder="Nume" className="w-full border rounded px-3 py-2" />
        <input name="email" required type="email" placeholder="Email" className="w-full border rounded px-3 py-2" />
        <textarea name="message" required placeholder="Mesaj" className="w-full border rounded px-3 py-2 h-32" />
        <button disabled={state==='submitting'} className="bg-black text-white px-4 py-2 rounded">
          {state==='submitting' ? 'Se trimite...' : 'Trimite'}
        </button>
      </form>
      {state==='success' && <p className="text-green-600">Mesaj trimis.</p>}
      {state==='error' && <p className="text-red-600">{error}</p>}
    </section>
  );
}