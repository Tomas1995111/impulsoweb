const WHATSAPP_NUMBER = '5491124035535';

const PREFIX = 'Hola, vengo de la web';

const WA_MESSAGES = {
  default: `${PREFIX} y quiero sumarme`,
  hero: `${PREFIX} y quiero sumarme`,
  navbar: `${PREFIX} y quiero sumarme`,
  footer: `${PREFIX} y quiero sumarme`,
  scrollBanner: `${PREFIX} y quiero sumarme`,
  exitIntent: `${PREFIX}, estaba por irme pero me interesa`,
  planMensual: `${PREFIX} y quiero el plan mensual`,
  planTrimestral: `${PREFIX} y quiero el plan trimestral`,
  planAnual: `${PREFIX} y quiero el plan anual`,
  hazteMiembro: `${PREFIX} y quiero hacerme miembro del plan mensual`,
  floating: PREFIX,
  cursoAnalisis: `${PREFIX} y me interesa el curso de Análisis Técnico`,
  cursoCripto: `${PREFIX} y me interesa el curso de Criptomonedas`,
  cursoMoney: `${PREFIX} y me interesa el curso de Money Management`,
  packDuo: `${PREFIX} y me interesa el Pack Dúo`,
  packTrilogia: `${PREFIX} y me interesa el Pack Trilogía`,
  asesores: `${PREFIX} y quiero info sobre asesoría personalizada`,
};

export const waLink = (source = 'default') => {
  const message = WA_MESSAGES[source] || WA_MESSAGES.default;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export default waLink;
