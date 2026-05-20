import React, { useState } from 'react';
import './styles/FaqAccordion.css';

const faqs = [
  {
    question: '¿Necesito experiencia previa para invertir?',
    answer: 'No. Partimos de cero: glosario en PDF, mini-clases y ejemplos reales. Si sabés usar WhatsApp, ya estás listo.'
  },
  {
    question: '¿Cuánto tiempo me lleva por día?',
    answer: 'Menos de 5 minutos: leés el resumen diario y, si hay análisis, el mensaje explica la zona de compra, stop y objetivo.'
  },
  {
    question: '¿Cómo y cuándo recibo los mensajes?',
    answer: 'En un grupo de WhatsApp “solo admins”. Lunes a viernes 9 AM resumen + análisis en tiempo real cuando surge una oportunidad.'
  },
  {
    question: '¿Qué pasa después de los 7 días gratis?',
    answer: 'Te avisamos 24 h antes. Si no querés seguir, salís del grupo y listo. Si te sirve, MercadoPago renueva la suscripción automáticamente.'
  },
  {
    question: '¿Puedo cancelar en cualquier momento?',
    answer: 'Sí. Mandás “BAJA" por WhatsApp o cortás la suscripción en MercadoPago. Sin permanencia ni letra chica.'
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'MercadoPago (tarjeta, débito, pago fácil, etc.). Pronto sumaremos transferencia y cripto.'
  },
  {
    question: '¿Incluye recomendaciones obligatorias?',
    answer: 'No damos asesoramiento individual. Compartimos ideas, contexto y análisis; la decisión final es tuya.'
  },
  {
    question: '¿Qué diferencia a Impulso de un grupo de Telegram o Twitter?',
    answer: 'Filtros argentinos, info diaria sin spam, métricas locales (dólar MEP/CCL) y seguimiento de CEDEARs. Además, 97 % de los usuarios renueva mes a mes.'
  }
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="faq-title">Preguntas Frecuentes</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggle(index)}
          >
            <div className="faq-question">
              <strong>{faq.question}</strong>
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqAccordion;
