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
    <section id="contact" className="booking section-pad">
      <div className="booking-copy">
        <span className="eyebrow">Private appointments</span>
        <h2>READY TO FEEL<br/><em>YOUR BEST?</em></h2>
        <p>Tell the KARINĒ team what you’re looking for and your preferred date.</p>
      </div>

      <form className="booking-form" onSubmit={submit}>
        <label>Name<input name="name" autoComplete="name" required placeholder="Your name"/></label>
        <label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com"/></label>
        <label>Phone<input name="phone" type="tel" autoComplete="tel" required placeholder="+1 000 000 0000"/></label>
        <label>Service<select name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label>
        <label>Preferred date<input name="date" type="date" required/></label>
        <button className="primary booking-submit" type="submit">Request Appointment <ArrowUpRight size={17}/></button>
        {status === 'ready' && (
          <div className="booking-status" role="status"><CheckCircle2 size={18}/><span>Your request is validated. Connect the salon booking endpoint before launch to transmit submissions.</span></div>
        )}
      </form>
    </section>
  )
}
