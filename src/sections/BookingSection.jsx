import { useState } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { services } from '../data/content'

export default function BookingSection() {
  const [status,setStatus] = useState('idle')

  const submit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.reportValidity()) return
    setStatus('ready')
  }

  return (
    <section id="contact" className="booking-v3 section-pad">
      <div className="booking-v3__copy" data-reveal>
        <span className="eyebrow">Private appointments</span>
        <h2>COME AS<br/><em>YOU ARE.</em></h2>
        <p>Tell us what you’re looking for and when you’d like to come in. The form validates locally until a booking endpoint is connected.</p>
      </div>

      <form className="booking-v3__form" onSubmit={submit} data-reveal>
        <label>Name<input name="name" autoComplete="name" required placeholder="Your name"/></label>
        <label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com"/></label>
        <label>Phone<input name="phone" type="tel" autoComplete="tel" required placeholder="+1 000 000 0000"/></label>
        <label>Service<select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label>
        <label>Preferred date<input name="date" type="date" required/></label>
        <button className="primary booking-v3__submit" type="submit">Request appointment <ArrowUpRight size={17}/></button>
        {status === 'ready' && (
          <div className="booking-v3__status" role="status"><CheckCircle2 size={18}/><span>Form validated. A booking endpoint still needs to be connected before launch.</span></div>
        )}
      </form>
    </section>
  )
}
