import css from './Cta.module.css';
import Form from './Form';

export default function Cta() {
  return (
    <section className={css.cta}>
      <div className={css.center}>
        <h2>Subscribe Now</h2>
        <p>
          Subscribe to Our Newsletter to get Important News, <br /> Amazing
          Offers and Inside Scoops:
        </p>
        <Form />
      </div>
    </section>
  );
}

// susikuriam sekcija

// prididedam kontenta

// sukuriam forma, forma persiuncia isvestus nuomenis i teveini el

// pridedam forma

// padarom kad CTA butu pernaudojamas komponentas kuris pasiima tittle, subtitle ir is jo gaunam ivesta input
